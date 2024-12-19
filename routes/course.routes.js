import { Router } from "express";
import { getCourseData } from "../controllers/course.controllers.js";

const router = Router()

router.route('/:course').get(getCourseData)

export default router