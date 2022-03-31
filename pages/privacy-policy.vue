<template>
  <main>
    <h1>Privacy Policy</h1>
    <nuxt-content :document="doc" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let policy
    let doc
    try {
      policy = await $content('policies/privacy-policy').fetch()
      doc = policy.body
    } catch (e) {
      error({ message: 'Policy not found' })
    }
    console.log(doc)
    return { doc }
  },
}
</script>