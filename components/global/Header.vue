<template>
  <header>
    <section class="head">
      <div class="logo">
        <nuxt-link to="/"><img src="~/static/img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
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
        <button class="btn alt lg:hidden">MENU</button>
      </div>
    </section>
    <section class="announcement"><span>For Booking Call or Text (940) 367-4447</span></section>
  </header>
</template>

<style lang="postcss" scoped>
header {
  width: 100%;
}
.head {
  @apply flex w-full place-content-between place-items-center p-6;
}

.logo img {
  @apply w-full h-10 pr-5 md:h-12;
}

.menu {
  @apply flex;

  nav {
    @apply hidden lg:flex;

    ul {
      @apply flex gap-14 text-white text-lg font-semibold uppercase tracking-widest;

      a:hover {
        @apply text-accent;
      }
    }
  }
}

.announcement {
  @apply text-base bg-secondary-800 text-white p-4 text-center uppercase tracking-widest font-bold;
}
</style>

<script>
export default {
  name: 'Header',
}
</script>