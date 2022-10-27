<script>
  import { linear } from "svelte/easing";

  let openUploadNav = false;

  const componentDim = (node, {
    delay = 0,
    duration = 400,
    easing = linear,}) => {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    return {
      duration,
      delay,
      easing,
      css: t => `
        opacity: ${t * opacity};
      `
    }
  }
</script>
{#if openUploadNav}
  <div id="dimPage"
    transition:componentDim>
  </div>
{/if}
<div id="uploadNavWrap">
  <div id="uploadNav"
    on:click={() => openUploadNav = !openUploadNav}
    >
    <span>&#43;</span>

  </div>
  {#if openUploadNav}
    <div id="openableNav" transition:componentDim>
      <a href="/upload/sell">
        <div id="uploadSell" class="navChild">판매글 올리기</div>
      </a>
      <a href="/upload/buy">
        <div id="uploadBuy" class="navChild">구매글 올리기</div>
      </a>
      <a href="/upload/trade">
        <div id="uploadTrade" class="navChild">교환글 올리기</div>
      </a>
    </div>
  {/if}
</div> 

<style>
  #dimPage {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
  }
  #uploadNavWrap {
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: greenyellow;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  #uploadNavWrap span {
    height: 15vw;
    line-height: 15vw;
    font-size: 50px
  }
  #uploadNav {
    position: relative;
  }
  #openableNav {
    position: absolute;
    bottom: 15vw;
    right: 0;
    color: black;
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: white;
    padding: 16px 15px;
    border-radius: 10px;
    box-shadow: 0 0 5px #cdcdcd;
  }



</style>