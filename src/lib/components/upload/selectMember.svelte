<script>
  import { openedSelectComponent, idolAllInfo } from '$lib/stores';

  const memberList = idolAllInfo[$openedSelectComponent[1]].member;
</script>

<div id="memberSelect">
  {#each memberList as member} 
    <div class='memberImgWrap'
      on:click={() => {
        openedSelectComponent.update(n => {
          let returnArr = [...n];
          returnArr.push(member);
          return returnArr;
        });
        window.history.pushState({}, '');
      }}>
      <div class="memberImg">{member}</div>
      <div class="memberName">{member}</div>
    </div>
  {/each}
</div>

<style>
  #memberSelect {
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
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
    background-color: white;
  }
</style>