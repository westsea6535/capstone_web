<script>
  import SingleGoods from "$lib/components/singleGoods.svelte";
  import BottomNav from "$lib/components/bottomNav.svelte";
  import UploadNav from "$lib/components/uploadNav.svelte";
  import { onMount } from 'svelte';

  let Carousel;
  onMount(async () => {
    const module = await import('svelte-carousel');
    console.log(module.default);
    Carousel = module.default;
  })

  export let data;
  let {allGoodsData} = data;
  console.log(allGoodsData);



</script>

<div id="wrap">
  <div id="pageHeader"></div>
  <div id="pageMain">
    <div id="homeLogo">
      <svelte:component this={Carousel} autoplay autoplayDuration={2000} dots={false} arrows={false}>
          <div class="banner" id="firstBanner">banner1</div>
          <div class="banner" id="secondBanner">banner2</div>
      </svelte:component>
    </div>
    <div id="goodsListWrap">
      <div id="recentGoodsTitle">
        최근 등록된 상품
      </div>
      <div id="recentGoodsList">
        <!-- {#each testDatas as testData}
          <SingleGoods goodsData={testData}></SingleGoods>
        {/each} -->
        {#each allGoodsData.reverse() as goodsData}
          <SingleGoods goodsData={goodsData} />
        {/each}
      </div>
    </div>
  </div>
  <BottomNav />
  <UploadNav />
</div>

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    z-index: 1;
  }
  #pageHeader {
    min-height: 80px;
    width: 100vw;
    background-color: #ccffff;
  }
  #pageMain {
    background-color: white;
    margin-bottom: 10vh;
  }
  #homeLogo {
    width: 100vw;
    display: flex;
  }
  .banner {
    width: 90vw;
    height: 100px;
    box-sizing: border-box;
  }
  #firstBanner {
    background-color: #ffddff;
  }
  #secondBanner {
    background-color: #ddffdd;
  }

  #recentGoodsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
  }
</style>