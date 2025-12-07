import { db } from './firebase.js';
import { collection, getDocs, getDoc , addDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

export const products = async () => {

        const snapshot = await getDocs(productsCollection);
        const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) ;
        return productos;
};


export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : {"message": "Producto no encontrado"};
  } catch (error) {
    console.error(error);
  }
};




export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};