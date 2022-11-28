<script>
  import { idolAllInfo, currentFilterOrder, dbIdolAllInfo } from '$lib/stores.js';
  import { getStorage, ref, getDownloadURL } from 'firebase/storage';
  import firebase from '$lib/firebase';
  import { afterUpdate, onMount } from 'svelte';

  onMount(() => console.log('mount')) 
  afterUpdate(() => console.log('update'))


  const data = {
    selectedIdol: $currentFilterOrder[0],
    selectedMember: $currentFilterOrder[1],
    selectedAlbum: $currentFilterOrder[2],
  }

  console.log("album data");
  console.log(data);
  console.log($currentFilterOrder);
  console.log($dbIdolAllInfo);

  const pathAlbum = data.selectedAlbum;

  const storage = getStorage(firebase);

  const typeList = $dbIdolAllInfo[data.selectedIdol]?.cardTypes;
  console.log(typeList);

  let imgUrlInfo = {};

  if ($dbIdolAllInfo[data.selectedIdol]?.cardImageExist) {
    console.log('imgUrlInfo');
    console.log(imgUrlInfo);
    typeList.forEach((type) => {
      if (imgUrlInfo[`${data.selectedAlbum}_${type}_${data.selectedMember}`]) {
        return;
      }
      if (!data.selectedAlbum) {
        console.log(data.selectedAlbum);
        return;
      }

      if (pathAlbum != undefined) {
        console.log("pathalbum");
        console.log(pathAlbum);
        getDownloadURL(ref(storage, `list/${data.selectedIdol}/${pathAlbum}/${pathAlbum}_${type}_${data.selectedMember}.jpg`))
          .then((url) => {
            imgUrlInfo[`${data.selectedAlbum}_${type}_${data.selectedMember}`] = url;
          })
          .catch((error) => {
            console.log(error);
          })
        console.log(imgUrlInfo);
      }
    })
  }

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

      // on:click={(e) => {
      //   e.target.parentNode.querySelector('.cardsImg').style.backgroundColor === 'gray' ? e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'white' : e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'gray';
      //   console.log(e.target.parentNode.querySelector('.cardsImg').style.backgroundColor);
      // }}>
</script>

<div id="cardsFilter" 
  bind:this={filterPage}
  on:scroll={findScroll}
  >
  {#if typeList}
    {#each typeList as type, index}
      <div class="cardsImgWrap">
        {#if $dbIdolAllInfo[data.selectedIdol].cardImageExist}
        <div class="cardsImg"
          on:click={(e) => {
            console.log(e.target.parentNode.querySelector('.photoCardImg').style.opacity);
            if ((e.target.parentNode.querySelector('.photoCardImg').style.opacity == 1) || (e.target.parentNode.querySelector('.photoCardImg').style.opacity == undefined)) {
              console.log('hello');
              e.target.parentNode.querySelector('.photoCardImg').style.opacity = 0.5;
            } else {
              e.target.parentNode.querySelector('.photoCardImg').style.opacity = 1;
            }
            console.log(e.target.parentNode.querySelector('.photoCardImg').style.opacity);
          }}>
          <img class="photoCardImg" src={`${imgUrlInfo[`${data.selectedAlbum}_${type}_${data.selectedMember}`]}`} alt="loading..." style={`opacity: 1; z-index: 0;`}>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardsImgReplace {
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
  .cardsImg img{
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
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