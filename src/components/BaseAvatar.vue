<template>
  <div class="hero-avatar">
    <img src="@/assets/images/userfiles/avatar.jpg" alt="avatar" class="hero-avatar__pic">
  </div>
</template>

<script>
export default {
  name: 'hero-avatar',
};
</script>

<style lang='scss' scoped>
  .hero-avatar {
    width: 8.75rem;
    height: 8.75rem;
    margin: 0 auto;
    margin-bottom: 1.25rem;
    border-radius: 50%;
    overflow: hidden;

    &__pic {
      max-width: 100%;
    }
  }
</style>
