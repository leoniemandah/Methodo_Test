import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";
import {MomentDeLaJournée} from "./momentDeLaJournée";

export class LangueAnglaise implements LangueInterface {
    public Acquitter(): string {
        return Expressions.GOODBYE;
    }

    public Saluer(moment: MomentDeLaJournée): string {
        if(moment == MomentDeLaJournée.Matin)
            return Expressions.GOOD_MORNING;

        if(moment == MomentDeLaJournée.AprèsMidi)
            return Expressions.GOOD_AFTERNOON;

        if(moment == MomentDeLaJournée.Soirée)
            return Expressions.GOOD_EVENING;

        if(moment == MomentDeLaJournée.Nuit)
            return Expressions.GOOD_NIGHT;

        return Expressions.HELLO;
    }

    public Féliciter(): string {
        return Expressions.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}