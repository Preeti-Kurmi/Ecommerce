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

router.get("/", getProducts);
router.post("/",upload.single("image"), addProduct);
router.delete("/:id",deleteProduct);
router.put("/:id",upload.single("image"), updateProduct);

module.exports = router;
