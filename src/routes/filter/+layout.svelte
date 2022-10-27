<div id="wrap">
  <div id="filterHeader">
    <div id="returnBtn" 
      on:click={() => {
        window.history.go(-1);
        return false;
        }}
    >{`<`}</div>
    필터로 검색하기
  </div>
  <slot />
</div>

<style>
  #wrap {
    background-color: white;
    height: 100vh;
  }
  #filterHeader {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    background-color: white; 
  }
  #returnBtn {
    margin-right: 20px;
    font-size: 20px;
  }
</style>