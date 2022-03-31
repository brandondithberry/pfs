<template>
  <main>
    <section class="hero">
      <div class="text">
        <h1 class="max-w-2xl m-auto border-b-2 border-white pb-6">
          Production Film & TV Sound Mixing, Location Sound Recording, and Gear Rentals
        </h1>
        <h4>Based in Spokane, Washington<br />Available for International Travel</h4>
      </div>
    </section>
    <section class="jokes" id="joke">
      <jokes />
    </section>
    <section class="info">
      <div class="text">
        <p>
          Contract sound mixer for film and TV, based in the Spokane metro area. I provide broadcast-quality sound while
          creating a fun and welcoming work environment.
        </p>
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
      <Carousel
        :navigation="true"
        :pagination="true"
        :autoplay="true"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
      >
        <Slide class="slide" v-for="(wrk, index) in work" :key="index">
          <div class="contain" v-show="currentSlide === index + 1" :style="{ backgroundImage: `url(${wrk.cover})` }">
            <div class="overlay">
              <div class="content">
                <h2 class="text-4xl">{{ wrk.title }}</h2>
                <p class="text-xl">{{ wrk.subtitle }}</p>
                <a :href="`work/${wrk.slug}`" class="btn">View Work</a>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.carousel {
  @apply relative w-full h-[500px] text-center;

  .contain {
    @apply flex w-full h-full place-content-center place-items-center flex-col;
    background-size: cover;
    background: no-repeat center center;

    .overlay {
      @apply flex w-full h-full py-40 px-20 place-content-center place-items-center flex-col;
      background: rgba(0, 0, 0, 0.5);

      .content {
        @apply z-50;

        p {
          @apply max-w-[600px];
        }

        .btn {
          @apply mt-6;
        }
      }
    }
  }
}

.hero {
  background: right center / cover no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
  .text {
    @apply text-white text-center py-40;
    background: linear-gradient(45deg, #000000ff, #00000033);
  }
}

.jokes {
  @apply bg-secondary text-white text-center p-6;
}

.info {
  @apply flex bg-white text-dark place-content-center place-items-stretch text-center py-12 px-6 md:py-20;

  .text {
    @apply max-w-xl bg-white text-xl;
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
import Carousel from '~/components/carousel/Carousel.vue'
import Slide from '~/components/carousel/Slide.vue'

export default {
  transition: 'home',
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
  components: {
    Carousel,
    Slide,
  },
}
</script>