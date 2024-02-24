const express = require("express");
const router = express.Router();
const { getPatient, addPatient } = require("./patient.controller");

router.get("/patient", getPatient);
router.post("/new-patient", addPatient);

module.exports = router