<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Custom-Button',
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 10px 30px;

  border: 1px solid #fff;
  border-radius: 5px;

  background-color: transparent;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;

  transition: .3s;

  &:hover {
    background-color: #fff;
    color: #00bfa5;
  }
}
</style>
