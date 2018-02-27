<template>
  <div id="app">
    <transition name="fade">
      <Preloader v-if="loader"></Preloader>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Preloader from './components/Preloader';

export default {
  name: 'App',

  data() {
    return {
      loader: true,
    };
  },

  mounted() {
    // setTimeout(() => {
    //   this.loader = false;
    // }, 500);
  },

  components: {
    Preloader,
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
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
