<script>
  import { cubicOut } from 'svelte/easing';
  import { testPhotoCardImg } from '$lib/stores';
    import BuyComponent from '../upload/buyComponent.svelte';
  export let goodsCardList;
  
  $: divOpened = false;

  const bottomDrawer = (node) => {
		const style = getComputedStyle(node);
    return { 
      duration: 400,
      easing: cubicOut,
      css: t => `
        height: ${t * 50}vh;
      `
    };
	}
</script>

<div id="componentWrap">
  <div id="positionRelative">
    <div id="listHeader" on:click={() => {
      if (divOpened) {
        divOpened = false;
      } else {
        divOpened = true;
      }
    }}>
      <div id="listNum">{goodsCardList.length}개의 포토 카드</div>
      <div>^</div>
    </div>
    {#if divOpened}
      <div id="expandedWrap" transition:bottomDrawer>
        <div id="cardInfoList">
          {#each goodsCardList as goodsCard, index}
            <div class="goodsCard">
              <div class="cardPhoto">
                <img src={$testPhotoCardImg.BTS.RM[index].img} alt="loading...">
                <div id="imageSellDiv"></div>
              </div>
              <div class="cardMemberInfo">
                {goodsCard.idol}.{goodsCard.member}
              </div>
              <div class="cardPrice">
                {goodsCard.price}원
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  #componentWrap {
    width: 100vw;
    min-height: 40px;
    position: fixed;
    bottom: 0;
    background-color: #efeeee;
    overflow: scroll;
    padding: 40px 10px 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 3px 3px #efeeee;
  }
  #positionRelative {
    position: relative;
    box-sizing: border-box;
  }
  #listHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: -30px;
    width: calc(100vw - 20px);
  }
  #expandedWrap {
    background-color: white;
    height: 50vh;
  }
  #cardInfoList {
    width: calc(100vw - 20px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .cardPhoto {
    box-sizing: border-box;
  }
  .cardPhoto img {
    border-radius: 7px;
    object-fit: cover;
    width: 100%;
  }
  .cardMemberInfo {
    font-size: 13px;
    padding-left: 3px;
  }
  .cardPrice {
    text-align: right;
  }

</style>