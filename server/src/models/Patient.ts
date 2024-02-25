export default class Patient {
    patientName: string;
    dateOfTreatment: Date;
    treatmentDescription: string[];
    medicationsPrescribed: string[];
    costOfTreatment: number;
    patientId: string | number;

    constructor(
        patientId: string | number,
        patientName: string,
        dateOfTreatment: Date,
        treatmentDescription: string[],
        medicationsPrescribed: string[],
        costOfTreatment: number
    ) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.dateOfTreatment = dateOfTreatment;
        this.treatmentDescription = treatmentDescription;
        this.medicationsPrescribed = medicationsPrescribed;
        this.costOfTreatment = costOfTreatment;
    }
}
