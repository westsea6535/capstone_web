<script>
  import { isLoggedIn } from "$lib/stores";
  import BottomNav from "$lib/components/bottomNav.svelte";

  export let data;
  const { dbData } = data;
  console.log(dbData ? dbData : "no db data");
</script>

<div id="wrap">
  <div id="chatHeader" 
    on:click={() => {
      //test part
      if ($isLoggedIn) {
        isLoggedIn.set(false);
      } else {
        isLoggedIn.set(true);
      }
    }}>
  </div>

  {#if $isLoggedIn}
    <div id="chatBody">
      {#each Array(20) as _, i}
        <a href={`/chat/${i}`} class="chatLink">
          <div class="chatTitle">
            {i}
          </div>
        </a>
      {/each}
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
  .chatLink {
    border-top: 2px solid #cdcdcd;
    border-bottom: 2px solid #cdcdcd;
    height: 50px;
    background-color: white;
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