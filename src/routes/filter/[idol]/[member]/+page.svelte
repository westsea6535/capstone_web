<script>
  import { idolAllInfo } from '$lib/stores.js';
  export let data;

  const typesList = idolAllInfo[data.selectedIdol].types;

</script>

<div id="typesFilter">
  {#each typesList as type}
    <a class='typesImgWrap'
      href={`/filter/${data.selectedIdol}/${data.selectedMember}/${type}`}>
      <div class="typesImg">{type}</div>
      <div class="typesName">{type}</div>
    </a>
  {/each}
</div>


<style>
  #typesFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
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
  }
</style>