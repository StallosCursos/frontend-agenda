import { NumeroContato } from "./numerocontato.model";

export class Contato {
    id: number;
    nome: string;
    email: string;
    numeroContato: NumeroContato[];

    constructor() {
        this.numeroContato = new Array<NumeroContato>();
    }
}