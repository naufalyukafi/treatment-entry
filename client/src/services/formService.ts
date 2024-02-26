import Http from "@/utils/fetch";

const formService = {
    addPatient(payload) {
        return Http.post(`new-patient`, payload);
    },
    fetchTreatments() {
        return Http.get(`/treatments`)
    },
    fetchMedications() {
        return Http.get(`/medications`)
    }


};

export default formService;