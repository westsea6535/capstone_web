<script>
  import { idolAllInfo } from '$lib/stores.js';

</script>

<div id="idolFilter">
  {#each Object.entries(idolAllInfo) as [idolName, idolInfo]}
    <a class='idolImgWrap'
      href={`/filter/${idolName}`}>
      <div class="idolImg">{idolInfo.name}</div>
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
  }
  .idolImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .idolImg {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 50%;
  }
</style>