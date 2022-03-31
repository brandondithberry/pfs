<template>
  <header>
    <div class="mobile-menu" v-if="!isHidden">
      <button class="close" v-on:click="isHidden = true">✕</button>
      <nav>
        <ul v-on:click="isHidden = !isHidden">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="work">Work</nuxt-link></li>
          <li><nuxt-link to="services">Services</nuxt-link></li>
          <li><nuxt-link to="about">About</nuxt-link></li>
          <li><nuxt-link to="contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
    <section class="head">
      <div class="logo">
        <nuxt-link to="/"><img src="img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
      </div>
      <div class="menu">
        <nav>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="work">Work</nuxt-link></li>
            <li><nuxt-link to="services">Services</nuxt-link></li>
            <li><nuxt-link to="about">About</nuxt-link></li>
            <li><nuxt-link to="contact">Contact</nuxt-link></li>
          </ul>
        </nav>
        <button class="btn alt lg:hidden" v-on:click="isHidden = !isHidden">MENU</button>
      </div>
    </section>
    <section class="announcement"><span>For Booking Call or Text (940) 367-4447</span></section>
  </header>
</template>

<style lang="postcss" scoped>
.mobile-menu {
  @apply fixed flex w-screen h-screen place-content-center place-items-center bg-dark text-center z-50 left-0 top-0 overflow-hidden;

  .close {
    @apply absolute block right-5 top-0 text-white p-4 text-2xl font-bold bg-primary leading-none;
  }

  ul {
    @apply flex flex-col;

    li {
      @apply text-4xl leading-loose;
    }
  }
}

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

  data() {
    return {
      isHidden: true,
    }
  },
}
</script>