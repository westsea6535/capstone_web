<script>
  import BottomNav from '$lib/components/bottomNav.svelte';
  import Login from '$lib/components/login.svelte';
  import { isLoggedIn, openLoginDiv, user } from '$lib/stores';
</script>
<div id="wrap">
  <div id="pageHeader">
    <div id="title">마이 페이지</div>
  </div>
  <div id="pageMain">
    <div id="userInfo">
      <div id="userInfoCard">
        <div id="userImage"></div>
        {#if $openLoginDiv}
          <div id="loginTitle"
            on:click={() => openLoginDiv.set(true)}>
            로그인 하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>
          </div>
        {:else}
          <div id="logined">
            로그인 되었습니다.
          </div>
        {/if}
      </div>
    </div>
    <div id="userLike">
      <div id="userLikeTitle" 
        on:click={() => {
          console.log($user);
        }}>
        즐겨찾기한 아이돌
      </div>
    </div>
    <div id="userChoice">
      <div id="userChoiceTitle">
        찜한 상품
      </div>
    </div>
    <div id="userSell">
      <div id="userSellTitle">
        판매하는 상품
      </div>
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
</style>
