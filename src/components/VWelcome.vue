<template>
  <div class="welcome">
    <div class="welcome__hero">
      <hero-avatar />
    </div>

    <div class="welcome__socials">

    </div>
  </div>
</template>

<script>
import HeroAvatar from './BaseAvatar';

export default {
  name: 'welcome-component',
  components: {
    HeroAvatar,
  },
};
</script>

<style>

</style>
