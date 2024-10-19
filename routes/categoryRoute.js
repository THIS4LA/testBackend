import express from 'express';
import { postCategory , getCategory , getCategoryByName , deleteCategoryByName } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/", getCategory);
categoryRouter.get("/:name", getCategoryByName);

export default categoryRouter;

