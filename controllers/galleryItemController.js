import galleryItem from "../models/galleryItems.js";

export function postgalleryItem(req,res){
    const bodygalleryItem=req.body;
    const newgalleryItem= new galleryItem(bodygalleryItem);
    newgalleryItem.save().then(()=>{
        res.json({
            msg:"gallery Item created successfully"
        })
    }).catch(
        ()=>{
            res.status(404).json({
                msg:"Item Gallery creation failed"
            })
        }
    )
}

export function getGalleryItems(req,res){
    galleryItem.find().then(
        (galleryItemList)=>{
            res.json(galleryItemList);
        }
    ).catch(
        ()=>{
            res.status(404).json({
                msg:"Failed to fetch gallery items"
            })
        }
    )
}