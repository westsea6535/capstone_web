<script>
  import { idolAllInfo, currentFilterOrder, dbIdolAllInfo } from '$lib/stores.js';
  import { getStorage, ref, getDownloadURL } from 'firebase/storage';
  import firebase from '$lib/firebase';

  export let data;
  console.log(data.imgUrlInfo);
  console.log(data.selectedData);

  const typeList = $dbIdolAllInfo[data.selectedData?.selectedIdol]?.cardTypes;

  // y scroll detect
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
  {#if $dbIdolAllInfo[data.selectedData?.selectedIdol]?.types}
    {#each $dbIdolAllInfo[data.selectedData?.selectedIdol]?.cardTypes as type, index}
      <div class="cardsImgWrap">
        {#if $dbIdolAllInfo[data.selectedData?.selectedIdol].cardImageExist}
          <div class="widthInherit">
            <div class="cardsImg"
              on:click={(e) => {
                if ((e.target.parentNode.querySelector('.photoCardImg').style.opacity == 1) || (e.target.parentNode.querySelector('.photoCardImg').style.opacity == undefined)) {
                  e.target.parentNode.querySelector('.photoCardImg').style.opacity = 0.5;
                } else {
                  e.target.parentNode.querySelector('.photoCardImg').style.opacity = 1;
                }
              }}>
              <div class="beforeImgRender"
                on:click={() => {
                  console.log(data.imgUrlInfo);
                  console.log(data.imgUrlInfo[`${data.selectedData.selectedAlbum}_${type}_${data.selectedData.selectedMember}`]);
                  console.log(data.selectedData.selectedAlbum);
                }}></div>
              <img class="photoCardImg" src={`${data.imgUrlInfo[`${data.selectedData.selectedAlbum}_${type}_${data.selectedData.selectedMember}`]}`} alt="loading..." style={`opacity: 1; z-index: 0;`}>
            </div>
          </div>
          <div class="cardName">
            {`${type}`}
          </div>

        {:else}
          <div class="cardsImgReplace">
            {`card${index}`}
          </div>
          <div class="cardsName">{`card${index}`}</div>
        {/if}
      </div>
    {/each}
  {/if}
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
    box-sizing: border-box;
  }
  .cardsImgWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .widthInherit {
    width: inherit;
  }
  .cardsImg {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1.559;
  }
  .cardsImgReplace {
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
  }
  .beforeImgRender {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #cdcdcd;
  }
  .photoCardImg {
    border-radius: 10px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
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