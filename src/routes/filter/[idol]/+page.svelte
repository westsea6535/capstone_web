<script>
  import { idolAllInfo } from '$lib/stores.js';

  export let data;

  const memberList = idolAllInfo[data.selectedIdol].member;

</script>

<div id="memberFilter">
  {#each memberList as member} 
    <a class='memberImgWrap'
      href={`/filter/${data.selectedIdol}/${member}`}>
      <div class="memberImg">{member}</div>
      <div class="memberName">{member}</div>
    </a>
  {/each}
</div>

<style>
  #memberFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
    overflow: scroll;
  }
  .memberImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .memberImg {
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