<script>
  import { selectedGoodsInfo } from '$lib/stores';
  import GoodsCard from '$lib/components/goods/goodsCard.svelte';

  export let data;
  console.log(data);
  const { goodsCardList } = data;

</script>

<div id="wrap">
  <div id="goodsHeader">
    <button id="returnBtn" 
      on:click={() => {
        window.history.go(-1);
        }}
    >{`<`}</button>
    선택된 상품
  </div>
  <div id="goodsMain">
    <div id="goodsImg">
      <img src={`${$selectedGoodsInfo.imgUrl}`} alt="loading...">      
    </div>
    <div id="goodsInfo">
      <div id="goodsTitle">
        {$selectedGoodsInfo.title}
      </div>
      <div id="goodsUploadTime">
        {`1월 1일 1시 1분`}
      </div>
      <div id="goodsCondition">
        상품 상태: 미개봉
      </div>
      <div id="goodsIdolList">
        아이돌 리스트
      </div>
      <div id="sellerDiv">
        <div id="sellerProfileImg"></div>
        <div id="sellerInfo">
          <div id="sellerName">{$selectedGoodsInfo.user}</div>
          <div id="sellerGrade">평점: 5.0</div>
        </div>
        <div id="sellerMoreInfo">></div>
      </div>
      <div id="btnWrap">
        <div id="likeBtn">like</div>
        <div id="chatBtn">chat</div>
      </div>
      <div id="goodsContent">
        {$selectedGoodsInfo.moreInfo ? $selectedGoodsInfo.moreInfo : "추가 정보 없음"}
      </div>
    </div>
    <div id="goodsRecommend">
      <div id="goodsRecommendTitle">추천하는 굿즈 상품</div>
      <div id="goodsRecommendList">
        {#each Array(7) as _, index}
          <div class="recommendGoodsWrap">
            <div class="recommendGoodsPhoto"></div>
            <div class="recommendGoodsInfo">
              <div class="recommendGoodsTitle">{index}번째</div>
              <div class="recommendGoodsIdolList">{index}번째</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <GoodsCard goodsCardList={goodsCardList} />
</div>

<style>
  #wrap {
    height: 100vh;
    overflow: scroll;
  }
  #goodsHeader {
    display: flex;
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
  #goodsInfo {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 20px 5vw; 
    box-sizing: border-box;
  }
  #goodsTitle {
    font-size: 25px;
  }
  #goodsUploadTime {
    font-size: 13px;
    color: #888;
    margin-bottom: 20px;
  }
  #goodsCondition {
    font-size: 15px;
    margin-bottom: 20px;
  }
  #goodsIdolList {
    display: flex;
    margin-bottom: 40px;
  }
  #sellerDiv {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-bottom: 40px;
    position: relative;
  }
  #sellerDiv::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -5vw;
    background-color: #eee;
    width: 100vw;
    height: 2px;
  }
  #sellerProfileImg {
    width: 50px;
    height: 50px;
    background-color: #cdcdcd;
    border-radius: 50%;
  }
  #sellerInfo {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  #sellerName {
    font-size: 14px;
  }
  #sellerGrade {
    font-size: 14px;
    color: #888;
  } 
  #sellerMoreInfo {
    font-size: 30px;
    color: #888;
  }
  #btnWrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  #likeBtn, #chatBtn {
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 8px 0 5px;
  }
  #goodsContent {
    font-size: 14px;
    color: #333;
    position: relative;
    min-height: 30vh;
  }
  #goodsContent::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -5vw;
    background-color: #eee;
    width: 100vw;
    height: 2px;
  }
  #goodsRecommend {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 20px 5vw; 
    box-sizing: border-box;
    margin-top: 40px; 
    position: relative;
  }
  #goodsRecommend::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eee;
    width: 100vw;
    height: 2px;
  }
  #goodsRecommendTitle {
    font-size: 20px;
    padding-bottom: 10px;
  }
  #goodsRecommendList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .recommendGoodsWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recommendGoodsPhoto {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #cdcdcd;
    border-radius: 5px;
  }

</style>