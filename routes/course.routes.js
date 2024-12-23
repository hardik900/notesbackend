import { Router } from "express";
import { getCourseData } from "../controllers/course.controller.js";

const router = Router()

router.route('/:course').get(getCourseData)

export default router