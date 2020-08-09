import express, { Router } from 'express';
import { GenderController } from '../controllers/GenderController';

const router: express.IRouter = Router();

router.post("/gender", GenderController.saveGender);
router.get("/gender", GenderController.GetGenders);

export default router;