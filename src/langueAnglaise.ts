import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";
import {MomentDeLaJournée} from "./momentDeLaJournée";

export class LangueAnglaise implements LangueInterface {
    public Acquitter(): string {
        return Expressions.GOODBYE;
    }

    public Saluer(moment: MomentDeLaJournée): string {
        return Expressions.HELLO;
    }

    public Féliciter(): string {
        return Expressions.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}