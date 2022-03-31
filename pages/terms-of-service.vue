<template>
  <main>
    <section>
      <h1>Terms of Service</h1>
      <div>
        <nuxt-content :document="content" />
      </div>
    </section>
  </main>
</template>

<script>
import * as terms from '~/content/policies/terms-of-service.json'

export default {
  data() {
    return {
      content: terms.content,
    }
  },
}
</script>