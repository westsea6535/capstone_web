<script>
  export let goodsData;
</script>

<div id="goodsDataWrap">
  <img src={goodsData.imageUrl} alt="loading...">
  <div id="goodsInfo">
    <div id="goodsPrice">
      {`${goodsData.price}원`}
    </div>
    <div id="goodsTitle">
      {goodsData.title}
    </div>
  </div>
</div>

<style>
  #goodsDataWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #goodsDataWrap img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  #goodsTitle {
    font-size: 12px;
  }
</style>