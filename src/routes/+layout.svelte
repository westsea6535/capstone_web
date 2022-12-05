<script>
  import '$lib/style/global.css';
  import { page } from '$app/stores';
  import { limitBeforeUpdate } from '$lib/stores';
  import PageTransitionHorizontal from '$lib/components/pageTransitionHorizontal.svelte';
  import { beforeUpdate, afterUpdate } from 'svelte';
  import { beforePagePath, pagePath } from '$lib/stores.js';


  export let data;
  // console.log(`data: ${data.pathname}`);
  $: currentFirstRoute = $page.url.pathname.split('/')[1];
  // console.log(currentFirstRoute);

  beforeUpdate(() => {
    // console.log('beforeUpdate');
    if ($limitBeforeUpdate) {
      beforePagePath.set($pagePath);
      pagePath.set(data.pathname);
      // console.log(`layoutPagePath: ${$pagePath}`);
    }
    limitBeforeUpdate.set(!$limitBeforeUpdate);
    // console.log(`beforePagePath: ${$beforePagePath}`);
    // console.log(`pagePath: ${$pagePath}`);
  })
  afterUpdate(() => {
    // console.log('afterUpdate');
  })

</script>

<div id="pcWrap"></div>
<div id="mobileWrap">
  <div id="slotWrap">
    <PageTransitionHorizontal pathname={data.pathname}>
      <slot />
    </PageTransitionHorizontal> 
  </div>
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
  @media screen and (max-width: 1023px) {
    #pcWrap {
      display: none;
    }
    #mobileWrap {
      position: static;
      width: 100%;
      height: 100%;
      background-color: white; 
    }
    #slotWrap {
      position: relative;
      overflow: hidden;
    }
  }
</style>