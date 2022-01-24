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
      <div class="jokes">
        <jokes />
        <p>Refresh the page for a new joke.</p>
      </div>
    </section>
  </main>
</template>

<style  lang="postcss" scoped>
.hero {
  display: flex;
  width: 100%;
  background: 0% 30% / 120% no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
}

.hero .text {
  @apply text-white py-40 px-20;
}

.info {
  @apply flex bg-white text-dark place-content-center place-items-stretch;
}

.info div {
  @apply p-20;
}

.info hr {
  @apply my-7;
}

.info .jokes {
  @apply bg-secondary text-white;
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
}
</script>