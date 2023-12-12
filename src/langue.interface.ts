import {MomentDeLaJournée} from "./momentDeLaJournée";

export interface LangueInterface {
    Féliciter(): string;

    Saluer(moment: MomentDeLaJournée): string;

    Acquitter(): string;
}