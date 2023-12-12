import {VérificateurPalindromeBuilder} from "./utilities/vérificateurPalindromeBuilder";
import {LangueFake} from "./utilities/langueFake";
import * as os from "os";

describe("Debug du 12/12/2023", () => {
    test.each([['test', 'radar']])("Pas de saut de ligne terminal",
        (chaîne: string) => {
        let verificateur = new VérificateurPalindromeBuilder()
            .AyantPourLangue(new LangueFake())
            .Build();

        let résultat = verificateur.Vérifier(chaîne);

        expect(résultat.endsWith(os.EOL)).toBe(true);
    });
})