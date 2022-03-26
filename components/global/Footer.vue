<template>
  <footer>
    <div class="connect">
      <nuxt-link to="/"><img class="logo" src="~/static/img/logo.png" alt="Pro Film Sound Logo" /></nuxt-link>
      <p>
        Call or text for questions.<br />
        <a href="tel:19403674447">940-367-4447</a>
      </p>
      <p class="text-xs">Copyright © 2022 Adam Terrell</p>
    </div>
    <div class="menu">
      <h5>Navigate</h5>
      <nav>
        <ul>
          <li><nuxt-link to="/work">Work</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
    <div class="policies">
      <h5>Policies</h5>
      <nav>
        <ul>
          <li><a href="/">Work Agreement</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
        </ul>
      </nav>
    </div>
    <div class="connect">
      <h5>Connect</h5>
      <nav>
        <ul>
          <li><a href="https://instagram.com/adamcterrell">Instagram</a></li>
          <li><a href="https://www.youtube.com/user/atomterrible">YouTube</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply flex w-full m-auto place-content-center place-items-center flex-col p-6 md:flex-row max-w-[1100px] justify-items-stretch justify-between items-start content-between;

  div {
    @apply p-4;
  }

  .logo {
    @apply max-w-[140px] pb-6;
  }

  .menu {
    nav {
      @apply flex w-full place-content-stretch place-items-stretch gap-10;
    }
  }

  #copyright {
    @apply text-center;
  }

  li {
    @apply leading-10;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>