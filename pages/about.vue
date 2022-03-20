<template>
  <section>
    <h1>{{ about.content.title }}</h1>
    <p>{{ about.content.intro }}</p>
  </section>
</template>

<style lang="postcss" scoped>
</style>

<script>
export default {
  async asyncData({ $content, error }) {
    let about
    try {
      about = await $content('about').fetch()
    } catch (e) {
      error({ message: 'About not found' })
    }
    return { about }
  },
}
</script>