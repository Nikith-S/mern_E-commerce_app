import { error } from "console";
import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";
import productModel from "../models/productModel.js";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    switch (true) {
      case !name:
        return res.send(500).send({ error: "name is requires" });
      case !description:
        return res.send(500).send({ error: "description is requires" });
      case !price:
        return res.send(500).send({ error: "price is requires" });
      case !category:
        return res.send(500).send({ error: "categorey is requires" });
      case !quantity:
        return res.send(500).send({ error: "quantity is requires" });
      case photo && photo.size > 100000:
        return res
          .send(500)
          .send({ error: "photo is required and less than 5mb  is requires" });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();

    res.status(201).send({
      success: true,
      message: "Products is created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create Product",
      error,
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    if (!products) {
      res.send("no products in the cart");
    }

    re.status(200).send({
      success: true,
      total: products.length,
      message: "all products",
      products,
      total: products.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Product",
      error,
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    res.status(200).send({
      success: true,
      message: "Slug product fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting  singleProduct",
      error,
    });
  }
};

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");

    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting product photo",
      error,
    });
  }
};



export const deleteProductController = async(req, res) => {
try{

  const productModel = await productModel(req.params.pid).select(-"photo")
  res.status(200).send({
    success:true,
    message:"product deleted successfully",
  })


}
catch(error){
  console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting products",
      error,
    });


}

}
