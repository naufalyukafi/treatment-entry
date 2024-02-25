'use strict';
import { Request, Response, NextFunction } from 'express';
import { database } from '../config/database'
import { CategoryInterface } from '../interfaces/Categories';
import Categories from '../models/Categories';

const Joi = require("joi");
const response = require("../response");

const addCategory = async (req: Request, res: Response) => {
    try {
        const schema = Joi.object({
            nameCategory: Joi.string().min(3).required().messages({
                "any.required": `"Name Category" tidak boleh dikosongi`,
                "string.empty": `"Name Category" tidak boleh dikosongi`,
                "string.min": `"Name Category" harus memiliki setidaknya 3 karakter`,
            }),

        });

        const { error } = schema.validate(req.body);
        if (error) return response.errorParams(error.message, res);

        const data = req.body;
        await database.collection('categories').add(data)
        response.success(data, res);
    } catch (error) {
        response.errorParams(error, res);
    }
}

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await database.collection('categories').get();
        const CategoryData: CategoryInterface[] = [];
        if (data.empty) {
            res.status(404).send('No Category record found');
        } else {
            console.log(data)
            data.forEach(doc => {
                const Category: CategoryInterface = new Categories(
                    doc.id,
                    doc.data().nameCategory,
                );
                CategoryData.push(Category);
            });
            response.success(CategoryData, res);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    addCategory,
    getCategory
}