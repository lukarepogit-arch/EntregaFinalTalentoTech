import { db } from "./Firebase.js"
import { collection, doc , getDoc ,addDoc, getDocs, deleteDoc } from "firebase/firestore"

//Trae los productos de la base de datos
const productCollection = collection(db, "products")
//Obtengo todos los productos:
export const getAllProducts = async () => {
// Traemos todos los documentos de la base de datos productCollection
    try {
    const snapshot = await getDocs(productCollection);
// Hacemos una captura de ese documento con snapshoot y ese documento lo recorremos con un map
// De ese documento traemos el id con su data
    return snapshot.docs.map((doc) =>({ id :doc.id,...doc.data()}))
  } catch (error) {
    console.log(error)
  }
};
//Obtengo el producto por ID:
export const getProductById  = async(id)=>{
 try {
    const productRef = doc(productCollection,id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists()?{ id: snapshot.id,...snapshot.data()}:null;
} catch (error) {
   console.error(error); 
 }
};

// Creo los datos del producto:
export const createProduct=async(data)=>{
    try {
        const docRef= await addDoc(productCollection,data)
        return { id:docRef.id,...data } 
    } catch (error) {
        console.error(error);
    }
}

// Borrar producto:
export const deleteProduct = async(id)=>{
    try {
        const productRef = doc(productCollection,id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()){
            return false;
        }
        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.error(error);
    }
};