<script>
  import SingleGoods from "$lib/components/singleGoods.svelte";

  const testDatas = [
    {
      title: 'ITZY 있지믿지날자 팬미팅 수료증양도(가격인하)',
      name: 'ITZY',
      price: 10000,
      imageUrl: 'testImage/testImage1.jpg',
    },
    {
      title: '삼성 갤럭시Z플립4 방탄 엽서 방탄소년단 한정판 미니 포스터',
      name: 'BTS',
      price: 25000,
      imageUrl: 'testImage/testImage2.jpg',
    },
    {
      title: 'jyp샵 스트레이키즈 미공포 양도 받아요',
      name: 'strayKids',
      price: 50000,
      imageUrl: 'testImage/testImage3.jpg',
    },
    {
      title: 'ITZY 있지믿지날자 팬미팅 수료증양도(가격인하)',
      name: 'ITZY',
      price: 10000,
      imageUrl: 'testImage/testImage1.jpg',
    },
    {
      title: '삼성 갤럭시Z플립4 방탄 엽서 방탄소년단 한정판 미니 포스터',
      name: 'BTS',
      price: 25000,
      imageUrl: 'testImage/testImage2.jpg',
    },
    {
      title: 'jyp샵 스트레이키즈 미공포 양도 받아요',
      name: 'strayKids',
      price: 50000,
      imageUrl: 'testImage/testImage3.jpg',
    },
    {
      title: 'ITZY 있지믿지날자 팬미팅 수료증양도(가격인하)',
      name: 'ITZY',
      price: 10000,
      imageUrl: 'testImage/testImage1.jpg',
    },
    {
      title: '삼성 갤럭시Z플립4 방탄 엽서 방탄소년단 한정판 미니 포스터',
      name: 'BTS',
      price: 25000,
      imageUrl: 'testImage/testImage2.jpg',
    },
    {
      title: 'jyp샵 스트레이키즈 미공포 양도 받아요',
      name: 'strayKids',
      price: 50000,
      imageUrl: 'testImage/testImage3.jpg',
    },
  ]

</script>

<div id="wrap">
  <div id="pageHeader">
    
  </div>
  <div id="pageMain">
    <div id="homeLogo">
      <div id="logo1">로고</div>
    </div>
    <div id="goodsListWrap">
      {#each testDatas as testData}
        <SingleGoods goodsData={testData}></SingleGoods>
      {/each}
    </div>
  </div>
</div>

<style>
  #wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  #pageHeader {
    height: 80px;
    width: 100%;
    background-color: #ccffff;
  }
  #pageMain {
    height: 100%;
    background-color: white;
    margin-bottom: 10vh;
  }
  #homeLogo {
    width: 400px;
    display: flex;

  }
  #homeLogo div  {
    height: 100px;
    width: 400px;
  }
  #logo1 {
    background-color: #ddffff;
  }

  #goodsListWrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
  }
</style>