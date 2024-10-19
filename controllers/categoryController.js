import Category from "../models/category.js";

export function postCategory(req, res) {
  if (req.user == null) {
    res.status(401).json({ msg: "Please login to create a category" });
    return;
  }
  if (req.user.type != "customer") {
    res.status(403).json({
      msg: "only admin can create a category",
    });
    return;
  }

  const newCategory = new Category(req.body);
  newCategory
    .save()
    .then((result) =>
      res.json({ msg: "Category created successfully", result: result })
    )
    .catch((err) =>
      res.json({
        msg: "Failed to create category",
        error: err,
      })
    );
}

export function getCategory(req, res) {
  Category.find().then(
    (result)=>{
      res.json({
        category: result,
      });
    }
  ).catch(
    (err)=>{
      res.json({
        msg: "Failed to fetch categories",
        error: err,
      });
    }
  )
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
  const name = req.params.name;
  Category.deleteOne({ name: name })
    .then((result) => {
      res.json({
        result:result
      });
    })
    .catch((err) => {
      res.json({
        msg: "Failed to fetch category by name",
        error: err,
      });
    });
}
