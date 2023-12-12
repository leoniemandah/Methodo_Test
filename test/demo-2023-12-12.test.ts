import {VérificateurPalindrome} from "../src/domain/vérificateurPalindrome";
import {VérificateurPalindromeBuilder} from "./utilities/vérificateurPalindromeBuilder";
import {MomentDeLaJournée} from "../src/domain/momentDeLaJournée";
import {LangueAnglaise} from "../src/domain/langueAnglaise";
import {LangueFrançaise} from "../src/domain/langueFrançaise";

describe("Démo du 12/12/2023", () => {
    test("Recette", () => {
        let vérificateurAnglaisVespéral
            = new VérificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournée(MomentDeLaJournée.Soirée)
            .AyantPourLangue(new LangueAnglaise())
            .Build();

        let vérificateurFrançaisNocturne
            = new VérificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournée(MomentDeLaJournée.Nuit)
            .AyantPourLangue(new LangueFrançaise())
            .Build();

        // Un palindrome, en anglais, le soir
        console.log(vérificateurAnglaisVespéral.Vérifier("kayak"));

        // Même instance, mais non-palindrome
        console.log(vérificateurAnglaisVespéral.Vérifier("typescript"));

        // Un non-palindrome en français, la nuit
        console.log(vérificateurFrançaisNocturne.Vérifier("haricot"));
    });
})