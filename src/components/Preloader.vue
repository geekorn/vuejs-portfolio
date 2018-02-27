<template>
  <div class="preloader">
    <div class="preloader__content">
      <div class="preloader__animation"></div>
      <div class="preloader__percent">0%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
};
</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-image: url('../assets/images/decor/preloader_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 125px;
    height: 125px;
  }

  &__percent {
    font-size: 20px;
    color: #ffffff;
  }

  &__animation {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    animation-duration: 1.5s;

    &, &:before, &:after {
      content: '';
      position: absolute;
      display: block;

      border: 3px solid transparent;
      border-top-color: #fff;
      border-radius: 50%;

      animation-name: rotate;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    &:before {
      top: 5px;
      right: 5px;
      bottom: 5px;
      left: 5px;
      animation-duration: 1s;
    }
    &:after {
      top: 13px;
      right: 13px;
      bottom: 13px;
      left: 13px;
      animation-duration: 2s;
    }

  }
}

@keyframes rotate {
  0% {transform: rotate(0)}
  100% {transform: rotate(1turn)}
}
</style>
