<template>
  <main class="bg-secondary-100 text-dark p-10">
    <h1>Terms of Service</h1>
    <nuxt-content :document="policy" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let policy
    try {
      policy = await $content('policies/terms-of-service').fetch()
    } catch (e) {
      error({ message: 'Policy not found' })
    }
    return { policy }
  },
}
</script>