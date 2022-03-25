<template>
  <main>
    <section class="intro">
      <div class="overlay">
        <div class="content">
          <h1>Sound Mixing & Recording Kit Rentals</h1>
          <h3>Same-day delivery and pickup offered, 3-day weeks</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.intro {
  @apply flex flex-col w-full place-content-center place-items-center;
  background: url('~/static/img/boom-mic.jpg') no-repeat center center;
  background-size: cover;

  .content {
    @apply p-28;
  }
}
</style>

<script>
export default {}
</script>