<script>
  import { selectedCardList } from '$lib/stores';
  export let index;

  let currentPrice = $selectedCardList[index].price;
</script>


<div id="cardWrapWrap">
  <div id="cardWrap">
    <div id="cardInfoIdol">{$selectedCardList[index].idol}</div>
    <div id="cardInfoMember">{$selectedCardList[index].memeber}</div>
    <div id="cardInfoType">{$selectedCardList[index].type}</div>
    <div id="cardInfoCard">{$selectedCardList[index].card}</div>
  </div>
  <input type="number" bind:value={currentPrice} 
    on:change={() => {
      selectedCardList.update(n => {
        let returnArr = [...n];
        returnArr[index].price = currentPrice;
        return returnArr;
      })
    }}>
</div>

<style>
  #cardWrapWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #cardWrap {
    width: 100%;
    height: 150px;
    border: 1px solid greenyellow;
    box-sizing: border-box;
  }
  #cardWrapWrap input {
    all: unset;
    border: 1px solid black;
    box-sizing: border-box;
    width: 100%;
  }

</style>