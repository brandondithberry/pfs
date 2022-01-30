<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Work</h1>
      <posts post-type="work" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('work').fetch()
    } catch (e) {
      error({ message: 'Work posts not found' })
    }
    return { posts }
  },
}
</script>
