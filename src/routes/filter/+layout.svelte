<script>
  import { currentFilterOrder } from '$lib/stores';
  import { onMount } from 'svelte';

  // onMount(() => {
  //   currentFilterOrder.set([]); 
  // })
</script>
<div id="wrap">
  <div id="filterHeader">
    <div id="returnBtn" 
      on:click={() => {
        window.history.go(-1);
        currentFilterOrder.update((prev) => {
          let returnArr = [...prev];
          returnArr.pop();
          console.log(prev);
          console.log(returnArr);
          return returnArr;
        });
        return false;
        }}
    >{`<`}</div>
    필터로 검색하기
  </div>
  <slot />
</div>

<style>
  #wrap {
    background-color: white;
    height: 100vh;
    /* box-sizing: border-box; */
  }
  #filterHeader {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    background-color: white; 
    z-index: 1;
  }
  #returnBtn {
    margin-right: 20px;
    font-size: 20px;
  }
</style>