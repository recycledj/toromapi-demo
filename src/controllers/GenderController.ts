import { Request, Response, NextFunction } from "express";
import { Genders } from "../entity/Genders";
import { getRepository } from "typeorm";

export class GenderController {
    static async saveGender(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const gender = new Genders();

            gender.name = body.name;

            const save = await getRepository(Genders).save(gender);

            if (save) return res.status(200).json({ status: res.statusCode, message: 'created!' });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async GetGenders (req: Request, res: Response, next: NextFunction) {
        try {
            const genders = await getRepository(Genders).find();
            if (genders.length > 0) return res.status(200).json(genders);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}