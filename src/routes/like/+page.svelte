<script>
  import SingleGoods from "$lib/components/singleGoods.svelte";
  import BottomNav from "$lib/components/bottomNav.svelte";
  import UploadNav from "$lib/components/uploadNav.svelte";

  export let data;
  let {allGoodsData} = data;
  console.log(allGoodsData);

</script>

<div id="wrap">
  <div id="title">즐겨 찾기</div>
  <div id="pageMain">
    <div id="goodsListWrap">
      <div id="recentGoodsList">
        {#each allGoodsData.reverse() as goodsData}
          <SingleGoods goodsData={goodsData} />
        {/each}
      </div>
    </div>
  </div>
  <BottomNav />
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
  #title {
    font-size: 40px;
    padding: 30px 20px;
  }
  #pageMain {
    background-color: white;
    margin-bottom: 10vh;
  }
  #recentGoodsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
  }
</style>