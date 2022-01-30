<template>
  <div class="posts">
    <div class="post" v-for="post in posts" :key="post.slug">
      <h2>{{ post.title }}</h2>
    </div>
  </div>
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
    }
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
