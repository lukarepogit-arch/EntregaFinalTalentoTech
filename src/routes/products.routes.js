import { Router } from "express";
import { login }  from "../controllers/auth.controller.js"
import { 
    getAllProducts ,
    getProductById,
    createProduct,
    deleteProduct
}   from "../controllers/products.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router= Router();

// Routes:

router.get('/', getAllProducts);
router.get('/:id', auth,getProductById);
router.post('/auth/login',login)
router.post('/create', auth,createProduct)
router.delete('/:id',auth, deleteProduct)

export default router;