<template>
  <main>
    <section class="hero">
      <div class="text">
        <h1>Professional Film & TV<br />Mixing + Gear Rentals</h1>
        <h4>Based in Spokane, Washington</h4>
      </div>
      <div class="image"></div>
    </section>
    <section class="info">
      <div class="text">
        <h3>
          Contract sound mixer for film and TV, based in the Spokane metro area. I try to create a fun and welcoming
          work environment while providing broadcast-quality sound.
        </h3>
      </div>
    </section>
  </main>
</template>

<style  lang="postcss" scoped>
.hero {
  display: flex;
  width: 100%;
}

.hero .text {
  width: 40%;
  padding: 15% 40px 15% 0;
  color: white;
}

.hero .image {
  width: 60%;
  padding: 15% 0 15% 0;
  background: 0% 30% / 120% no-repeat
    url('https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100');
}

.info {
  @apply bg-primary-700 text-white p-20;
}

.info .text {
  float: right;
  max-width: 540px;
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