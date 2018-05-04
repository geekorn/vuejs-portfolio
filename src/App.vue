<template>
  <div id="app">
    <transition name="fade">
      <pre-loader v-if="loader"></pre-loader>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import PreLoader from './components/ThePreloader';

export default {
  name: 'App',

  data() {
    return {
      loader: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 1500);
  },

  components: {
    PreLoader,
  },
};
</script>

<style>
.page {
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* position: relative; */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
