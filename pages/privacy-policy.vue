<template>
  <main class="bg-secondary-100 text-dark p-10">
    <h1>Privacy Policy</h1>
    <nuxt-content :document="policy" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let policy
    try {
      policy = await $content('policies/privacy-policy', params.slug).fetch()
    } catch (e) {
      error({ message: 'Policy not found' })
    }
    return { policy }
  },
}
</script>