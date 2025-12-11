import { db } from "./Firebase.js"
import { collection, doc , getDoc ,addDoc, getDocs, deleteDoc } from "firebase/firestore"

const productCollection = collection(db, "products")

export const getAllProducts = async () => {
    try {

    const snapshot = await getDocs(productCollection);

    return snapshot.docs.map((doc) =>({ id :doc.id,...doc.data()}))
  } catch (error) {
    console.log(error)
  }
};

export const getProductById  = async(id)=>{
 try {

    const productRef = doc(productCollection,id);
    
    const snapshot = await getDoc(productRef);
    
    return snapshot.exists()?{ id: snapshot.id,...snapshot.data()}:null;
} catch (error) {
   
    console.error(error); 
 }
};

export const createProduct=async(data)=>{
    try {

        const docRef= await addDoc(productCollection,data)
        
        return { id:docRef.id,...data } 
    } catch (error) {
        console.error(error);
    }
}

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