import multer from "multer";
import fs from "fs";
import { format } from "date-fns";

const storage: any = multer.diskStorage({
    destination: (req, file, cb) => {
        const day: string = format(new Date(), "ddMMyyyy");
        const path: string = 'src/uploads' + '/' + day + '/';
        fs.mkdirSync(path, { recursive: true });
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage: storage });