export interface PatientInterface {
    patientId: number | string;
    patientName: string;
    dateOfTreatment: Date;
    treatmentDescription: string[];
    medicationsPrescribed: string[];
    costOfTreatment: number;
}
