<script>
  import BottomNav from "$lib/components/bottomNav.svelte";
</script>

<div id="wrap">
  <div id="chatHeader">
  </div>
  <div id="chatBody">
    {#each Array(20) as _, i}
      <a href={`/chat/${i}`} class="chatLink">
        <div class="chatTitle">
          {i}
        </div>
      </a>
    {/each}
  </div>
</div>
<BottomNav />

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 10vh;
    background-color: #cdcd2c;
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

</style>