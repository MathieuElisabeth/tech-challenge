import {
  db
} from '../firebase'
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'

const addName = async (name) => {
  try {
    await addDoc(collection(db, 'argonautes'), {
      value: name,
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    console.log(err);
  }
}

const updateName = async ({
  docId,
  name
}) => {
  try {
    const NameRef = doc(db, 'argonautes', docId);
    await updateDoc(NameRef, {
      value: name,
    });
  } catch (err) {
    console.log(err);
  }
}

const deleteName = async (docId) => {
  try {
    const NameRef = doc(db, 'argonautes', docId);
    await deleteDoc(NameRef);
  } catch (err) {
    console.log(err);
  }
}

export {
  addName,
  updateName,
  deleteName,
};