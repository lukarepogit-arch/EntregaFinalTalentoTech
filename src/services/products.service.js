const products = [
    { id: 1, name: "Producto 1 " },
    { id: 3, name: "Producto 2 " },
    { id: 3, name: "Producto 3 " },
];

import { getAllProducts } from "../models/Product.js";

const getProducts = async () => {
    const products = await getAllProducts();
    console.log(products);
    return products;
};

const getProductById = (id) => {
    return products.find((item)=>item.id == id)
};

// crear producto y pushearlo al array de productos
const createProduct = (name)=>{
    const product = {
        id: products.length + 1,
        name: name,
    };  

    products.push(product);
    return product;
};

export default { 
    getProducts,
    getProductById,
    createProduct,
};