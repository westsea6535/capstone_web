<script>
  import { openedSelectComponent, selectedCardList } from '$lib/stores';
  import SelectComponent from '$lib/components/upload/selectComponent.svelte';
  import ShowSelectedComponent from '$lib/components/upload/showSelectedComponent.svelte';
  import PriceSelect from '$lib/components/upload/priceSelect.svelte';

</script>
<div id="dimPage"></div>
<div id="componentWrap">
  <div id="positionRelative">
    <div id="componentHeader">
      <div id="backBtn"
        on:click={() => {
          window.history.go(-1);
        }}>{'<'}</div>
      <div id="closeBtn"
        on:click={() => {
          console.log($openedSelectComponent);
          while ($openedSelectComponent[0]) {
            console.log('while');
            openedSelectComponent.update(n => {
              let returnArr = n;
              returnArr.pop();
              return returnArr;
            })
          }
          selectedCardList.set([]);
          console.log($openedSelectComponent);
        }}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="black"/>
        </svg>
      </div>
    </div> 
    {#if $openedSelectComponent[0] === 'typeSelect'}
      <SelectComponent />
    {:else if $openedSelectComponent[0] === 'showSelected'}
      <ShowSelectedComponent />
    {:else if $openedSelectComponent[0] === 'priceSelect'}
      <PriceSelect />
    {/if}
  </div>
</div>

<style>
  #dimPage {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
  }
  #componentWrap {
    position: absolute;
    width: 80vw;
    height: 50vh;
    top: 25vh;
    right: 10vw;
    background-color: white;
    border-radius: 5px;
    opacity: 1.0 !important;
  }
  #positionRelative {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #componentHeader {
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    border-bottom: 1px solid #cdcdcd;
  }
</style>