import galleryItem from "../models/galleryItems.js";

export function postGalleryItem(req, res) {
  const user = req.user;
  //when user is not logged in
  if (user == null) {
    res.status(401).json({
      msg: "Please login to create gallery item",
    });
    return;
  }
  //check user type
  if (user.type != "customer") {
    res.status(403).json({
      msg: "Only admin can create gallery items",
    });
    return;
  }

  const bodyGalleryItem = req.body;
  const newGalleryItem = new galleryItem(bodyGalleryItem);
  newGalleryItem
    .save()
    .then(() => {
      res.json({
        msg: "gallery Item created successfully",
      });
    })
    .catch(() => {
      res.status(404).json({
        msg: "Item Gallery creation failed",
      });
    });
}

export function getGalleryItems(req, res) {
  galleryItem
    .find()
    .then((galleryItemList) => {
      res.json(galleryItemList);
    })
    .catch(() => {
      res.status(404).json({
        msg: "Failed to fetch gallery items",
      });
    });
}
