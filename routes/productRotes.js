import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddlewar.js";
import { createProductController } from "../controllers/createProductController.js";
import { getProductController } from "../controllers/createProductController.js";
import { getSingleProduct } from "../controllers/createProductController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProduct);

export default router;
