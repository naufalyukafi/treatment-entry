'use strict';
import { Request, Response, NextFunction } from 'express';
import { database } from '../config/database'
import TreatmentDescriptions from '../models/TreatmentDescriptions';
import { TreatmentDescriptionInterface } from '../interfaces/TreatmentDescriptions';

const Joi = require("joi");
const response = require("../response");

const addTreatment = async (req: Request, res: Response) => {
    try {
        const schema = Joi.object({
            treatmentDescription: Joi.string().min(3).required().messages({
                "any.required": `"treatmentDescription" tidak boleh dikosongi`,
                "string.empty": `"treatmentDescription" tidak boleh dikosongi`,
                "string.min": `"treatmentDescription" harus memiliki setidaknya 3 karakter`,
            }),
            category: Joi.string().min(3).required().messages({
                "any.required": `"category" tidak boleh dikosongi`,
                "string.empty": `"category" tidak boleh dikosongi`,
                "string.min": `"category" harus memiliki setidaknya 3 karakter`,
            }),
            price: Joi.number().positive().precision(2).required().messages({
                "any.required": `"price" tidak boleh dikosongi`,
                "number.base": `"price" harus berupa angka`,
                "number.positive": `"price" harus bernilai positif`,
                "number.precision": `"price" maksimal dua angka di belakang koma`
            })
        });


        const { error } = schema.validate(req.body);
        if (error) return response.errorParams(error.message, res);

        const data = req.body;
        await database.collection('treatments').add(data)
        response.success(data, res);
    } catch (error) {
        response.errorParams(error, res);
    }
}

const getTreatment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await database.collection('treatments').get();
        const treatmentDescriptionArray: TreatmentDescriptionInterface[] = [];

        if (data.empty) {
            return res.status(404).send('No treatment record found');
        }

        const promises = data.docs.map(async doc => {
            const categoryId = doc.data().category;
            const docRef = database.collection('categories').doc(categoryId.toString());

            try {
                const el = await docRef.get();
                if (el.exists) {
                    const treatment: TreatmentDescriptionInterface = new TreatmentDescriptions(
                        doc.id,
                        doc.data().treatmentDescription,
                        el.data()?.nameCategory,
                        doc.data().price
                    );
                    treatmentDescriptionArray.push(treatment);
                } else {
                    return res.status(404).send('Category does not exist');
                }
            } catch (err) {
                console.log('Error getting document:', err);
                return res.status(500).send('Internal server error');
            }
        });

        await Promise.all(promises);

        response.success(treatmentDescriptionArray, res);
    } catch (error) {
        console.log('Error:', error);
        res.status(400).send('Bad request');
    }
}

module.exports = {
    addTreatment,
    getTreatment
}