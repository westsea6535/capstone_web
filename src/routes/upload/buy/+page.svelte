<script>
  import { openedSelectComponent, selectedCardList } from '$lib/stores';
  import BuyComponent from "$lib/components/upload/buyComponent.svelte";
</script>
<div id="wrap">
  <div id="uploadHeader">
    <div id="returnBtn" 
      on:click={() => {
        window.history.go(-1);
        return false;
        }}
    >{`<`}</div>
    구매글 올리기
  </div>
  <div id="uploadMain">
    <div id="photoListWrap">
      <label class="addPhotoBtn" for="addPhoto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(110,110,110,1)"/></svg>
        <span>사진 추가</span>
      </label>
      <input type="file" id="addPhoto">
    </div>
    <input type="text" placeholder="상품명" id="goodsNameInput">
    <div id="typeSelect">
      <div id="openTypeSelect"
        on:click={() => {
          openedSelectComponent.update(n => {
            let returnArr = [...n];
            returnArr[0] = 'typeSelect';
            return returnArr;
          });
          window.history.pushState({}, '');
        }}>
        <div class="title">
          포카 선택하기
        </div>
        <div class="title">
          >
        </div>
      </div>
      <div id="selectedCard">
        <div id="selectedCardNum">
          현재 {$selectedCardList.length}개의 카드가 선택되었습니다.
        </div>
        <div id="checkSelectedCard"
          on:click={() => {
            openedSelectComponent.update(n => {
              let returnArr = [...n];
              returnArr[0] = 'showSelected';
              return returnArr;
            });
            window.history.pushState({}, '');
          }}>
          확인 >
        </div>
      </div>
    </div>
    <div id="priceSelect">
      <div id="openPriceSelect"
        on:click={() => {
            openedSelectComponent.update(n => {
              let returnArr = [...n];
              returnArr[0] = 'priceSelect';
              return returnArr;
            });
            window.history.pushState({}, '');
        }}>
        <div class="title">
          가격 선택하기
        </div>
        <div class="title">
          >
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div id="locationSelect">
      <div class="title">
        지역 선택하기
      </div>
      <div class="title">
        >
      </div>
    </div>
    <div class="divider"></div>
    <label for="etcTextInput">기타 사항 입력</label>
    <textarea name="etcTextInput" id="etcTextInput" cols="30" rows="10"></textarea>
  </div>
  <div id="uploadFooter">
    <div id="uploadBtn"
      on:click={() => {
        console.log($selectedCardList);
      }}
      >등록</div>
  </div>

  {#if $openedSelectComponent[0]}
    <BuyComponent />
  {/if}

</div>

<style>
  #wrap {
    position: relative;
    background-color: white;
    heigth: 100vh;
  }
  #uploadHeader {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    background-color: blue;
    box-sizing: border-box;
  }
  #uploadMain {
    display: flex;  
    flex-direction: column;
    padding: 70px 10px 0;
    gap: 10px;
  }
  #photoListWrap {
    background-color: #eee;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #photoListWrap label {
    width: 60px;
    height: 60px;
    background-color: #cdcdcd;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #555;
  }
  #photoListWrap input {
    display: none;
  }
  .divider {
    height: 5px;
    margin: 10px 0;
    background-color: #f3f3f3;
  }
  #goodsNameInput {
    all: unset;
    height: 30px;
    border-bottom: 2px solid #cdcdcd;
    padding: 5px 0;
  }
  #goodsNameInput::placeholder {
    color: #cdcdcd;
  }
  #goodsNameInput:focus {
    border-bottom: 2px solid #aaa;
  }
  #goodsNameInput:focus::placeholder {
    color: #aaa;
  }
  #openTypeSelect, #openPriceSelect, #locationSelect{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  #selectedCard {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  #selectedCardNum {
    font-size: 13px;
  }
  #checkSelectedCard {
    font-size: 10px;
    color: #aaa;
  }
  #etcTextInput {
    all: unset;
    height: 200px;
    background-color: #f3f3f3;
    border-radius: 10px;
    line-height: 200px;
    border: 1px solid #aaa;
  } 
  #uploadFooter {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border-top: 1px solid #cdcdcd;
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
  }
  #uploadBtn {
    width: 100px;
    height: 30px;
  
    background-color: greenyellow;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>
