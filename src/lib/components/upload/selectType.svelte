<script>
  import { openedSelectComponent, idolAllInfo } from '$lib/stores';

  const typesList = idolAllInfo[$openedSelectComponent[1]].types;
</script>

<div id="typesSelect">
  {#each typesList as type} 
    <div class='typesImgWrap'
      on:click={() => {
        openedSelectComponent.update(n => {
          let returnArr = [...n];
          returnArr.push(type);
          return returnArr;
        });
        window.history.pushState({}, '');
      }}>
      <div class="typesImg">{type}</div>
      <div class="typesName">{type}</div>
    </div>
  {/each}
</div>

<style>
  #typesSelect {
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    overflow: scroll;
  }
  .typesImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .typesImg {
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