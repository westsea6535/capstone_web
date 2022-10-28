<script>
  export let goodsData;
  let {
    user,
    moreInfo,
    onSell,
    title,
    uploadDate,
    imgUrl,
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
    console.log(insideDate);
    const dateDays = Math.floor(insideDate / divisors.days);
    console.log(`days: ${dateDays}`);
    insideDate = insideDate - divisors.days * dateDays;
    console.log(insideDate);
    const dateHours = Math.floor(insideDate / divisors.hours);
    console.log(`hours: ${dateHours}`)
    insideDate = insideDate - divisors.hours * dateHours;
    console.log(insideDate);
    const dateMinutes = Math.floor(insideDate / divisors.minutes);
    console.log(`minutes: ${dateMinutes}`)
    insideDate = insideDate - divisors.minutes * dateMinutes;
    console.log(insideDate);
    const dateSeconds = Math.floor(insideDate / divisors.seconds);
    console.log(`seconds: ${dateSeconds}`)
    return `${dateDays ? `${dateDays}일 전` 
      : dateHours ? `${dateHours}시간 전`
      : dateMinutes ? `${dateMinutes}분 전`
      : `${dateSeconds}초 전`}`
  }
  console.log(get(dateDiff));
</script>

<div id="goodsDataWrap">
  <div id="goodsImgWrap">
    <img src={goodsData.imgUrl} alt="loading...">
  </div>
  <div id="goodsInfo">
    <!-- <div id="goodsPrice">
      {`${goodsData.price} 원`}
    </div> -->
    <div id="goodsTitle">
      {title ? title : '제목 없음'}
    </div>
    <div id="goodsDate">
      {get(dateDiff)}
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
  #goodsImgWrap  {
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }
  #goodsImgWrap img {
    width: 100%;
    border-radius: 5px;
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