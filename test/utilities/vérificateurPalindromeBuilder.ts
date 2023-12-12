import {VérificateurPalindrome} from "../../src/domain/vérificateurPalindrome";
import {LangueInterface} from "../../src/domain/langue.interface";
import {LangueStub} from "./langueStub";
import {MomentDeLaJournée} from "../../src/domain/momentDeLaJournée";

export class VérificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueStub();
    private _moment: MomentDeLaJournée = MomentDeLaJournée.Inconnu;

    public static Default() {
        return new VérificateurPalindromeBuilder().Build();
    }

    public Build(): VérificateurPalindrome {
        return new VérificateurPalindrome(this._langue, this._moment);
    }

    public AyantPourLangue(langue: LangueInterface): VérificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournée(moment: MomentDeLaJournée) {
        this._moment = moment;
        return this;
    }
}