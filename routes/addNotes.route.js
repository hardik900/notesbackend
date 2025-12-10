import { Router } from "express";
import { addNotes } from "../controllers/addNotes.controller.js";

const router = Router()

router.route('/').post(addNotes)

export default router