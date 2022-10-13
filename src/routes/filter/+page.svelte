<script>
  const idolAllInfo = [
    {
      name: 'BTS',
      member: ['RM', 'Jin', 'Suga',],
      types: ['album1', 'album2', 'album3',],
    },
    {
      name: 'ITZY',
      member: ['LIA', 'Yeji', 'Yuna',],
      types: ['album1', 'album2', 'album3',],
    },
    {
      name: 'StrayKids',
      member: ['Mem1', 'Mem2', 'Mem3',],
      types: ['album1', 'album2', 'album3',],
    }
  ]
</script>

<div id="wrap">
  <div id="title">
    필터로 검색하기
  </div>
  <div id="filterIdol">
    {#each idolAllInfo as idolInfo}
      <a href={`filter/${idolInfo.name}`}>
        <div class="idolImg"></div>
      </a>
    {/each}
  </div>
</div>

<style>
  #filterIdol {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  .idolImg {
  }
</style>