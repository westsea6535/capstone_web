import { dbIdolAllInfo, currentFilterOrder } from '$lib/stores';
import { get } from 'svelte/store';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebase from '$lib/firebase';

export const load = async () => {
  const selectedData = {
    selectedIdol: get(currentFilterOrder)[0],
    selectedMember: get(currentFilterOrder)[1],
    selectedAlbum: get(currentFilterOrder)[2],
  }

  const pathAlbum = selectedData.selectedAlbum;
  let imgUrlInfo = {};
  const typeList = get(dbIdolAllInfo)[selectedData.selectedIdol]?.cardTypes;

  const storage = getStorage(firebase);

  let urlPromiseList = [];
  console.log('load start');

  // if (get(dbIdolAllInfo)[selectedData.selectedIdol]?.cardImageExist) {
  // }

  for (let i = 0; i < typeList.length; i++) {
    console.log(i);
    let type = typeList[i];
    urlPromiseList.push(new Promise(res => {
      console.log(i);
      // if (imgUrlInfo[`${selectedData.selectedAlbum}_${type}_${selectedData.selectedMember}`]) {
      //   console.log("return first");
      //   return true;
      // }
      if (!selectedData.selectedAlbum) {
        console.log(selectedData.selectedAlbum);
        return;
      }

      if (pathAlbum != undefined) {
        console.log("pathalbum");
        console.log(pathAlbum);
        getDownloadURL(ref(storage, `list/${selectedData.selectedIdol}/${pathAlbum}/${pathAlbum}_${type}_${selectedData.selectedMember}.jpg`))
          .then((url) => {
            imgUrlInfo[`${selectedData.selectedAlbum}_${type}_${selectedData.selectedMember}`] = url;
            res(url);
          })
      }


    }))
  }
  console.log("for ended");
  await Promise.all(urlPromiseList);
  console.log("promise ended");
  return {
    imgUrlInfo, 
    selectedData,
  }
}