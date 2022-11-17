import { writable, readable } from "svelte/store";

export const idolAllInfo = {
  'BTS' : {
    name: 'BTS',
    member: ['RM', 'Jin', 'Suga',],
    types: ['album1', 'album2', 'album3',],
  },
  'ITZY' : {
    name: 'ITZY',
    member: ['LIA', 'Yeji', 'Yuna', 'Ryujin', 'Chaeryung'],
    types: ['digital_single_1st', 'mini_first', 'mini_second', 'mini_third', 'digital_single_2nd', 'mini_firth', 'regular_1st', 'mini_5th'],
  },
  'StrayKids' : {
    name: 'StrayKids',
    member: ['Mem1', 'Mem2', 'Mem3',],
    types: ['album1', 'album2', 'album3',],
  }
};

export const beforePagePath = writable('/')
export const pagePath = writable('/');

export const limitBeforeUpdate = writable(true);
export const openedSelectComponent = writable([]);
export const selectedCardList = writable([]);

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