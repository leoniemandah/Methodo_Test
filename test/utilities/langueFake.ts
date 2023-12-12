import {LangueInterface} from "../../src/domain/langue.interface";
import {MomentDeLaJournée} from "../../src/domain/momentDeLaJournée";

export class LangueFake implements LangueInterface {
    Féliciter(): string {
        return "Félicitations";
    }

    Saluer(moment: MomentDeLaJournée): string {
        return "Salutations/" + moment.toString();
    }
    Acquitter(): string {
        return "Acquittance";
    }
}