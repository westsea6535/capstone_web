import { writable, readable } from "svelte/store";
import { browser } from "$app/environment";

export const idolAllInfo = {
  'BTS' : {
    name: 'BTS',
    name_kor: '방탄소년단',
    member: ['rm', 'jin', 'suga', 'jhope', 'jimin', 'jungkook', 'v'],
    types: ['proof', 'album2', 'album3',],
    currentProfile: 'proof',
    imageExist: true,
  },
  'ITZY' : {
    name: 'ITZY',
    member: ['lia', 'yeji', 'yuna', 'ryujin', 'chaeryeong'],
    types: ['checkmate', 'mini_first', 'mini_second', 'mini_third', 'digital_single_2nd', 'mini_firth', 'regular_1st', 'mini_5th'],
    currentProfile: 'checkmate',
    imageExist: true,
  },
  'gidle' : {
    name: 'gidle',
    name_kor: '(여자)아이들',
    member: ['miyeon', 'minnie', 'soyeon', 'yuqi', 'shuhua',],
    types: ['ilove',],
    cardTypes: ['album_1', 'album_2', 'album_3', 'album_4', 'album_5', 'album_6', 'jewelver_1','jewelver_2', 'jewelver_3', ],
    currentProfile: 'ilove',
    imageExist: true,
    cardImageExist: true,
  },
};

export const dbIdolAllInfo = writable({});

export const beforePagePath = writable('/')
export const pagePath = writable('/');

export const limitBeforeUpdate = writable(true);
export const openedSelectComponent = writable([]);
export const selectedCardList = writable([]);

export const currentFilterOrder = writable([]);

export const selectedGoodsInfo = writable({});

export const testPhotoCardImg = readable({
  BTS: {
    RM: [
      {
        card: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/filter%2Fidol%2FBTS%2FRM%2FRM_1.jpg?alt=media&token=dd92e2b0-09e0-4dca-8f9d-a85a67a4769a"
      },
      {
        card: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/filter%2Fidol%2FBTS%2FRM%2FRM_2.jpg?alt=media&token=1fcdf262-35cd-4093-9065-328eac41afc1"
      },
      {
        card: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/idol-goods-database.appspot.com/o/filter%2Fidol%2FBTS%2FRM%2FRM_3.jpg?alt=media&token=111a9ffd-7b8a-4068-9a5d-229f2f114e14"
      }
    ]
  }
})

export const pageRouteData = writable('');

// const userSession = () => {sessionStorage.getItem('user')};
// const {subscribe: userSubscribe, update: userUpdate, set: userSet}  = writable(userSession() || {});

// export let user = {
//   subscribe: userSubscribe,
//   update: userUpdate,
//   set: (param) => {
//     userSet(param);
//     sessionStorage.setItem('user', param);
//   }
// }

export let user = writable({});
export let userData = writable({});
export let isLoggedIn = writable(false);
export let openLoginDiv = writable(false);
export const disabledEmailLogin = readable(true);


const testNumSession = () => {
  if (browser) {
    sessionStorage.getItem('testNum')
  }
};

const {subscribe: testNumSubscribe, update: testNumUpdate, set: testNumSet}  = writable(testNumSession() || 0);

export let testNum = {
  subscribe: testNumSubscribe,
  update: testNumUpdate,
  set: (param) => {
    testNumSet(param);
    console.log('set');
    if (browser) {
      console.log('browser');
      sessionStorage.setItem('testNum', param);
    } else {
      console.log('no browser');
    }
  }
}