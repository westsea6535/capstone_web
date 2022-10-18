<script>
  import { goto, afterNavigate } from '$app/navigation';
  import { base } from '$app/paths';
    import { query_selector_all } from 'svelte/internal';





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
  let previousPage = base;
  let scrollY = 0;
  let beforeScrollY = 0;
  $: scrollDirectionBottom = findScroll(scrollY);

  const findScroll = (y) => {
    if (y < beforeScrollY) {
      console.log('scroll');
      beforeScrollY = y;
      return true;
    } else if (y > beforeScrollY) {
      beforeScrollY = y;
      return false;
    }
  }

  afterNavigate(({ from }) => {
    previousPage = from?.url.pathname || previousPage;
  })
</script>
<svelte:window bind:scrollY={scrollY} />

<div id="wrap">
  <div id="filterHeader">
    {#if currentFilter === 'idol'}
      <div id="returnBtn" 
        on:click={() => {
          console.log(previousPage);
          goto(previousPage);
          }}
      >{`<`}</div>
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
        <div class="cardsImgWrap" 
          on:click={(e) => {
            e.target.parentNode.querySelector('.cardsImg').style.backgroundColor === 'gray' ? e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'white' : e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'gray';
            console.log(e.target.parentNode.querySelector('.cardsImg').style.backgroundColor);
          }}>
          <div class="cardsImg">{`card${index}`}</div>
          <div class="cardsName">{`card${index}`}</div>
        </div>
      {/each}
      <div id="cardSearchNav" class:hideDiv={scrollDirectionBottom}>
        검색하기
      </div>
    </div>
  {/if}
</div>

<style>
  #wrap {
    position: relative;
  }
  #filterHeader {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
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
    overflow: scroll;
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
    background-color: white;
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