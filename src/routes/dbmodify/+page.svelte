<script>
  import firebase from "$lib/firebase";
  import { getFirestore, setDoc, doc } from 'firebase/firestore';
  const firestore = getFirestore(firebase);
  const docRef = doc(firestore, "idolInfo", "idolList");
  
  import { getDatabase, ref, set } from 'firebase/database';
  const dbRef = getDatabase(firebase);

  const data = {
    'BTS' : {
      name: 'BTS',
      name_kor: '방탄소년단',
      member: ['rm', 'jin', 'suga', 'jhope', 'jimin', 'jungkook', 'v'],
      memberImageURL: {
        rm: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_rm.jpg?alt=media&token=c21d095d-b7c7-4878-8ad5-bb84a2d7fe4f",
        jin: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_jin.jpg?alt=media&token=a8ce0463-bfce-4959-802d-d4fbb6f1649e",
        suga: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_suga.jpg?alt=media&token=d9e0cbc9-1a86-43e1-b420-9404cff8aa83",
        jhope: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_jhope.jpg?alt=media&token=73f1d6e1-9a7a-456c-935e-132201018455",
        jimin: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_jimin.jpg?alt=media&token=6fb9cf42-f5bc-4752-8ce6-33b94caeae29",
        jungkook: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_jungkook.jpg?alt=media&token=0f578037-03ee-45a5-9500-f9c755668756",
        v: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_v.jpg?alt=media&token=4ecc2036-f118-4eb5-9c05-dedaf9be4b44",
      },
      types: ['proof', 'album2', 'album3',],
      currentProfile: 'proof',
      imageExist: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FBTS%2Fprofile%2Fproof_all.jpg?alt=media&token=faabb907-3e88-4034-982c-a24fd2092d78"
    },
    'ITZY' : {
      name: 'ITZY',
      member: ['lia', 'yeji', 'yuna', 'ryujin', 'chaeryeong'],
      memberImageURL: {
        lia: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_lia.jpg?alt=media&token=0c587c87-eb13-4e09-98bb-f5051d7118ce",
        yeji: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_yeji.jpg?alt=media&token=4609c1f9-69f6-470f-b77b-d9126def7d44",
        yuna: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_yuna.jpg?alt=media&token=136bbfad-a0f6-4aa1-9d2b-e193d088ea5b",
        ryujin: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_ryujin.jpg?alt=media&token=c6ee6030-0cd5-419b-94bd-2bcda793ade8",
        chaeryeong: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_chaeryeong.jpg?alt=media&token=16ac7dc8-362d-45cb-9f04-a5489d6a04f5",
      },
      types: ['checkmate', 'mini_first', 'mini_second', 'mini_third', 'digital_single_2nd', 'mini_firth', 'regular_1st', 'mini_5th'],
      currentProfile: 'checkmate',
      imageExist: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2FITZY%2Fprofile%2Fcheckmate_all.jpg?alt=media&token=ffd674dd-f009-45e8-9a34-d66f076aaf5c"
    },
    'gidle' : {
      name: 'gidle',
      name_kor: '(여자)아이들',
      member: ['miyeon', 'minnie', 'soyeon', 'yuqi', 'shuhua',],
      memberImageURL: {
        miyeon: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_miyeon.jpg?alt=media&token=0ee302bd-1dfd-433b-9490-b1662b48e410",
        minnie: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_minnie.jpg?alt=media&token=b2cd3d82-99f9-437c-875e-06a483a93c23",
        soyeon: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_soyeon.jpg?alt=media&token=04423722-0789-4df9-869d-ead5ecc84383",
        yuqi: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_yuqi.jpg?alt=media&token=e096d0c0-7b02-4f02-9465-bc9947d4c6d5",
        shuhua: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_shuhua.jpg?alt=media&token=b25c14b3-73c9-42c6-b7af-95922abcec77",
      },
      types: ['ilove',],
      cardTypes: ['album_1', 'album_2', 'album_3', 'album_4', 'album_5', 'album_6', 'jewelver_1','jewelver_2', 'jewelver_3', ],
      currentProfile: 'ilove',
      imageExist: true,
      cardImageExist: true,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/list%2Fgidle%2Fprofile%2Filove_all.jpg?alt=media&token=fae54fbc-2be5-4b32-b975-11f6776a00ff"
    },
  }
  
  const uploadDataToFirestore = async () => {
    await setDoc(docRef, data);
    console.log("dataUploaded");

  }

  const uploadDataToRealTimeDB = async () => {
    // await set(ref(dbRef, 'user'), {
    const currentDate = new Date();
    await set(ref(dbRef, 'user'), {
      userTest: "test",
      // user: {
      //   "51qQAD2b5RdWapSeaiPs3Ti102t2": {
      //     isChatWith: ["SXhPtPjryrQunIV5D18Oay9AEBH3",],
      //     roomList: {
      //       "1": {
      //         recentActive: currentDate,
      //         oponentUID: "SXhPtPjryrQunIV5D18Oay9AEBH3",
      //         oponentName: "테스트 유저 1",
      //         recentMessage: "최근 메시지가 표시 됩니다.",
      //         oponentProfileImage: "",
      //       }
      //     }
      //   },
      //   "SXhPtPjryrQunIV5D18Oay9AEBH3": {
      //     isChatWith: ["51qQAD2b5RdWapSeaiPs3Ti102t2",],
      //     roomList: {
      //       "1": {
      //         recentActive: currentDate,
      //         oponentUID: "51qQAD2b5RdWapSeaiPs3Ti102t2",
      //         oponentName: "테스트 유저 2",
      //         recentMessage: "최근 메시지가 표시 됩니다.",
      //         oponentProfileImage: "",
      //       }
      //     }
      //   },
      // },
      // room: {
      //   "1": {
      //     user: [{
      //       name: "테스트 유저 2",
      //       uid: "51qQAD2b5RdWapSeaiPs3Ti102t2",
      //     }, {
      //       name: "테스트 유저 1",
      //       uid: "SXhPtPjryrQunIV5D18Oay9AEBH3",
      //     }], 
      //     recentActive: currentDate,
      //     chat: {
      //       "1": {
      //         content: "유저 1 메시지 1",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "2": {
      //         content: "유저 1 메시지 2",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "3": {
      //         content: "유저 2 메시지 1",
      //         time: currentDate, author: "51qQAD2b5RdWapSeaiPs3Ti102t2", isRead: true, isDeleted: false,
      //       },
      //       "4": {
      //         content: "유저 1 메시지 3",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "5": {
      //         content: "유저 2 메시지 2",
      //         time: currentDate, author: "51qQAD2b5RdWapSeaiPs3Ti102t2", isRead: true, isDeleted: false,
      //       },
      //       "6": {
      //         content: "유저 1 메시지 4",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "7": {
      //         content: "유저 1 메시지 5",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "8": {
      //         content: "유저 2 메시지 3",
      //         time: currentDate, author: "51qQAD2b5RdWapSeaiPs3Ti102t2", isRead: true, isDeleted: false,
      //       },
      //       "9": {
      //         content: "유저 2 메시지 4",
      //         time: currentDate, author: "51qQAD2b5RdWapSeaiPs3Ti102t2", isRead: true, isDeleted: false,
      //       },
      //       "10": {
      //         content: "유저 2 메시지 5",
      //         time: currentDate, author: "51qQAD2b5RdWapSeaiPs3Ti102t2", isRead: true, isDeleted: false,
      //       },
      //       "11": {
      //         content: "유저 1 메시지 6",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //       "12": {
      //         content: "유저 1 메시지 7",
      //         time: currentDate, author: "SXhPtPjryrQunIV5D18Oay9AEBH3", isRead: true, isDeleted: false,
      //       },
      //     }
        // }
      // }
    });
  }
</script>

<button on:click={uploadDataToFirestore}></button>
<button on:click={uploadDataToRealTimeDB}></button>

<style>
  button {
    width: 100px;
    height: 100px;
  }
</style>