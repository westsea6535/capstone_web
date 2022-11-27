import { idolAllInfo  } from "$lib/stores";
import firebase from '$lib/firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const storage = getStorage(firebase);

export let load = async () => {
  let imgUrlInfo = {};

  let urlDownloadPromiseList = [];

  const getAllDownloadUrl = async () => {
    for (const idolInfo of Object.entries(idolAllInfo)) {
      console.log("pagejs entries");
      console.log(idolInfo);
      await getDownloadURL(ref(storage, `list/${idolInfo[0]}/profile/${idolInfo[1].currentProfile}_all.jpg`))
        .then((url) => {
          imgUrlInfo[idolInfo[0]] = url;
          console.log("idolInfo[0]: " + idolInfo[0]);
        })
    }

  }
  getAllDownloadUrl();
  return {
    getAllDownloadUrl,
    imgUrlInfo,
  }

  // Object.entries(idolAllInfo).forEach((e) =>  {
  //   if (e[1].imageExist) {
  //     urlDownloadPromiseList.push(new Promise(res => {
  //       console.log("pagejs entries");
  //       console.log(e);
  //         getDownloadURL(ref(storage, `list/${e[0]}/profile/${e[1].currentProfile}_all.jpg`))
  //           .then((url) => {
  //             imgUrlInfo[e[0]] = url;
  //             console.log("e[0]: " + e[0]);
  //           })
  //     }))
  //     console.log("push ends");
  //   }
  // })
  
  // Promise.all(urlDownloadPromiseList)
  //   .then(r => {
  //     console.log("Promise all finished")
  //     return {
  //       imgUrlInfo
  //     }
  //   })
}


// export const csr = true;
// export const ssr = false;