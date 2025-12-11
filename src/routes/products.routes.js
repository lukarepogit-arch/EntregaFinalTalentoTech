// importamos solo Router del modulo express
import { Router } from "express";
import { login }  from "../controllers/auth.controller.js"
// Inicializamos a router
const router= Router();
// importamos los controladores:
import { 
    getAllProducts ,
    getProductById,
    createProduct,
    deleteProduct
}   from "../controllers/products.controller.js";
import { auth } from "../middlewares/auth.middleware.js";



//ruta de todos los productos:
router.get('/', getAllProducts);
// ruta ID del producto y traerlo:
router.get('/:id', auth,getProductById);
// Login:
router.post('/auth/login',login)
// Crear producto
router.post('/create', auth,createProduct)
// Borrar producto:
router.delete('/:id',auth, deleteProduct)


// exportamos router
export default router;