<template>
  <h5>{{ selectedWork.title }}</h5>
</template>

<style>
.post {
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  name: 'Work',
  props: {
    postType: {
      type: String,
      default: 'work',
      validator: (val) => ['work'].includes(val),
    },
  },
  data() {
    return {
      posts: [],
      selectedWork: '',
    }
  },
  async created() {
    this.posts = await this.fetchPosts()
    const ln = Math.floor(Math.random() * this.posts.length)
    this.selectedWork = this.posts[ln]
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
