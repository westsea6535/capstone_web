<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>


  const idolAllInfo = {
    'BTS' : {
      name: 'BTS',
      member: ['RM', 'Jin', 'Suga',],
      types: ['album1', 'album2', 'album3',],
    },
    'ITZY' : {
      name: 'ITZY',
      member: ['LIA', 'Yeji', 'Yuna',],
      types: ['album1', 'album2', 'album3',],
    },
    'StrayKids' : {
      name: 'StrayKids',
      member: ['Mem1', 'Mem2', 'Mem3',],
      types: ['album1', 'album2', 'album3',],
    }
  }

  let currentFilter = 'idol';
  let selectedIdol = '';
  let selectedMember = '';
  let selectedTypes = '';
</script>
<div id="wrap">
  <div id="filterHeader">
    {#if currentFilter === 'idol'}
      <a id="returnBtn" 
        href='/'
      >{`<`}</a>
    {:else}
      <div id="returnBtn" 
        on:click={() => {
          if (currentFilter === 'member') {currentFilter = 'idol'}
          else if (currentFilter === 'types') {currentFilter = 'member'}
          else if (currentFilter === 'photoCard') {currentFilter = 'types'}
        }}
      >{`<`}</div>
    {/if}
    필터로 검색하기
  </div>
  {#if currentFilter === 'idol'}
    <div id="idolFilter">
      {#each Object.entries(idolAllInfo) as [idolName, idolInfo]}
        <div class="idolImgWrap" 
          on:click={() => {
            selectedIdol = idolInfo.name;
            currentFilter = 'member';
          }}>
          <div class="idolImg">{idolInfo.name}</div>
          <div class="idolName">{idolInfo.name}</div>
        </div>
      {/each}
    </div>
  {:else if currentFilter === 'member'}
    <div id="memberFilter"
      on:click={() => {
        currentFilter = 'types';
      }}>
      {#each idolAllInfo[selectedIdol].member as memberInfo}
        <div class="memberImgWrap">
          <div class="memberImg">{memberInfo}</div>
          <div class="memberName">{memberInfo}</div>
        </div>
      {/each}
    </div>
  {:else if currentFilter === 'types'}
    <div id="typesFilter"
      on:click={() => {
        currentFilter = 'photoCard';
      }}>
      {#each idolAllInfo[selectedIdol].types as typesInfo}
        <div class="typesImgWrap">
          <div class="typesImg">{typesInfo}</div>
          <div class="typesName">{typesInfo}</div>
        </div>
      {/each}
    </div>
  {:else if currentFilter === 'photoCard'}
    <div id="cardsFilter">
      {#each Array(20) as cardInfo, index}
        <div class="cardsImgWrap">
          <div class="cardsImg">{`card${index}`}</div>
          <div class="cardsName">{`card${index}`}</div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  #wrap {
    position: relative;
  }
  #filterHeader {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: calc(50vw - 50%);
    background-color: white; 
  }
  #returnBtn {
    margin-right: 20px;
    font-size: 20px;
  }
  #idolFilter, #memberFilter, #typesFilter, #cardsFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
  }
  .idolImgWrap, .memberImgWrap, .typesImgWrap, .cardsImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .idolImg, .memberImg, .typesImg, .cardsImg {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 50%;

  }
  .cardsImg {
    border-radius: 4px;
  }
</style>