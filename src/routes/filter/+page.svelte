<script>
  import { idolAllInfo } from '$lib/stores.js';
  import { afterUpdate, onMount } from 'svelte';

  // export let data;

  // let { imgUrlInfo, getAllDownloadUrl } = data;
  // $: imgUrlInfo = imgUrlInfo;

  const getAllDownloadUrl = async () => {
    for (const idolInfo of Object.entries(idolAllInfo)) {
    }
  }

  Object.entries(idolAllInfo).forEach(() => {
    console.log("pagejs entries");
    console.log(idolInfo);
    getDownloadURL(ref(storage, `list/${idolInfo[0]}/profile/${idolInfo[1].currentProfile}_all.jpg`))
      .then((url) => {
        imgUrlInfo[idolInfo[0]] = url;
        console.log("idolInfo[0]: " + idolInfo[0]);
      })
  })

  afterUpdate(() => {
    console.log('updated');
    console.log(imgUrlInfo);
  })


</script>

<div id="idolFilter">
  <button on:click={() => {
    for (let i = 0; i < 3; i++) {
      console.log(idolAllInfo);
      console.log(imgUrlInfo);
      // console.log(Object.entries(imgUrlInfo)[i]);
      // console.log(idolAllInfo[Object.entries(imgUrlInfo)[i][0]]);
    }
  }}></button>
  {#if imgUrlInfo}
    {#each Object.entries(imgUrlInfo) as [idolName, imgUrl]}
      <div class="idolImgWrap">
        <a href={`/filter/${idolName}`}>
          {#if idolAllInfo[idolName].imageExist}
            <div class="idolImgReplace">
              {idolAllInfo[idolName].name}
            </div>
          {:else if idolAllInfo[idolName].imageExist}
            <div class="idolImg">
              <div class="beforeImgRender"></div>
              <img src={imgUrl} alt="loading...">
            </div>
          {/if}
          <div class="idolName">{idolAllInfo[idolName].name}</div>
        </a>
      </div>
    {/each}
  {/if}

</div>

<style>
  #idolFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
    overflow: scroll;
    background-color: #fffff3;
  }
  .idolImgWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .idolImgWrap a {
    all: unset;
    width: inherit;
  }
  .idolImgReplace {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .idolImg  {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }
  .idolImg .beforeImgRender {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #cdcdcd;
  }
  .idolImg img {
    border-radius: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>