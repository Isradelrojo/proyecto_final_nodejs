import { db } from './firebase.js';
import { collection, getDocs, getDoc , addDoc, doc, deleteDoc } from 'firebase/firestore';

const usersCollection = collection(db, 'usuarios');

export const users = async () => {

        const snapshot = await getDocs(usersCollection);
        const usuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) ;
        return usuarios;
};


export const getUsersById = async (id) => {
  try {
    const userRef = doc(usersCollection, id);
    const snapshot = await getDoc(userRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : {"message": "Usuario no encontrado"};
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (data) => {
  try {
    const docRef = await addDoc(usersCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const userRef = doc(usersCollection, id);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(userRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};