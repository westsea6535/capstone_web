<script>
  import '$lib/style/global.css';
  import { page } from '$app/stores';
  $: currentFirstRoute = $page.url.pathname.split('/')[1];
  console.log(currentFirstRoute);
</script>

<div id="pcWrap"></div>
<div id="mobileWrap">
  <div id="slotWrap">
    <slot></slot>
  </div>
  {#if !currentFirstRoute || ['filter'].indexOf(currentFirstRoute)}
    <div id="mobileBottomNav">
      {#each ['home', 'filter', 'upload', 'like', 'myPage',] as menuTitle}
        <a href={`/${menuTitle === 'home' ? '' : menuTitle}`}>
          <div class={`
            bottomNavBtn 
            ${currentFirstRoute === menuTitle ? 'currentPage' : ''}
          `}>{menuTitle}</div>
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  #pcWrap {
    width: 100%;
    height: 100%;
    display: block;  
    justify-content: center;
    background-color: #cdcdcd;
    position: fixed;

  }
  #mobileWrap {
    position: absolute;
    top: 0;
    left: calc(50% - 200px);
    width: 400px;
    height: 100%;
    background-color: white; 
  }
  #slotWrap {
    width: 100%;
  }
  #mobileBottomNav {
    display: flex;
    position: fixed;
    border-top: 2px solid #cdcdcd;
    bottom: 0; 
    height: 10vh;
  }
  #mobileBottomNav a {
    all: unset;
    cursor: pointer;
  }
  .bottomNavBtn {
    width: 80px; 
    height: 100%;
    text-align: center;
    font-size: 15px;
    box-sizing: border-box;
    background-color: white;
  }
  .currentPage {
    background-color: #ffefe9;
    color: #D6FF27;
  }

</style>