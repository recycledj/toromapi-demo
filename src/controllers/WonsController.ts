import { Request, Response, NextFunction } from "express";
import path from "path";
import { Wons } from "../entity/Wons";
import { getRepository } from "typeorm";

export class WonsController {
    static async saveWon(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const won = new Wons();

            const arrayPath = req.file.path.split("\\");
            const pathString: string = arrayPath.slice(2, arrayPath.length).join("\\");
            const ext = path.extname(req.file.filename).toLowerCase();
            if (!body.lot) return res.status(400).json({ status: res.statusCode, message: 'Lote es un campo requerido.' });
            if (!body.weight) return res.status(400).json({ status: res.statusCode, message: 'Peso es un campo requerido.' });

            won.codeWon = body.codeWon;
            won.photo = pathString;
            won.codeMother = body.codeMother;
            won.codeFather = body.codeFather;
            won.dateOfBirth = body.dateOfBirth;
            won.age = body.age;
            won.weight = body.weight;
            won.lot = body.lot;
            won.idGender = body.idGender;
            won.vaccines = body.vaccines;
            won.observations = body.observations;

            // const errors = await clsv.validate(won, { validationError: { target: false, value: false } });
            // if (errors) return res.status(400).json(errors);
            // else
            const save = await getRepository(Wons).save(won);
            if (save) return res.status(200).json({ status: res.statusCode, message: 'Created successfully!.' });
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async getAllWons(req: Request, res: Response, next: NextFunction) {
        try {
            const wons = await getRepository(Wons).createQueryBuilder("won")
                .select()
                .innerJoinAndSelect('won.idGender', 'Genders')
                .getMany();
            if (wons) return res.status(200).json(wons);
        } catch (error) {
            return res.status(500).json({ error: error.stack });
        }
    }

    static async countSteer(req: Request, res: Response, next: Function) {
        try {
            const count = await getRepository(Wons).count();
            return res.status(200).json(count);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async getOneSteer(req: Request, res: Response, next: NextFunction) {
        try {
            const { id }:any= req.query;
            const won = await getRepository(Wons)
            .createQueryBuilder("won")
            .innerJoinAndSelect("won.idGender", "Genders")
            .where("won.id = :id", { id })
            .getOne();
            if (!won) return res.status(404).json({ message: 'No encontrada.' });
            else return res.status(200).json(won);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    static async updateASteer (req: Request, res: Response, next: NextFunction) {
        try {
            const { id }:any = req.query;
            const body = req.body;
            if (!id) return res.status(400).json({ message: 'ID no encontrado.' });
            let steerToUpdate: Wons;

            steerToUpdate = await getRepository(Wons).createQueryBuilder("won")
            .innerJoinAndSelect("won.idGender", "Genders")
            .where("won.id = :id", { id })
            .getOne();

            if (!steerToUpdate) return res.status(404).json({ message: 'No existe en la base de datos' });

            const arrayPath = req.file.path.split("\\");
            const pathString: string = arrayPath.slice(2, arrayPath.length).join("\\");

            steerToUpdate.codeWon = body.codeWon;
            steerToUpdate.photo = req.file ? pathString : steerToUpdate.photo;
            steerToUpdate.codeMother = body.codeMother;
            steerToUpdate.codeFather = body.codeFather;
            steerToUpdate.dateOfBirth = body.dateOfBirth;
            steerToUpdate.age = body.age;
            steerToUpdate.weight = body.weight;
            steerToUpdate.lot = body.lot;
            steerToUpdate.idGender = body.gender;
            steerToUpdate.vaccines = body.vaccines;
            steerToUpdate.observations = body.observations;

            const saveChanges = await getRepository(Wons).save(steerToUpdate);

            if (saveChanges) return res.status(200).json({
                status: res.statusCode,
                messages: 'Actualizado satisfactoriamente!'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}