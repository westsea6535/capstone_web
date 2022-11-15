import firebase from '$lib/firebase';
import { getFirestore, query, getDocs, collection, orderBy, limit, QuerySnapshot,  } from 'firebase/firestore';
const db = getFirestore(firebase);

export const load = async () => {
  const collectionRef = collection(db, 'goodsList');
  const q = query(collectionRef, orderBy("uploadDate"), limit(10));
  const allGoodsDataDB = await getDocs(q);
  const allGoodsData = [];

  allGoodsDataDB.forEach((doc) => {
    allGoodsData.push(doc.data());
  })  
  

  return {
    allGoodsData,
  }
}