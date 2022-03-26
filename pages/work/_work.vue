<template>
  <div class="flex w-full">
    <main class="w-3/4 bg-primary-700">
      <article v-if="post" class="w-full py-10">
        <h1 class="">{{ post.title }}</h1>
        <h6>
          {{ post.subtitle }} • <span v-if="post.createdAt">{{ formatDate(post.createdAt) }}</span>
        </h6>
        <p class="mt-1 mb-4">
          {{ post.description }}
        </p>
        <nuxt-content :document="post" />
      </article>
    </main>
    <aside class="w-1/4 bg-primary-800">
      <nav class="m-4" aria-label="go back">
        <router-back class="block" />
      </nav>
    </aside>
  </div>
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