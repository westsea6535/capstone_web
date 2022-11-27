<script>
  import { cubicOut, linear } from 'svelte/easing';
  import { beforePagePath, pagePath } from '$lib/stores.js';
  import { onMount } from 'svelte';
	export let pathname = '';
  const time = 400;
	const inTransition = (node, { 
    delay = 0,
    duration = time,
    easing = cubicOut,
    axis = 'y' }) => {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const primary_dimension = axis === 'y' ? 'height' : 'width';
    // console.log('inTransition');
    // console.log($beforePagePath);
    // console.log($pagePath);
    if (['', 'chat', 'like', 'myPage'].includes($beforePagePath.split('/')[1]) && ['', 'chat', 'like', 'myPage'].includes($pagePath.split('/')[1])) {
      return;
    }
    if ($beforePagePath.length < $pagePath.length) {
      return { 
        delay,
        duration,
        easing,
        css: t => `
          opacity: ${Math.min(t * 20, 1) * opacity};
          position: absolute;
          right: -${100 - t * 100}vw;
          top: 0;
          z-index: 1;
        `
      };
    } else {
      return { 
        duration: time,
        css: t => `
          z-index: 0;
        `
      };
    }
	}
	const outTransition = (node, { 
    delay = 0,
    duration = time,
    easing = cubicOut,
    axis = 'x' }) => {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const primary_dimension = axis === 'y' ? 'height' : 'width';
    // console.log('outTransition');
    // console.log($beforePagePath);
    // console.log($pagePath);
    if (['', 'chat', 'like', 'myPage'].includes($beforePagePath.split('/')[1]) && ['', 'chat', 'like', 'myPage'].includes($pagePath.split('/')[1])) {
      return;
    }
    if ($beforePagePath.length < $pagePath.length) {
      return { 
        duration: time,
        css: t => `
          z-index: 0;
        `
      };
    } else {
      return { 
        delay,
        duration,
        easing,
        css: t => `
          opacity: ${Math.min(t * 20, 1) * opacity};
          position: absolute;
          right: -${100 - t * 100}vw;
          top: 0;
          z-index: 1;
        `
      };
    }
	}
</script>

{#key pathname}
  <div in:inTransition={{ axis: 'x' }} out:outTransition>
    <slot />
  </div>
{/key}


<style>
  div {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
</style>