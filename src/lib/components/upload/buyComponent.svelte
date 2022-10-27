<script>
  import { openedSelectComponent } from '$lib/stores';
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
          console.log($openedSelectComponent);
        }}>X</div>
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
    display: flex;
    justify-content: space-between;
  }
</style>