<script>
  import { idolAllInfo } from '$lib/stores.js';
  import { getStorage, ref, getDownloadURL } from 'firebase/storage';
  import firebase from '$lib/firebase';
  
  export let data;

  const storage = getStorage(firebase);

  const memberList = idolAllInfo[data.selectedIdol].member;

  let imgUrlInfo = {};

  if (idolAllInfo[data.selectedIdol].imageExist) {
    memberList.forEach((member) => {
      getDownloadURL(ref(storage, `list/${data.selectedIdol}/profile/${idolAllInfo[data.selectedIdol].currentProfile}_${member}.jpg`))
        .then((url) => {
          imgUrlInfo[member] = url;
        })
      console.log(imgUrlInfo);
    })
  }

</script>

<div id="memberFilter">
  {#each memberList as member} 
    <a class='memberImgWrap'
      href={`/filter/${data.selectedIdol}/${member}`}>
      {#if !idolAllInfo[data.selectedIdol].imageExist}
        <div class="memberImgReplace">
          {member.name}
        </div>
      {:else if idolAllInfo[data.selectedIdol].imageExist}
        <div class="memberImg">
          <img src={imgUrlInfo[member]} alt="loading...">
        </div>
      {/if}
      <div class="memberName">{member}</div>
    </a>
  {/each}
</div>

<style>
  #memberFilter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    padding-top: 65px;
    overflow: scroll;
    box-sizing: border-box;
    height: 100vh;
    background-color: #fffff3;
  }
  .memberImgWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .memberImgReplace {
    width: 100%; 
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid greenyellow;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .memberImg img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    box-shadow: 0 0 2px 2px #cdcdcd;
  }
</style>