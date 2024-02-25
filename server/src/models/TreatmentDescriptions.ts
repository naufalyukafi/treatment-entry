export default class TreatmentDescriptions {
    treatmentDescription: string;
    category: string;
    price: number;
    id: string;
    constructor(
        id: string,
        treatmentDescription: string,
        category: string,
        price: number
    ) {
        this.id = id;
        this.treatmentDescription = treatmentDescription;
        this.category = category;
        this.price = price;
    }
}