<template>
  <div class="whiteframe">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'base-whiteframe',
};
</script>

<style scoped lang='scss'>
  .whiteframe {
    border-radius: 15px;
    background-color: rgba(#ffffff, 0.7);
  }
</style>
