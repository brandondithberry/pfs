<template>
  <main>
    <h1>Privacy Policy</h1>
    <nuxt-content :document="policy" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let policy
    let doc
    try {
      doc = await $content('policies/terms-of-service').fetch()
      policy = doc.body
    } catch (e) {
      error({ message: 'Policy not found' })
    }
    console.log(policy)
    return { policy }
  },
}
</script>