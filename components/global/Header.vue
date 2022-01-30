<template>
  <header>
    <section class="head">
      <div class="logo">
        <nuxt-link to="/"><img src="img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
      </div>
      <div class="menu">
        <nav>
          <ul>
            <li><a href="/work">Work</a></li>
            <li><a href="/mixing">Mixing</a></li>
            <li><a href="/rentals">Rentals</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="btns">
        <button class="btn alt lg:hidden">MENU</button>
        <a href="tel:19403674447" class="btn">BOOK NOW</a>
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
  @apply w-full h-10 pr-5 md:h-12;
}

.menu {
  @apply flex hidden lg:flex;
}

.menu ul {
  @apply flex gap-14 text-white text-lg font-semibold uppercase tracking-widest;
}

.announcement {
  @apply bg-secondary-700 text-white p-4 text-center uppercase tracking-widest font-bold;
}
</style>