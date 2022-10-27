<script>
  import { selectedCardList, openedSelectComponent } from '$lib/stores';  
</script>

<div id="cardsFilter">
  {#each Array(20) as cardInfo, index}
    <div class="cardsImgWrap" 
      on:click={(e) => {
        e.target.parentNode.querySelector('.cardsImg').style.backgroundColor === 'gray' ? e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'white' : e.target.parentNode.querySelector('.cardsImg').style.backgroundColor = 'gray';

        
        let insideFlag = false;
        for (let i = 0; i < $selectedCardList.length; i++) {
          selectedCardList.update(n => {
            if ($selectedCardList[i].idol === $openedSelectComponent[1] 
              && $selectedCardList[i].member === $openedSelectComponent[2] 
              && $selectedCardList[i].type === $openedSelectComponent[3] 
              && $selectedCardList[i].card === index) {
              let returnArr = [...n]
              returnArr.splice(i, 1);
              insideFlag = true;
              return returnArr;
            } else {
              return n;
            }
          }) 
        }
        if (!insideFlag) {
          $selectedCardList.push({
            idol: $openedSelectComponent[1],
            member: $openedSelectComponent[2],
            type: $openedSelectComponent[3],
            card: index,
            price: 0,
          })
        }
        console.log($selectedCardList);
      }}>
      <div class="cardsImg">{`card${index}`}</div>
      <div class="cardsName">{`card${index}`}</div>
    </div>
  {/each}
</div>

<style>
  #cardsFilter {
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 10px 10px;
    overflow: scroll;
  }
  .cardsImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardsImg {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
  }
  .cardsName {
    width: 100%;
  }
</style>