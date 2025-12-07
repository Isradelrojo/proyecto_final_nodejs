import { db } from './firebase.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

export const products = async () => {

        const snapshot = await getDocs(productsCollection);
        const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) ;
        return productos;
};



export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};