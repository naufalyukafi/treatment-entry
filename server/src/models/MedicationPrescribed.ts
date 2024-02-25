export default class medicationsPrescribed {
    id: string;
    name: string;
    dosage: string;
    constructor(
        id: string,
        name: string,
        dosage: string
    ) {
        this.id = id;
        this.name = name;
        this.dosage = dosage;
    }
}
