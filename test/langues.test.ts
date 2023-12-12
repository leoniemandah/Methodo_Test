import {LangueFrançaise} from "../src/langueFrançaise";
import {Expressions} from "../src/expressions";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";
import {MomentDeLaJournée} from "../src/momentDeLaJournée";

describe("Langues", () => {
    test.each([
        [new LangueFrançaise(), Expressions.BONJOUR],
        [new LangueAnglaise(), Expressions.HELLO],
    ])("En %s on salue le matin par '%s'",
        (langue: LangueInterface, attendu: string) => {
        expect(langue.Saluer(MomentDeLaJournée.Matin)).toBe(attendu)
    })
});