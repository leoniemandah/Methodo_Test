export class MomentDeLaJournée {
    private readonly _representation: string;

    public static Matin: MomentDeLaJournée = new MomentDeLaJournée("Matin");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}