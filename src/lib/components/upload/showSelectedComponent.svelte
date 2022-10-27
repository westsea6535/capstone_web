<script>
  import { selectedCardList } from '$lib/stores';
  
</script>

<div id="showSelectedWrap">
  <div id="cardInfoTitle">
    <div id="cardInfoIdol">아이돌</div>
    <div id="cardInfoMember">멤버</div>
    <div id="cardInfoType">종류</div>
    <div id="cardInfoCard">타입</div>
  </div>
  {#each $selectedCardList as card}
    <div id="cardInfoWrap">
      <div id="cardInfoIdol">{card.idol}</div>
      <div id="cardInfoMember">{card.member}</div>
      <div id="cardInfoType">{card.type}</div>
      <div id="cardInfoCard">{card.card}</div>
    </div>
  {/each}
</div>

<style>
  #showSelectedWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #cardInfoWrap, #cardInfoTitle {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 2fr;
  }
  #cardInfoWrap div, #cardInfoTitle div {
    text-align: center;
  }
</style>
