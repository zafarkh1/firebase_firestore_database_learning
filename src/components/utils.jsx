import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore"
import { db } from "./config/firestore"

export const handleCreate = async () => {
  const name = prompt("Enter a color name")
  const value = prompt("Enter a color value")

  //                 ---- create element with custom id --------------------
  // const docRef = doc(db, "colors", "id-1")
  // const payload = { name, value }
  // await setDoc(docRef, payload)

  const collectionRef = collection(db, "colors")
  const payload = { name, value, timestamp: serverTimestamp() }
  await addDoc(collectionRef, payload)
}

export const handleEdit = async (id) => {
  const name = prompt("Enter a color name")
  const value = prompt("Enter a color value")

  const docRef = doc(db, "colors", id)
  const payload = { name, value, timestamp: serverTimestamp() }
  updateDoc(docRef, payload)
}

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id)
  await deleteDoc(docRef)
}

export const handleQueryDelete = async (id) => {
  const inputUserName = prompt("Enter a color name")

  const collectionRef = collection(db, "colors")
  const q = query(collectionRef, where("name", "==", inputUserName))

  const snapshot = await getDocs(q)
  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

  results.forEach(async (result) => {
    const docRef = doc(db, "colors", result.id)
    await deleteDoc(docRef)
  })
}
