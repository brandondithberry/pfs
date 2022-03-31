<template>
  <section>
    <h1>Privacy Policy</h1>
    <nuxt-content :document="policy.content"></nuxt-content>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const policy = await $content('policies/privacy-policy').fetch()

    return {
      policy,
    }
  },
}
</script>