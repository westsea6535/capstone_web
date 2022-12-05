<script>
  import { selectedGoodsInfo } from '$lib/stores';
  
  export let goodsData;
  let {
    user,
    moreInfo,
    onSell,
    title,
    uploadDate,
    imgUrl,
    isTestData,
  } = goodsData;

  const uploadDateDate = new Date(uploadDate.seconds * 1000);
  const currentDate = new Date();
  const dateDiff = currentDate - uploadDateDate;

  console.log(goodsData);
  const divisors = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
  }
  const get = (date) => {
    let insideDate = date;
    const dateDays = Math.floor(insideDate / divisors.days);
    insideDate = insideDate - divisors.days * dateDays;
    const dateHours = Math.floor(insideDate / divisors.hours);
    insideDate = insideDate - divisors.hours * dateHours;
    const dateMinutes = Math.floor(insideDate / divisors.minutes);
    insideDate = insideDate - divisors.minutes * dateMinutes;
    const dateSeconds = Math.floor(insideDate / divisors.seconds);
    return `${dateDays ? `${dateDays}일 전` 
      : dateHours ? `${dateHours}시간 전`
      : dateMinutes ? `${dateMinutes}분 전`
      : `${dateSeconds}초 전`}`
  }
  // console.log(get(dateDiff));
</script>

<div id="goodsDataWrap">
  <a href="/goods"
    on:click={() => {
      selectedGoodsInfo.set(goodsData);
    }}>
    <div id="goodsImgWrap">
      <div class="beforeImgRender"></div>
      <img src={goodsData.imgUrl?.[0]} alt="loading...">
    </div>
    <div id="goodsInfo">
      <div id="goodsTitle">
        {title ? title : '제목 없음'}
      </div>
      {#if isTestData} 
        <div id="goodsDate">1일 전</div>
      {:else}
        <div id="goodsDate">
          {get(dateDiff)}
        </div>
      {/if}
    </div>
  </a>
</div>

<style>
  #goodsDataWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #goodsDataWrap a {
    all: unset;
    width: inherit;
  }
  #goodsImgWrap  {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;
  }
  #goodsImgWrap .beforeImgRender {
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    background-color: #cdcdcd;
  }
  #goodsImgWrap img {
    width: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
  #goodsTitle {
    font-size: 12px;
  }
  #goodsDate {
    max-width: 40vw;
    overflow: hidden;
  }
  /* #goodsPrice {
    font-weight: bold;
    padding: 5px 0;
  } */
</style>