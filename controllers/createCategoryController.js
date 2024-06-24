import slugify from "slugify";
import categorymodel from "../models/categorymodel.js";

export const createCategoryController =async (req, res) => {
    try{
        const {name} = req.body;

        if(!name){
            return res.status(401).send({message:"name is required"})
        }

        const existingCategory= await categorymodel.findOne({name})

        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"Category Exsists"
            })
        }

        const category = new categorymodel({
            name,
            slug:slugify(name)
        })
        await category.save();

        res.status(201).send({
            success:true,
            message:"category is created",
            category
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in Category",
          error,
        });

    };
}


export const updateCategoryController = async(req, res) => {
 try{
    const {name} =req.body
    const {id} =req.params;
    const category = await categorymodel.findByIdAndUpdate(id,{name, slug:slugify(name)}, {new:true})

    res.status(200).send({
        success:true,
        message:"category updated Successfully",
        category,
    })

 }
 catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updateCategory",
      error,
    });


 }
}

export const categoryController = async(req, res) => {
    try{

        const category= await categorymodel.find({})
        res.status(200).send({
            success:true,
            message:"All Category found",
            category,
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in  finding all category",
          error,
        });

    }

}

export const singleCategoryController =async (req ,res) => {
    try{
        const category = await categorymodel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"category is found",
            category,
        })


    }
    catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in  finding in single category",
          error,
        });


    }

}


export const deleteCategoryController = async(req, res) => {
    try{
        const {id} = req.params;

     await categorymodel.findByIdAndDelete(id)
     res.status(200).send({
        success:true,
        message:"category is deleted succefully",
     
    })
        
    }
    catch(error){
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error in deleting category",
          error,
        });


    }
}