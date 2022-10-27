<script>
  import { openedSelectComponent, selectedCardList } from '$lib/stores';
  import SelectIdol from '$lib/components/upload/selectIdol.svelte';
  import SelectMember from '$lib/components/upload/selectMember.svelte';
  import SelectType from '$lib/components/upload/selectType.svelte';
  import SelectCard from '$lib/components/upload/selectCard.svelte';

  $: selectedCardList;

  window.onpopstate = () => {
    openedSelectComponent.update(n => {
      let returnArr = [...n];
      returnArr.pop();
      return returnArr;
    });
  }
</script>

  <div id="componentBody">
    {#if $openedSelectComponent.length === 1} 
      <SelectIdol />
    {:else if $openedSelectComponent.length === 2}
      <SelectMember />
    {:else if $openedSelectComponent.length === 3}
      <SelectType />
    {:else if $openedSelectComponent.length === 4}
      <SelectCard />
    {/if}
  </div>
  <div id="componentFooter">
    <div id="selectedCount">현재 {$selectedCardList.length}개 선택하였습니다.</div>
    <div id="search">확인</div>
  </div>

<style>
  #componentFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-top: 1px solid #aaa;
  }
</style>