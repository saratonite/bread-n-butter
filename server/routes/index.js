import { Router } from "express";
import ApiController from "../controllers/ApiController";

const router = Router();

router.get("/", ApiController.getIndex);

export default router;
