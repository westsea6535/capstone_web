import { selectedGoodsInfo } from '$lib/stores';
import firebase from '$lib/firebase';
import { getFirestore, query, getDocs, doc, collection,  } from 'firebase/firestore';
const db = getFirestore(firebase);
let goodsId;
selectedGoodsInfo.subscribe(value => {
  console.log(value);
  goodsId = value.id;
})

export const load = async () => {
  const docRef = collection(db, 'goodsList', goodsId, 'cardList');
  const goodsDBCardList = await getDocs(docRef);
  let goodsCardList = [];

  
  goodsDBCardList.forEach((doc) => {
    goodsCardList.push(doc.data());
  })  

  return {
    goodsCardList,
  }
}
