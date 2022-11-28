import firebase from '$lib/firebase';
import { dbIdolAllInfo } from '$lib/stores';
import { getFirestore, doc, getDoc, } from 'firebase/firestore';
const db = getFirestore(firebase);

export const load = async () => {
  const docRef = doc(db, "idolInfo", "idolList");

  const docSnap = await getDoc(docRef); 
  const idolInfoAll = docSnap.data();
  dbIdolAllInfo.set(idolInfoAll);

  return {
    idolInfoAll,
  }
}