import {LangueInterface} from "../../src/domain/langue.interface";
import {MomentDeLaJournée} from "../../src/domain/momentDeLaJournée";

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