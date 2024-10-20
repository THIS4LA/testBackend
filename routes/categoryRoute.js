import express from 'express';
import { postCategory , getCategory , getCategoryByName , deleteCategoryByName , updateCategoryByName} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/", getCategory);
categoryRouter.delete("/:name", deleteCategoryByName);
categoryRouter.get("/:name", getCategoryByName);
categoryRouter.put("/:name", updateCategoryByName);

export default categoryRouter;

