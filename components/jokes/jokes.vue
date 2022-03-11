<template>
  <p>{{ selectedJoke.joke }} <a href="javascript:location.reload();">(Get a New Joke)</a></p>
</template>

<style lang="postcss" scoped>
a {
  @apply underline;
}
</style>

<script>
export default {
  name: 'Jokes',
  props: {
    postType: {
      type: String,
      default: 'jokes',
      validator: (val) => ['jokes'].includes(val),
    },
  },
  data() {
    return {
      posts: [],
      selectedJoke: '',
    }
  },
  async created() {
    this.posts = await this.fetchPosts()
    const ln = Math.floor(Math.random() * this.posts.length)
    this.selectedJoke = this.posts[ln]
  },
  methods: {
    async fetchPosts(postType = this.postType) {
      return this.$content(postType)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
