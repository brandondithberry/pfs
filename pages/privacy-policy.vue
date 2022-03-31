<template>
  <section>
    <h1>Privacy Policy</h1>
    <nuxt-content :document="policy" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      policy: [],
    }
  },
  async fetch({ $content, params }) {
    const policy = await $content('policies/privacy-policy', params.content).fetch()

    return {
      policy,
    }
  },
}
</script>