import {Entity} from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
    private constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string) {
        const correction = new Correction(props, id);

        return correction;

        /* utilizado ao invés do constructor em si
         * motivo: validações a nível de domínio são realizadas no método create
         * static pois não precisa instanciar a classe quando é chamado
        */
    }
}
