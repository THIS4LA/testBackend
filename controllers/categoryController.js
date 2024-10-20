import Category from "../models/category.js";
import { isAdmin } from "../utils/userValidations.js";

export function postCategory(req, res) {
  if (isAdmin(req, res)) {
    const newCategory = new Category(req.body);
    newCategory
      .save()
      .then((result) =>
        res.json({ msg: "Category created successfully", result: result })
      )
      .catch((err) =>
        res.status(500).json({
          msg: "Failed to create category",
          error: err,
        })
      );
  }
}

export function getCategory(req, res) {
  Category.find()
    .then((result) => {
      res.json({
        category: result,
      });
    })
    .catch((err) => {
      res.json({
        msg: "Failed to fetch categories",
        error: err,
      });
    });
}

export function getCategoryByName(req, res) {
  const name = req.params.name;
  Category.findOne({ name: name })
    .then((result) => {
      res.json({
        category: result,
      });
    })
    .catch((err) => {
      res.json({
        msg: "Failed to fetch category by name",
        error: err,
      });
    });
}

export function deleteCategoryByName(req, res) {
  if (isAdmin(req, res)) {
    const name = req.params.name;
    Category.deleteOne({ name: name })
      .then((result) => {
        res.json({
          result: result,
        });
      })
      .catch((err) => {
        res.json({
          msg: "Failed to fetch category by name",
          error: err,
        });
      });
  }
}

export function updateCategoryByName(req, res) {
  if(isAdmin(req,res)){
    const name = req.params.name;
    Category.findOneAndUpdate({ name: name }, req.body, {new: true})
     .then((result) => {
        res.json({
          result: result
        });
      })
     .catch((err) => {
        res.status(500).json({
          msg: "Failed to update category",
          error: err,
        });
      });
  }
}
