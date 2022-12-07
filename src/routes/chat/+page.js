import firebase from '$lib/firebase';

import { getDatabase, ref, onValue } from 'firebase/database';
import { isLoggedIn, user, userData, } from '$lib/stores';
import { get } from 'svelte/store';

const db = getDatabase(firebase);

export const load = async () => {
  if (get(isLoggedIn)) {
    const dbRef = ref(db, `user/${get(userData).uid}`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(get(userData).uid);
      // console.log(get(userData));
      // console.log(get(user));
      // console.log(get(isLoggedIn));
      // console.log(snapshot);
      // console.log(data);
      return {
        dbData: data,
      }
    })

  } else {
    return;
  }
}