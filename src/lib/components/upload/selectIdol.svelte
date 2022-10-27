<script>
  import { openedSelectComponent, idolAllInfo } from '$lib/stores';
</script>

<div id="idolSelect">
  {#each Object.entries(idolAllInfo) as [idolName, idolInfo]}
    <div class='idolImgWrap'
      on:click={() => {
        openedSelectComponent.update(n => {
          let returnArr = [...n];
          returnArr.push(idolName);
          return returnArr;
        });
        window.history.pushState({}, '');
      }}>
      <div class="idolImg">{idolInfo.name}</div>
      <div class="idolName">{idolInfo.name}</div>
    </div>
  {/each}
</div>

<style>
  #idolSelect {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
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
    background-color: white;
  }
</style>