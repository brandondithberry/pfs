<template>
  <main>
    <section v-if="post">
      <nav class="m-4" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article class="p-4">
        <h1 class="">{{ post.title }}</h1>
        <h4 class="text-xl">{{ post.subtitle }}</h4>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <nuxt-content :document="post" />
        <h5 v-if="post.createdAt" class="text-right">
          {{ formatDate(post.createdAt) }}
        </h5>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('work', params.work).fetch()
    } catch (e) {
      error({ message: 'Work post not found' })
    }
    return { post }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>