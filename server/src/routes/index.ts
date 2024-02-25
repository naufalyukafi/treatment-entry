const express = require("express");
const router = express.Router();
const { getPatient, addPatient } = require("./patient.controller");
const { getCategory, addCategory } = require("./category.controller");
const { getTreatment, addTreatment } = require("./treatment.controller");
const { getMedication, addMedication } = require("./medication.controller");

// Patient
router.get("/patient", getPatient);
router.post("/new-patient", addPatient);

// Category
router.get("/categories", getCategory);
router.post("/new-category", addCategory);

// Treatment
router.get("/treatments", getTreatment);
router.post("/new-treatment", addTreatment);

//medications
router.get("/medications", getMedication);
router.post("/new-medication", addMedication);

module.exports = router