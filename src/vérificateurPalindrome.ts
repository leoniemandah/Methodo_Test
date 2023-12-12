import * as os from "os";
import {LangueInterface} from "./langue.interface";
import {MomentDeLaJournée} from "./momentDeLaJournée";

export class VérificateurPalindrome {
    private readonly _langue: LangueInterface;

    constructor(langue: LangueInterface) {
        this._langue = langue;

    }

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this._langue.Saluer(MomentDeLaJournée.Matin) + os.EOL + miroir + os.EOL;

        if (miroir == chaîne)
            sortie += this._langue.Féliciter() + os.EOL;

        return sortie + this._langue.Acquitter();
    }
}