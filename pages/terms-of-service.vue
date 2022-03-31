<template>
  <main>
    <section>
      <h1>Terms of Service</h1>
      <div>
        <nuxt-content :document="policy" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const policy = await $content('policies/terms-of-service').only('content').fetch()

    console.log(policy)
    return {
      policy,
    }
  },
}
</script>