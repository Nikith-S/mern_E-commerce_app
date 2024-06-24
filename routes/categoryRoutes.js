import express from 'express'
import {isAdmin, requireSignIn} from './../middleware/authMiddlewar.js'
import { createCategoryController, 
updateCategoryController,
categoryController, 
singleCategoryController,
deleteCategoryController
} from '../controllers/createCategoryController.js';

const router = express.Router();


router.post('/create-category', requireSignIn,isAdmin, createCategoryController)

router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

router.get('/getcategory', categoryController)

router.get('/single-category/:slug', singleCategoryController)

router.get('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController )

export default router;