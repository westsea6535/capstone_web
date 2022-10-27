<script>
  let filterPage;
  let scrollY = 0;
  let beforeScrollY = 0;
  $: scrollDirectionBottom = findScrollDirection(scrollY);

  const findScrollDirection = (y) => {
    if (y > beforeScrollY) {
      beforeScrollY = y;
      return true;
    } else if (y < beforeScrollY) {
      beforeScrollY = y;
      return false;
    }
  }
  const findScroll = () => {
    beforeScrollY = scrollY;
    scrollY = filterPage.scrollTop;
  }

</script>

<div id="cardsFilter" 
  bind:this={filterPage}
  on:scroll={findScroll}
  >
  {#each Array(20) as cardInfo, index}
    <div class="cardsImgWrap" 
      on:click={(e) => {
        e.target.parentNode.querySelector('.cardsImg').style.backgroundColor === 'gray' ? e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'white' : e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'gray';
        console.log(e.target.parentNode.querySelector('.cardsImg').style.backgroundColor);
      }}>
      <div class="cardsImg">{`card${index}`}</div>
      <div class="cardsName">{`card${index}`}</div>
    </div>
  {/each}
  <div id="cardSearchNav" class:hideDiv={scrollDirectionBottom}>
    검색하기
  </div>
</div>

<style>
  #cardsFilter {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
    overflow: scroll;
  }
  .cardsImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardsImg {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
  }
  #cardSearchNav {
    width: 100%;
    height: 10vh;
    max-height: 50px;
    min-height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(149, 255, 92, 1); 
    transition: transform 0.3s linear;
    transform: translateY(0%);
  }
  .hideDiv {
    transform: translateY(100%) !important;
  }
</style>