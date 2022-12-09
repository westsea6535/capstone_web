<script>
  import { selectedGoodsInfo } from '$lib/stores';
  import firebase from '$lib/firebase';
  import { getFirestore, query, collection, orderBy, limit, QuerySnapshot, doc, getDoc,  } from 'firebase/firestore';
  const db = getFirestore(firebase);

  export let goodsData;
  export let goodsFetched = true;
  let user, moreInfo, onSell, title, uploadDate, imgUrl, isTestData, goodsId;
  let uploadDateDate;

  if (!goodsFetched) {
    const getSingleGoodsData = async () => {
      goodsId = goodsData;
      console.log(goodsId);
      const docRef = doc(db, 'goodsList', goodsId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      user = docSnap.data().uploaderName;
      moreInfo = docSnap.data().moreInfo;
      onSell = docSnap.data().onSell;
      title = docSnap.data().title;
      uploadDate = docSnap.data().uploadDate;
      imgUrl = docSnap.data().imgUrl;
    }
    getSingleGoodsData()
      .then(() => {
        uploadDateDate = new Date(uploadDate.seconds * 1000);
        console.log(uploadDate);
        console.log(uploadDateDate);
        console.log(imgUrl);
      });
  } else {
    user = goodsData.user;
    moreInfo = goodsData.moreInfo;
    onSell = goodsData.onSell;
    title = goodsData.title;
    uploadDate = goodsData.uploadDate;
    imgUrl = goodsData.imgUrl;
    isTestData = goodsData.isTestData;

    uploadDateDate = new Date(uploadDate.seconds * 1000);
    console.log(uploadDate);
    console.log(uploadDateDate);
  }

  const get = (date) => {
    const currentDate = new Date();
    if (uploadDateDate) {
      return `${uploadDateDate.getHours()}시 ${uploadDateDate.getMinutes()}분`;
    }
  }
</script>

<div id="goodsDataWrap">
  <a href="/goods"
    on:click={() => {
      selectedGoodsInfo.set(goodsData);
    }}>
    <div id="goodsImgWrap">
      <div class="beforeImgRender"></div>
      {#if imgUrl}
        <img src={imgUrl?.[0]} alt="loading...">
      {:else}
        <div />
      {/if}
    </div>
    <div id="goodsInfo">
      <div id="goodsTitle">
        {title ? title : '제목 없음'}
      </div>
      {#if isTestData} 
        <div id="goodsDate">1일 전</div>
      {:else}
        {#if uploadDateDate}
          <div id="goodsDate">
            {get()}
          </div>
        {:else}
          <div id="goodsDate">

          </div>
        {/if}
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