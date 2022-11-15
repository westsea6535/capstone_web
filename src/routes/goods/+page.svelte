<script>
  import { selectedGoodsInfo } from '$lib/stores';
  import GoodsCard from '$lib/components/goods/goodsCard.svelte';

  export let data;
  console.log(data);
  const { goodsCardList } = data;

</script>

<div id="wrap">
  <div id="goodsHeader">
    <div id="returnBtn" 
      on:click={() => {
        window.history.go(-1);
        return false;
        }}
    >{`<`}</div>
    필터로 검색하기
  </div>
  <div id="goodsMain">
    <div id="goodsImg">
      <img src={`${$selectedGoodsInfo.imgUrl}`} alt="loading...">      
    </div>
    <div id="goodsInfo">
      <div id="goodsTitle">{$selectedGoodsInfo.title}</div>
      <!-- <div id="goodsDate">{uploadDate}</div> -->
    </div>
  </div>
  <GoodsCard goodsCardList={goodsCardList} />
</div>

<style>
  #wrap {
    height: 100vh;
    overflow: scroll;
  }
  #goodsMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2000px;
  }
  #goodsImg img {
    width: 100vw;
    height: 100%;
  }
</style>