<template>
  <main>
    <section class="hero">
      <div class="text">
        <h1>Professional Film & TV<br />Mixing + Gear Rentals</h1>
        <h4>Based in Spokane, Washington</h4>
      </div>
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
      <div class="jokes" id="joke">
        <h4>A Joke A Day...</h4>
        <jokes />
        <p><a href="javascript:location.reload();">Refresh</a> the page for a new joke.</p>
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
        <div class="slide" v-for="wrk in work" :key="wrk" :style="{ 'background-image': 'url(' + wrk.cover + ')' }">
          <div class="content">
            <h2>{{ wrk.title }}</h2>
            <p>{{ wrk.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style  lang="postcss" scoped>
.hero {
  background: 0% 30% / 120% no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
}

.hero .text {
  @apply text-white py-40 px-14;
  background: linear-gradient(45deg, #000000dd, #00000000);
}

.info {
  @apply flex text-dark place-content-center place-items-stretch;
}

.info div {
  @apply p-14;
}

.info .text {
  @apply w-2/3 bg-white;
}

.info hr {
  @apply my-7 border-accent border-t-2;
}

.info .jokes {
  @apply w-1/3 bg-secondary text-white;
}

.info .jokes a {
  @apply underline;
}

.info .logo-grid {
  @apply grid grid-cols-3 p-0;
}

.info .logo-grid div {
  @apply grid p-0;
}

.info .logo-grid img {
  width: 100%;
  height: auto;
}

.services {
  @apply grid grid-cols-2 text-center place-content-stretch place-items-stretch;
}

.services div {
  @apply grid p-20 bg-primary-600 place-content-center place-items-center;
}

.services p {
  @apply text-lg my-5 mx-auto;
  max-width: 350px;
}

.services .rentals {
  @apply bg-primary-700;
}

.slide {
  @apply flex w-full bg-cover bg-center text-center;
}

.slide .content {
  @apply w-full py-40 px-14 backdrop-brightness-50;
}

@media all and (max-width: 900px) {
  .hero {
    flex-basis: 100%;
    flex-direction: column;
  }

  .hero .text {
    width: 100%;
  }

  .hero .image {
    width: 100%;
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
}
</script>