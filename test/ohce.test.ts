import * as os from "os";
import './utilities/stringMatchers.d.ts';
import './utilities/stringMatchers';
import {Expressions} from "../src/domain/expressions";
import {LangueFrançaise} from "../src/domain/langueFrançaise";
import {VérificateurPalindromeBuilder} from "./utilities/vérificateurPalindromeBuilder";
import {LangueAnglaise} from "../src/domain/langueAnglaise";
import {LangueInterface} from "../src/domain/langue.interface";
import {LangueFake} from "./utilities/langueFake";
import {MomentDeLaJournée} from "../src/domain/momentDeLaJournée";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']
const momentsDeLaJournée = [
    MomentDeLaJournée.Inconnu,
    MomentDeLaJournée.Matin,
    MomentDeLaJournée.AprèsMidi,
    MomentDeLaJournée.Soirée,
    MomentDeLaJournée.Nuit
];

describe("En tant qu'utilisateur je veux vérifier si un mot est un palindrome.", () => {
    test.each([...nonPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (chaîne: string) => {
            let résultat = VérificateurPalindromeBuilder.Default()
                .Vérifier(chaîne);

            let attendu = chaîne.split('').reverse().join('');
            expect(résultat).toContain(attendu);
        });

    test.each([
        [new LangueFrançaise(), Expressions.BIEN_DIT],
        [new LangueAnglaise(), Expressions.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (langue: LangueInterface, attendu: string) => {
            let vérificateur = new VérificateurPalindromeBuilder()
                .AyantPourLangue(langue)
                .Build();

            let résultat = vérificateur.Vérifier(palindrome);

            expect(résultat).toContain(palindrome + os.EOL + attendu);
        });

    function casesSalutations(){
        let chaînes = [...nonPalindromes, palindrome];
        let cases: [MomentDeLaJournée, string][]  = [];

        for (let momentDeLaJournée of momentsDeLaJournée)
            for(let chaîne of chaînes)
                cases.push([momentDeLaJournée, chaîne])

        return cases;
    }

    test.each(casesSalutations())(
        'ETANT DONNE un utilisateur parlant une langue ' +
        'ET que nous sommes le %s ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS les salutations de cette langue à ce moment de la journée sont envoyées avant toute réponse',
        (momentDeLaJournée: MomentDeLaJournée, chaîne: string) => {
            let langueFake = new LangueFake();

            let vérificateur =
                new VérificateurPalindromeBuilder()
                    .AyantPourLangue(langueFake)
                    .AyantPourMomentDeLaJournée(momentDeLaJournée)
                    .Build();

            let résultat = vérificateur.Vérifier(chaîne);
            let attendu = langueFake.Saluer(momentDeLaJournée);
            // @ts-ignore
            expect(résultat).ayantPourPremièreLigne(attendu)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant français ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaîne: string) => {
            const langue = new LangueFrançaise();
            let vérificateur =
                new VérificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let résultat = vérificateur.Vérifier(chaîne);

            // @ts-ignore
            expect(résultat).ayantPourDernièreLigne(Expressions.AU_REVOIR)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant anglais ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Goodbye" est envoyé en dernier.',
        (chaîne: string) => {
            const langue = new LangueAnglaise();
            let vérificateur =
                new VérificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let résultat = vérificateur.Vérifier(chaîne);
            // @ts-ignore
            expect(résultat).ayantPourDernièreLigne(Expressions.GOODBYE)
        });
});