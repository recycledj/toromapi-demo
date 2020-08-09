import express, { Router } from 'express';
import { WonsController } from '../controllers/WonsController';
import { upload } from '../middlewares/uploadsFiles';

const router: express.IRouter = Router();

router.get("/won/", WonsController.getAllWons);
router.post("/won/", upload.single('photo'), WonsController.saveWon);
router.get("/won/count", WonsController.countSteer);
router.get("/steer/", WonsController.getOneSteer);
router.patch("/won/", upload.single("photo"), WonsController.updateASteer);

export default router;