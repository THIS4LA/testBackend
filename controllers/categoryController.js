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
