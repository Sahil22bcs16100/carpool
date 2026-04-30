import express from "express";
import { createRide, getRides } from "../controllers/rideController.js";

const router = express.Router();

router.post("/",createRide);
router.get("/",getRides);

export default router;