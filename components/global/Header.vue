<template>
  <header>
    <div class="logo">
      <nuxt-link to="/"><img src="img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
    </div>
    <div class="btns">
      <button class="btn">MENU</button>
      <a href="tel:19403674447" class="btn cta">BOOK NOW</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped>
header {
  display: flex;
  place-content: space-between;
  place-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 2px solid #c2d076;
}

.logo img {
  height: 3rem;
}
</style>