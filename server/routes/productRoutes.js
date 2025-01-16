const express = require("express");
const { getProducts, addProduct,deleteProduct,updateProduct} = require("../controller/productController");
const multer=require('multer')
const path=require('path')


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "assets/Images");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });
  
  const upload = multer({
    storage: multerStorage,
  });
  

const router = express.Router();
const auth=require('../middleware/authmiddleware')
router.get("/", getProducts);
router.post("/",upload.single("image"),auth, addProduct);
router.delete("/:id",auth,deleteProduct);
router.put("/:id",upload.single("image"),auth, updateProduct);

module.exports = router;
