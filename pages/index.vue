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
  @apply w-full;
  background: 0% 30% / 120% no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
}

.hero .text {
  @apply w-full text-white py-40 px-14;
  background: linear-gradient(45deg, #000000DD, #00000000);
}

.info {
  @apply flex text-dark w-full place-content-center place-items-stretch;
}

.info div {
  @apply p-14;
}

.info .text {
  @apply w-2/3 bg-white;
}

.info .text h3 {
  @apply text-lg;
}

.info hr {
  @apply my-7 border-accent border-t-2;
}

.info .jokes {
  @apply w-1/3 bg-secondary text-white;
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