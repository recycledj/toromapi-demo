import express, { Router, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const routes: express.IRouter = Router();
fs.readdir('./src/routes', (err: Error, files: any) => {
    files.forEach((file: string) => {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        if (file !== "index.ts") {
            routes.use("/", require("./" + name).default, function (
                req: Request,
                res: Response,
                next: NextFunction) {
                next();
            });
        }
    });
});

export default routes;