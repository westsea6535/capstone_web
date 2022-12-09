import { selectedGoodsInfo } from '$lib/stores';
import firebase from '$lib/firebase';
import { getFirestore, query, getDocs, doc, collection,  } from 'firebase/firestore';
const db = getFirestore(firebase);
let goodsId;
selectedGoodsInfo.subscribe(value => {
  console.log(value);
  goodsId = value.goodsId;
})

export const load = async () => {
  console.log(goodsId);
  const docRef = collection(db, 'goodsList', goodsId, 'cardList');
  const goodsDBCardList = await getDocs(docRef);
  let goodsCardList = [];
  console.log(goodsDBCardList);
  console.log(goodsCardList);

  if (goodsDBCardList) {
    goodsDBCardList.forEach((doc) => {
      goodsCardList.push(doc.data());
    })  

  }

  return {
    goodsCardList,
  }
}
