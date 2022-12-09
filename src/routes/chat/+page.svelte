<script>
  import firebase from '$lib/firebase';
  import { isLoggedIn } from "$lib/stores";
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import { auth, provider } from '$lib/firebaseAuth';
  import { getDatabase, ref, onValue } from 'firebase/database';
  import { onMount } from "svelte";

  import ChatTitle from "$lib/components/chat/chatTitle.svelte";
  import BottomNav from "$lib/components/bottomNav.svelte";

  const db = getDatabase(firebase);

  let dbData;  
  onMount(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("authUser");
      console.log(authUser);
      if (authUser) {
        const userUid = authUser.uid;
        const dbRef = ref(db, `user/${userUid}`);
        console.log("onValue");
        onValue(dbRef, (snapshot) => {
          dbData = snapshot.val();
          console.log(dbData);
        })
      }
    })
  })

</script>

<div id="wrap">
  <div id="chatHeader" 
    on:click={() => {
      onAuthStateChanged(auth, (authUser) => {
        console.log("authUser");
        console.log(authUser);
        console.log(dbData);
        console.log(typeof(dbData.roomList));
      })
    }}>
  </div>

  {#if $isLoggedIn}
    <div id="chatBody">
      {#if dbData}
        {#each Object.entries(dbData?.roomList) as [id, roomInfo]}
          <ChatTitle id={id} roomInfo={roomInfo} />
        {/each}
      {/if}
    </div>
  {:else}
    <div id="noLoginChatBody">
      <div id="isNotLogin">
        로그인 해주세요
      </div>
    </div>
  {/if}
</div>
<BottomNav />

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 10vh;
    background-color: white;
    overflow-y: scroll;
    box-sizing: border-box;
  }  
  #chatHeader {
    min-height: 10vh;
    background-color: yellow;
  }
  #chatBody {
    display: flex;
    flex-direction: column;
  }

  #noLoginChatBody {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #isNotLogin {
    font-size: 30px;
    color: #abcf93
  }

</style>