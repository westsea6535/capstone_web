<script>
  import { idolAllInfo } from '$lib/stores.js';
  import { getStorage, ref, getDownloadURL } from 'firebase/storage';
  import firebase from '$lib/firebase';

  const storage = getStorage(firebase);
  let imgUrlInfo = {};

  Object.entries(idolAllInfo).forEach((e) =>  {
    if (e[1].imageExist) {
      getDownloadURL(ref(storage, `list/${e[0]}/profile/${e[1].currentProfile}_all.jpg`))
        .then((url) => {
          imgUrlInfo[e[0]] = url;
        })
      console.log(imgUrlInfo);
    }
  })

</script>

<div id="idolFilter">
  {#each Object.entries(idolAllInfo) as [idolName, idolInfo]}
    <a class='idolImgWrap'
      href={`/filter/${idolName}`}>
      {#if !idolInfo.imageExist}
        <div class="idolImgReplace">
          {idolInfo.name}
        </div>
      {:else if idolInfo.imageExist}
        <div class="idolImg">
          <img src={imgUrlInfo[idolName]} alt="loading...">
        </div>
      {/if}
      <div class="idolName">{idolInfo.name}</div>
    </a>
  {/each}
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  .idolImg img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    box-shadow: 0 0 2px 2px #cdcdcd;
  }
</style>