<script>
  import { idolAllInfo, currentFilterOrder } from '$lib/stores.js';
  import { afterUpdate, onMount } from 'svelte';

  export let data;

  afterUpdate(() => {
    console.log("updated in filter");
  })

</script>

<div id="idolFilter">
  {#if data}
    {#if $currentFilterOrder.length == 0}
      {#each Object.entries(data.idolInfoAll) as [idolName, singleInfo]}
        <div 
          class="idolImgWrap"
          on:click={() => {
            window.history.pushState({}, ''); 
            currentFilterOrder.update((prev) => {
              let returnArr = [...prev];
              returnArr.push(idolName);
              return returnArr;
            })
            console.log($currentFilterOrder);
          }}>
          <div class="widthInherit">
            {#if !singleInfo.imageExist}
              <div class="idolImgReplace">
                {singleInfo.name}
              </div>
            {:else if singleInfo.imageExist}
              <div class="idolImg">
                <div class="beforeImgRender"></div>
                <img src={singleInfo.imageURL} alt="loading...">
              </div>
            {/if}
          </div>
          <div class="idolName">{singleInfo.name}</div>
        </div>
      {/each}
    {:else if $currentFilterOrder.length == 1}
      {#each Object.entries(data.idolInfoAll[$currentFilterOrder[0]].memberImageURL) as [memberName, memberImageURL]}
        <div 
          class="idolImgWrap"
          on:click={() => {
            window.history.pushState({}, ''); 
            currentFilterOrder.update((prev) => {
              let returnArr = [...prev];
              returnArr.push(memberName);
              return returnArr;
            })
            console.log($currentFilterOrder);
            console.log(data.idolInfoAll[$currentFilterOrder[0]].types)
          }}>
          <div class="widthInherit">
            <div class="idolImg">
              <div class="beforeImgRender"></div>
              <img src={memberImageURL} alt="loading...">
            </div>
          </div>
          <div class="idolName">{memberName}</div>
        </div>
      {/each}
    {:else if $currentFilterOrder.length == 2}
      {#each data.idolInfoAll[$currentFilterOrder[0]].types as type}
        <a href="/filter/album"
          on:click={() => {
            console.log($currentFilterOrder); 
            currentFilterOrder.update((prev) => {
              let returnArr = [...prev];
              returnArr.push(type);
              return returnArr;
            })
            console.log($currentFilterOrder); 
          }}>
          <div class="widthInherit">
            <div class="idolImgReplace">
              {type}
            </div>
          </div>
          <div class="idolName">{type}</div>
        </a>
        <!-- </div> -->
      {/each}
    {/if}
  {/if}

</div>

<style>
  #idolFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
    overflow: scroll;
    background-color: #fffff3;
  }
  .idolImgWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .widthInherit {
    width: inherit;
  }
  .idolImgReplace {
    width: inherit; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .idolImg  {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }
  .idolImg .beforeImgRender {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #cdcdcd;
  }
  .idolImg img {
    border-radius: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>