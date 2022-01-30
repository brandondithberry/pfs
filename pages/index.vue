<template>
  <main>
    <section class="hero">
      <div class="text">
        <h1>Professional Film & TV<br />Mixing + Gear Rentals</h1>
        <h4>Based in Spokane, Washington</h4>
      </div>
    </section>
    <section class="jokes" id="joke">
      <jokes />
    </section>
    <section class="info">
      <div class="text">
        <h3>
          Contract sound mixer for film and TV, based in the Spokane metro area. I try to create a fun and welcoming
          work environment while providing broadcast-quality sound.
        </h3>
        <hr />
        <div class="logo-grid">
          <div><img src="img/Paramount.jpg" alt="Paramount" /></div>
          <div><img src="img/Langley.jpg" alt="Paramount" /></div>
          <div><img src="img/Affirm.jpg" alt="Paramount" /></div>
          <div><img src="img/Advent.jpg" alt="Paramount" /></div>
          <div><img src="img/Bridgestone.jpg" alt="Paramount" /></div>
          <div><img src="img/UNI.jpg" alt="Paramount" /></div>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="mixing">
        <h2>Audio Mixing</h2>
        <p>Experienced, high quality mixing services starting at $800 per day.</p>
        <nuxt-link class="btn" to="mixing">View Pricing</nuxt-link>
      </div>
      <div class="rentals">
        <h2>Gear Rentals</h2>
        <p>Professional film quality equipment packages starting at $250/day.</p>
        <nuxt-link class="btn" to="rentals">View Gear</nuxt-link>
      </div>
    </section>
    <section class="featured">
      <div class="slider">
        <div
          class="slide"
          v-for="wrk in work"
          :key="wrk.slug"
          :amount="3"
          :style="{ 'background-image': 'url(' + wrk.cover + ')' }"
        >
          <div class="content">
            <h2>{{ wrk.title }}</h2>
            <p>{{ wrk.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.hero {
  background: right center / cover no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
  .text {
    @apply text-white text-center py-40;
    background: linear-gradient(45deg, #000000dd, #00000000);
  }
}

.jokes {
  @apply bg-secondary text-white text-center p-6;
}

.info {
  @apply flex bg-white text-dark place-content-center place-items-stretch text-center py-12 px-6 md:py-20;
  .text {
    @apply max-w-xl bg-white;
  }
  hr {
    @apply my-7 border-accent border-t-2;
  }
  .logo-grid {
    @apply grid grid-cols-2 p-0 md:grid-cols-3;
    div {
      @apply grid p-0;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}

.services {
  @apply grid text-center place-content-stretch place-items-stretch md:grid-cols-2;
  div {
    @apply grid bg-primary-600 place-content-center place-items-center py-14 px-6 md:py-20;
  }
  p {
    @apply text-lg my-5 mx-auto;
    max-width: 350px;
  }
  .rentals {
    @apply bg-primary-700;
  }
}

.slider {
  @apply flex w-full overflow-x-auto snap-x snap-mandatory place-items-stretch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  div {
    @apply w-full h-full shrink-0 bg-cover bg-center text-center scroll-smooth;
  }
  .arrows {
    .arrow {
      @apply bg-primary-700 w-16 h-16 items-center justify-center text-white cursor-pointer z-50;
      .previous {
        @apply left-0;
      }
      .next {
        @apply right-0;
      }
    }
  }
  .slide {
    .content {
      @apply py-40 px-14 backdrop-brightness-50;
    }
  }
  .slide > div {
    @apply snap-start;
  }
}
::-webkit-scrollbar {
  @apply bg-secondary-700;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary-400;
}

@media all and (max-width: 900px) {
  .hero {
    flex-basis: 100%;
    flex-direction: column;
    .text {
      width: 100%;
    }
    .image {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  async asyncData({ $content, error }) {
    let jokes
    try {
      jokes = await $content('jokes').fetch()
    } catch (e) {
      error({ message: 'Jokes not found' })
    }
    return { jokes }
  },
  async asyncData({ $content, error }) {
    let work
    try {
      work = await $content('work').fetch()
    } catch (e) {
      error({ message: 'Work not found' })
    }
    return { work }
  },
  computed: {
    setTimeout: function () {
      let activeSlide = document.querySelector('.slide.translate-x-0')
      activeSlide.classList.remove('translate-x-0')
      activeSlide.classList.add('-translate-x-full')

      let nextSlide = activeSlide.nextElementSibling
      nextSlide.classList.remove('translate-x-full')
      nextSlide.classList.add('translate-x-0')
    },
  },
}
</script>
