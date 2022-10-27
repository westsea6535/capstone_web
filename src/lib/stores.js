import { writable } from "svelte/store";

export const idolAllInfo = {
  'BTS' : {
    name: 'BTS',
    member: ['RM', 'Jin', 'Suga',],
    types: ['album1', 'album2', 'album3',],
  },
  'ITZY' : {
    name: 'ITZY',
    member: ['LIA', 'Yeji', 'Yuna',],
    types: ['album1', 'album2', 'album3',],
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