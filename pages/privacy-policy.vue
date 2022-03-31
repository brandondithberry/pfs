<template>
  <main>
    <section>
      <h1>Privacy Policy</h1>
      <div>
        <nuxt-content :document="policy" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const doc = await $content('policies/privacy-policy', params.content).fetch()
    const policy = doc.content

    console.log(policy)
    return {
      policy,
    }
  },
}
</script>