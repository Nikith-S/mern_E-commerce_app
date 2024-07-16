import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddlewar.js";
import {
  createProductController,
  deleteProductController,
} from "../controllers/createProductController.js";
import { getProductController } from "../controllers/createProductController.js";
import { getSingleProductController } from "../controllers/createProductController.js";
import { productPhotoController } from "../controllers/createProductController.js";
import { updateProductController } from "../controllers/createProductController.js";
import { productFiltersController } from "../controllers/createProductController.js";
import { productCountController } from "../controllers/createProductController.js";
import { productListController } from "../controllers/createProductController.js";
import { searchProductController } from "../controllers/createProductController.js";
import { realtedProductController } from "../controllers/createProductController.js";
import { productCategoryController } from "../controllers/createProductController.js";
import { braintreeTokenController } from "../controllers/createProductController.js";
import { brainTreePaymentController } from "../controllers/createProductController.js";

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
router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFiltersController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get("/related-product/:pid/:cid", realtedProductController);

router.get("/product-category/:slug", productCategoryController);

// [payment token]
router.get("/braintree/token", braintreeTokenController);

router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
export default router;
