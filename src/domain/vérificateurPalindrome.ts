import * as os from "os";
import {LangueInterface} from "./langue.interface";
import {MomentDeLaJournée} from "./momentDeLaJournée";

export class VérificateurPalindrome {
    private readonly _langue: LangueInterface;
    private readonly _momentDeLaJournée: MomentDeLaJournée;

    constructor(langue: LangueInterface, momentDeLaJournée: MomentDeLaJournée) {
        this._langue = langue;
        this._momentDeLaJournée = momentDeLaJournée;
    }

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this._langue.Saluer(this._momentDeLaJournée) + os.EOL + miroir + os.EOL;

        if (miroir == chaîne)
            sortie += this._langue.Féliciter() + os.EOL;

        return sortie + this._langue.Acquitter() + os.EOL;
    }
}