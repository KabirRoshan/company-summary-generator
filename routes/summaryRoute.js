import express from "express";
import { summeriseWebsite } from "../controllers/summaryController.js";

const router = express.Router();

router.post('/summarise', summeriseWebsite);

export default router;