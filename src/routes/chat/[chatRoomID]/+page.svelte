<script>
  import firebase from '$lib/firebase';
  import { getDatabase, ref, onValue, push, child, serverTimestamp, update } from 'firebase/database';
  import { afterUpdate, onMount } from "svelte";
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import { auth, provider } from '$lib/firebaseAuth';
  import { user } from '$lib/stores';

  const db = getDatabase(firebase);
  export let data;
  let { chatRoomID } = data;

  let chatData;
  let userUid = $user.uid;

  onMount(() => {
    onAuthStateChanged(auth, (authUser) => {
      userUid = authUser.uid;
      if (authUser) {
        const dbRef = ref(db, `room/${chatRoomID}`);
        onValue(dbRef, (snapshot) => {
          chatData = snapshot.val();
          console.log(chatData);
        })
      }
    })
  })
  afterUpdate(() => {
    const target = document.getElementById('pageBody');
    target.scrollTop = target.scrollHeight;
  })

  let chatValue = '';

</script>


<div id="wrap">
  <div id="pageHeader">
    <button class="goBackBtn"
      on:click={() => {
        window.history.go(-1);
      }}>뒤로가기</button>
  </div>
  <div id="pageBody">
    {#if chatData?.chat}
      {#each Object.entries(chatData.chat) as [chatID, chatInfo], chatIndex}
        <div class={`chat ${userUid === chatInfo.author ? "myChat" : "oponentChat"}`}
          on:click={() => { console.log(chatInfo);console.log(chatData.chat);}}>{chatInfo.content}</div>
      {/each}
    {/if}
  </div>
  <div id="chatArea">
    <div id="cameraIcon"></div>
    <!-- <div id="plusIcon"></div> -->
    <div id="chatInput">
      <input type="text" bind:value={chatValue}>
    </div>
    <div id="sendBtn"
      on:click={(target) => {
        const writeNewChat = () => {
          const targetData = {
            author: userUid,
            content: chatValue,
            isDeleted: false,
            isRead: false,
            time: serverTimestamp(),
          }
          const pushKey = push(child(ref(db), `room/${chatRoomID}/chat`)).key;
          const updates = {};
          updates[`/room/${chatRoomID}/chat/${pushKey}`] = targetData;
          updates[`/room/${chatRoomID}/recentActive`] = serverTimestamp();
          for (let i = 0; i < 2; i++) {
            updates[`/user/${chatData.user[i].uid}/roomList/${chatRoomID}/recentActive`] = serverTimestamp();
            updates[`/user/${chatData.user[i].uid}/roomList/${chatRoomID}/recentMessage`] = chatValue;
          }
          return update(ref(db), updates);
        }
        writeNewChat();
        chatValue = '';
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.741 1.408l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"/></svg>
    </div>
  </div>
</div>

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #pageHeader {
    height: 70px;
    background-color: cornsilk
  }
  #pageBody {
    height: calc(100vh - 100px);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    gap: 4px;
    padding: 3px 10px;
  }
  .chat {
    width: auto;
    padding: 8px 15px;
    border-radius: 15px;
    font-family: Arial, Helvetica, sans-serif;
    max-width: 60vw;
    word-break: break-all;
  }
  .myChat {
    background-color: #476a2f;
    color: white;
    align-self: flex-end;
    vertical-align: center;
    border-bottom-right-radius: 5px;
  }
  .oponentChat {
    background-color: #cdcdcd;
    color: black;
    align-self: flex-start;
    border-bottom-left-radius: 5px;
  }
  .test {
    min-height: 200px;
    background-color: yellow;
  }
  #chatArea {
    height: 50px;
    background-color: #cdcdcd;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
  }
  #cameraIcon {
    height: 30px;
    width: 30px;
    background-color: white;
  }
  #chatInput {
    flex-grow: 1;
    height: 40px;
    background-color: white;
    border-radius: 30px;
    padding: 0 15px;
  }
  #chatInput input {
    all: unset;
    height: inherit;
    width: 100%;
    font-size: 20px;
  }
  #sendBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>