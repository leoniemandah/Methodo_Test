import {LangueInterface} from "../../src/langue.interface";
import {MomentDeLaJournée} from "../../src/momentDeLaJournée";

export class LangueStub implements LangueInterface {
    Féliciter(): string {
        return "";
    }

    Saluer(moment: MomentDeLaJournée): string {
        return "";
    }
    Acquitter(): string {
        return "";
    }

}