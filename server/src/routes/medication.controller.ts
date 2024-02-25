'use strict';
import { Request, Response, NextFunction } from 'express';
import { database } from '../config/database'
import { PatientInterface } from '../interfaces/Patient';
import Patient from '../models/Patient';
import formatter from '../utils/fotmater';
import { MedicationsPrescribedInterface } from '../interfaces/MedicationsPrescribed';
import medicationsPrescribed from '../models/MedicationPrescribed';

const Joi = require("joi");
const response = require("../response");

const addMedication = async (req: Request, res: Response) => {
    try {
        const schema = Joi.object({
            name: Joi.string().min(3).max(25).required().messages({
                "any.required": `"medication name" tidak boleh dikosongi`,
                "string.empty": `"medication name" tidak boleh dikosongi`,
                "string.min": `"medication name" harus memiliki setidaknya 3 karakter`,
                "string.max": `"medication name" maksimal 25 karakter`,
            }),
            dosage: Joi.string().required().messages({
                "any.required": `"medication name" tidak boleh dikosongi`,
                "string.empty": `"medication name" tidak boleh dikosongi`,
            })
        });


        const { error } = schema.validate(req.body);
        if (error) return response.errorParams(error.message, res);

        const data = req.body;
        await database.collection('medications').add(data)
        response.success(data, res);
    } catch (error) {
        response.errorParams(error, res);
    }
}

const getMedication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await database.collection('medications').get();
        const medicationArray: MedicationsPrescribedInterface[] = [];
        if (data.empty) {
            res.status(404).send('No medication prescribed record found');
        } else {
            data.forEach(doc => {
                const patient: MedicationsPrescribedInterface = new medicationsPrescribed(
                    doc.id,
                    doc.data().name,
                    doc.data().dosage
                );
                medicationArray.push(patient);
            });
            response.success(medicationArray, res);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    addMedication,
    getMedication
}