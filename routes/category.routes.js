import { Router } from "express";
import { courseCategory } from "../controllers/category.controller.js";

const router = Router()

router.route("/category").post(courseCategory)

export default router