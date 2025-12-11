// import productService from "../services/products.service.js";
import * as model  from "../models/Product.js";

// Del productService uso el metodo getProducts para traer los productos desde service:
export const getAllProducts = async(req,res)=>{
    res.json(await model.getAllProducts())
};

export const getProductById = async(req,res)=>{
    // console.log(req.params);

    //Desectructuramos para obtener solo el parameto id:
    const { id } = req.params;
    
    // si el id del item(producto dentro de array de productos)
    // que estoy pasando como parametro
    // coincide con alguno de los productos, lo traemos:
    const product= await model.getProductById(id);
    
    // Si no existe el producto colocamos un error 404 
    if (!product){
        return res.status(404).json({error:`El producto no existe`})
    
    }
    res.json(product);

};

// Funcion que crea y exporta producto:
export const createProduct = async (req,res)=>{
    // si lo que tipeamos en el body del thunder o postman coincide con la logica de esto(dice que si el nombre del producto que esta
    //  dentro del body de thunder o postman esta definido o puesto), crea el producto 
    if (typeof req.body.name == undefined){
        // si no esta puesto el nombre en el body arroja este errror
        return res.status(422).json({error: 'El nombre es obligatorio'})
    }
    // trae el nombre que pusimos en el body
    const { name, price, categories }= req.body;

    const product = await model.createProduct({name, price, categories})

    res.status(201).json(product);
}


// Borrar producto:
export const deleteProduct=async(req,res)=>{
    const {id}= req.params;

    const deleted =await model.deleteProduct(id);
    
    if(!deleted){
        return res.status(404).json({error:"Not Found"});
    
    }
    res.json({message:"Product deleted"})
} 