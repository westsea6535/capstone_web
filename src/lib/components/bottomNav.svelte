<script>
  import { page } from '$app/stores';

  let currentFirstRoute = $page.url.pathname.split('/')[1];
</script>

<div id="mobileNav">
  <nav>
    <a href="/">
      <div class={`${!currentFirstRoute ? 'mobileCurrentPage' : 'mobileNavButton'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" fill={`${!currentFirstRoute ? 'black' : 'rgba(153,153,153,1)'}`}/></svg>
        Home
      </div>
    </a>
    <a href="/filter">
      <div class={`${currentFirstRoute === 'filter' ? 'mobileCurrentPage' : 'mobileNavButton'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h5v2h-5v-2z" fill={`${currentFirstRoute === 'filter' ? 'black' : 'rgba(153,153,153,1)'}`}/></svg>
        Filter
      </div>
    </a>
    <a href="/chat">
      <div class={`${currentFirstRoute === 'chat' ? 'mobileCurrentPage' : 'mobileNavButton'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" fill={`${currentFirstRoute === 'chat' ? 'black' : 'rgba(153,153,153,1)'}`}/></svg>
        chat
      </div>
    </a>
    <a href="/like">
      <div class={`${currentFirstRoute === 'like' ? 'mobileCurrentPage' : 'mobileNavButton'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.001a.996.996 0 0 1-.993.999H3.993A.996.996 0 0 1 3 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z" fill={`${currentFirstRoute === 'like' ? 'black' : 'rgba(153,153,153,1)'}`}/></svg>
        Like
      </div>
    </a> 
    <a href="/mypage">
      <div class={`${currentFirstRoute === 'mypage' ? 'mobileCurrentPage' : 'mobileNavButton'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill={`${currentFirstRoute === 'mypage' ? 'black' : 'rgba(153,153,153,1)'}`}/></svg>
        MyPage
      </div>
    </a> 
  </nav>
</div>

<style>
  #mobileNav {
    position: fixed;
    bottom: 0;
  }
  #mobileNav nav {
    display: flex;
    align-items: center;
    height: 10vh;
    min-height: 40px;
    max-height: 50px;
    background-color: white;
    border-top: 1px solid #eee;
  }
  #mobileNav nav a {
    all: unset;
    width: 20vw;
    font-size: 10px;
  }
  .mobileNavButton, .mobileCurrentPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }    
  .mobileNavButton {
    color: #999;
  }
  .currentPage {
    color: black;
  }
</style>