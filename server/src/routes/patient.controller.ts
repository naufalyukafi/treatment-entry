'use strict';
import { Request, Response, NextFunction } from 'express';
import { database } from '../config/database'
import { PatientInterface } from '../interfaces/Patient';
import Patient from '../models/Patient';
import formatter from '../utils/fotmater';

const Joi = require("joi");
const response = require("../response");

const addPatient = async (req: Request, res: Response) => {
    try {
        const schema = Joi.object({
            patientName: Joi.string().min(3).max(25).required().messages({
                "any.required": `"patientName" tidak boleh dikosongi`,
                "string.empty": `"patientName" tidak boleh dikosongi`,
                "string.min": `"patientName" harus memiliki setidaknya 3 karakter`,
                "string.max": `"patientName" maksimal 25 karakter`,
            }),
            dateOfTreatment: Joi.date().iso().required().messages({
                "any.required": `"dateOfTreatment" tidak boleh dikosongi`,
                "date.base": `"dateOfTreatment" harus berupa tanggal yang valid`
            }),
            treatmentDescription: Joi.array().items(Joi.string()).required().messages({
                "any.required": `"treatmentDescription" tidak boleh dikosongi`,
                "array.base": `"treatmentDescription" harus berupa array`,
                "array.items": `"treatmentDescription" harus berisi string saja`
            }),
            medicationsPrescribed: Joi.array().items(Joi.string()).required().messages({
                "any.required": `"medicationsPrescribed" tidak boleh dikosongi`,
                "array.base": `"medicationsPrescribed" harus berupa array`,
                "array.items": `"medicationsPrescribed" harus berisi string saja`
            }),
            costOfTreatment: Joi.number().positive().precision(2).required().messages({
                "any.required": `"costOfTreatment" tidak boleh dikosongi`,
                "number.base": `"costOfTreatment" harus berupa angka`,
                "number.positive": `"costOfTreatment" harus bernilai positif`,
                "number.precision": `"costOfTreatment" maksimal dua angka di belakang koma`
            })
        });


        const { error } = schema.validate(req.body);
        if (error) return response.errorParams(error.message, res);

        const data = req.body;
        await database.collection('patient').add({
            ...data,
            patientId: formatter.generateRandomId()
        })
        response.success(data, res);
    } catch (error) {
        response.errorParams(error, res);
    }
}

const getPatient = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = req.query.page ? parseInt(req.query.page as string) : 1;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize as string) : 10;
        const searchQuery = req.query.search ? req.query.search.toString() : '';
        let query = database.collection('patient') as FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
        if (searchQuery) {
            query.where('patientName', '>=', searchQuery).where('patientName', '<=', searchQuery + '\uf8ff') //unicode
                .where('treatmentDescription', 'array-contains', searchQuery); //search for array
        }

        const data = await query.orderBy('patientName').offset((page - 1) * pageSize).limit(pageSize).get();

        const patientsArray: PatientInterface[] = [];
        if (data.empty) {
            response.success([], res);
        } else {
            data.forEach(doc => {
                const patient: PatientInterface = new Patient(
                    doc.data().patientId,
                    doc.data().patientName,
                    doc.data().dateOfTreatment,
                    doc.data().treatmentDescription,
                    doc.data().medicationsPrescribed,
                    doc.data().costOfTreatment,
                );
                patientsArray.push(patient);
            });

            response.success(patientsArray, res, pageSize, page);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    addPatient,
    getPatient
}