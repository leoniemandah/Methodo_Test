import {VérificateurPalindrome} from "../../src/vérificateurPalindrome";
import {LangueInterface} from "../../src/langue.interface";
import {LangueStub} from "./langueStub";
import {MomentDeLaJournée} from "../../src/momentDeLaJournée";

export class VérificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueStub();

    public static Default() {
        return new VérificateurPalindromeBuilder().Build();
    }

    public Build(): VérificateurPalindrome {
        return new VérificateurPalindrome(this._langue);
    }

    public AyantPourLangue(langue: LangueInterface): VérificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournée(moment: MomentDeLaJournée) {
        return this;
    }
}