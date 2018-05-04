<template>
  <div class="welcome-page">
    <!-- paralax -->
    <custom-button class="welcome-page__button">
      {{ flag ? "Вернуться" : "авторизоваться" }}
    </custom-button>
    <white-frame class="flip-container">
      <v-welcome></v-welcome>
    </white-frame>
  </div>
</template>

<script>
import WhiteFrame from '@/components/BaseWhiteFrame';
import CustomButton from '@/components/BaseButton';
import VWelcome from '@/components/VWelcome';

export default {
  name: 'Welcome-Page',

  components: {
    CustomButton,
    WhiteFrame,
    VWelcome,
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
}
</style>
