<script>
  import { selectedCardList } from '$lib/stores';
  import ItemPriceSelect from '$lib/components/upload/itemPriceSelect.svelte';
</script>

<div id="showSelectedWrap">
  {#each $selectedCardList as card, index}
    <ItemPriceSelect index={index}/>
  {/each}
</div>
<div id="showSelectedFooter"
  on:click={() => {
    window.history.go(-1);
  }}>
  확인
</div>

<style>
  #showSelectedWrap {
    height: calc(45vh - 30px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    padding-bottom: 50px;
    overflow: scroll;
  }
  #showSelectedFooter {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #cdcdcd;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
</style>
