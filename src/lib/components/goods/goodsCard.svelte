<script>
  export let goodsCardList;
  
  $: divOpened = false;

  const bottomDrawer = (node) => {
		const style = getComputedStyle(node);
    return { 
      duration: 200,
      css: t => `
        height: ${t * 50}vh;
      `
    };
	}
</script>

<div id="componentWrap">
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
      {#each goodsCardList as goodsCard}
        <div class="goodsCard">
          <div class="cardIdol">
            {goodsCard.idol}
          </div>
          <div class="cardMember">
            {goodsCard.member}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  #componentWrap {
    width: 100vw;
    position: fixed;
    bottom: 0;
    background-color: #cdcdcd;
    overflow: scroll;
    padding: 20px 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  #listHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
  }
  #expandedWrap {
    background-color: #cdcdcd;
    height: 50vh;
  }
</style>