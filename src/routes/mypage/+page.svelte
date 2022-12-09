<script>
  import BottomNav from '$lib/components/bottomNav.svelte';
  import Login from '$lib/components/login.svelte';
  import { isLoggedIn, openLoginDiv, user } from '$lib/stores';
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import { auth, provider } from '$lib/firebaseAuth';
  import SingleGoods from '$lib/components/singleGoods.svelte';
  import { serverTimestamp } from 'firebase/firestore';

  let currentUserGoodsSelect = "upload";
  let userData;
  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem('userData'));
  }

  const testGoodsInfo = {
    user: "testUser1",
    moreInfo: "no moreInfo",
    onSell: true,
    title: "test Title 1",
    uploadDate: serverTimestamp(),
    imgUrl: null,
    isTestData: true,
  }
</script>

<div id="wrap">
  <div id="pageHeader">
    <div id="title"
      on:click={() => {
        console.log(localStorage.getItem('userData'));
        onAuthStateChanged(auth, (authUser) => {
          console.log("authUser");
          console.log(authUser);
        })
      }}>마이 페이지</div>
  </div>
  <div id="pageMain">
    <div id="userInfo">
      <div id="userInfoCard">
        <div id="userImage"></div>
        {#if !$isLoggedIn}
          <div id="loginTitle"
            on:click={() => openLoginDiv.set(true)}>
            로그인 하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </div>
        {:else}
          <div id="logined">
            로그인 되었습니다.
          </div>
          <div id="logOutbtn"
            on:click={() => {
              signOut(auth);
              isLoggedIn.set(false);
            }}>로그아웃</div>
        {/if}
      </div>
    </div>
    <div id="userLike">
      <div id="userLikeTitle">
        즐겨찾기한 아이돌
      </div>
      <div id="userLikeList">
        {#if !$isLoggedIn}
          <div id="userLikeNotLogin">
            로그인하여 즐겨찾기 할 아이돌을 선택하세요.
          </div>
        {:else}
          <!-- {#if userData.userLikeList} -->
          {#if false}
            {#each userData.userLikeList as userLike}
              <div class="userLikeImg">

              </div> 
            {/each}
          {:else}
            <div id="noUserLike">
              즐겨찾기한 아이돌이 없습니다. 클릭하면 설정으로 이동합니다.
            </div>
          {/if}
        {/if}
      </div>
    </div>
    <div id="userGoods">
      <div id="userGoodsSelectionNav">
        <div 
          class={`userGoodsSelectionBtn ${currentUserGoodsSelect === "upload" ? "selectedSelection" : ""}`}
          on:click={() => currentUserGoodsSelect = "upload"}>
          판매 상품
        </div>
        <div 
          class={`userGoodsSelectionBtn ${currentUserGoodsSelect === "want" ? "selectedSelection" : ""}`}
          on:click={() => currentUserGoodsSelect = "want"}>
          찜한 상품
        </div>
        <div 
          class={`userGoodsSelectionBtn ${currentUserGoodsSelect === "finished" ? "selectedSelection" : ""}`}
          on:click={() => currentUserGoodsSelect = "finished"}>
          거래 완료 상품
        </div>
      </div>
      {currentUserGoodsSelect}
      {#if !$isLoggedIn}
        <div id="userLikeNotLogin">
          로그인하여 상품 등록
        </div>
      {:else}
        <div id="userGoodsMain">
          {#if userData.userLikeList}
            {#each userData.userLikeList as userLikeGoods}
              <SingleGoods goodsData={userLikeGoods} goodsFetched={false}/> 
            {/each}
          {/if}
        </div>
      {/if}
    </div>
  </div>
  <BottomNav />
  {#if $openLoginDiv}
    <Login />
  {/if}

</div>

<style>
  #wrap {
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 10vh;
    box-sizing: border-box;
  }
  #title {
    font-size: 30px;
    padding: 15px 15px;
  }
  #pageMain {
    display: flex;
    flex-direction: column;
    background-color: #eee;
    gap: 15px;
    padding-top: 15px;
  }
  #pageMain > div {
    min-height: 25vh;
    background-color: white;
  }
  #userInfo {
    display: flex;
    padding: 30px;
    box-sizing: border-box;
  }
  #userInfoCard {
    display: flex;
    gap: 30px;

  }
  #userImage {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: #cdcdcd;
  }
  #userLikeTitle {
    padding: 15px 10px 5px;
    font-size: 20px;
  }
  #userLikeNotLogin {
    color: #888;
  } 
  #userGoods {
    display: flex;
    flex-direction: column;
    padding: 3px;
  }
  #userGoodsSelectionNav {
    padding: 7px 10px;
    display: flex;
    gap: 6px;
  }
  .userGoodsSelectionBtn {
    font-size: 14px;
    padding: 6px 13px;
    border: 1px solid #abcf93;
    border-radius: 14px;
    color: #abcf93
  }
  .selectedSelection {
    background-color: #f0ffe5;
  }
  #userGoodsMain {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3px;
    border: 1px solid black;
    box-sizing: border-box;
  }

</style>
