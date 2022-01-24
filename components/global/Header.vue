<template>
  <header>
    <section class="head">
      <div class="logo">
        <nuxt-link to="/"><img src="img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
      </div>
      <div class="btns">
        <button class="btn">MENU</button>
        <a href="tel:19403674447" class="btn cta">BOOK NOW</a>
      </div>
    </section>
    <section class="announcement"><span>Call or text for booking | 940-367-4447</span></section>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped>
header {
  width: 100%;
}
.head {
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

.announcement {
  @apply bg-secondary-700 text-white p-5 text-center uppercase tracking-widest font-bold;
}
</style>