import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddlewar.js";
import {
  createProductController,
  deleteProductController,
} from "../controllers/createProductController.js";
import { getProductController } from "../controllers/createProductController.js";
import { getSingleProduct } from "../controllers/createProductController.js";
import { productPhotoController } from "../controllers/createProductController.js";
import { updateProductController } from "../controllers/createProductController.js";
import { productFiltersController } from "../controllers/createProductController.js";
import { productCountController } from "../controllers/createProductController.js";
import { productListController } from "../controllers/createProductController.js";

import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProduct);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFiltersController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

export default router;
