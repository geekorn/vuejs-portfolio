<template>
  <div class="welcome-page">
    <!-- paralax -->
    <custom-button class="welcome-page__button">
      {{ flag ? "Вернуться" : "авторизоваться" }}
    </custom-button>
    <div class="flip-container">
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/Custom-Button';

export default {
  name: 'Welcome-Page',

  components: {
    CustomButton,
  },

  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome-page{
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/decor/header_bg.jpg');

  &__button {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}

.flip-container {
  width: 375px;
  min-height: 360px;

  border-radius: 15px;
  background-color: rgba(#ffffff, 0.7);
}
</style>
