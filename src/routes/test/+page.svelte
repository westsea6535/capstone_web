<script>
  import { testNum } from "$lib/stores";
</script>

<div id="testNum">{$testNum}</div>
<button
  on:click={() => {
    testNum.set($testNum + 1);
    console.log(sessionStorage);
  }}>바꾸기</button>