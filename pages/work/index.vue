<template>
  <section v-if="posts.length > 0" class="cards">
    <div v-for="(post, index) in posts" :key="index" class="container">
      <nuxt-link :to="`${postType}/${post.slug}`" class="card card--clickable">
        <div class="banner" :style="{ backgroundImage: `url(${post.cover})` }">
          <div class="overlay">
            <div class="content">
              <h2>{{ post.title }}</h2>
              <h4 class="text-xl">{{ post.subtitle }}</h4>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'work',
      validator: (val) => ['work', 'jokes'].includes(val),
    },
    amount: {
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    this.posts = await this.fetchPosts()
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>