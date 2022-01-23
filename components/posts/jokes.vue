<template>
  <h5 class="joke">{{ selectedJoke }}</h5>
</template>

<style>
.joke {
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  name: 'Jokes',
  props: {
    jokeType: {
      type: String,
      default: 'jokes',
      validator: (val) => ['jokes'].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 1,
      validator: (val) => val >= 0 && val < 10,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'asc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      jokes: [],
      loading: true,
      selectedJoke: '',
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  created() {
    const jk = Math.floor(Math.random() * this.jokes.length)
    this.selectedJoke = this.jokes[jk]
  },
  async mounted() {
    this.loading = true
    this.jokes = await this.fetchjokes()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchjokes(jokeType = this.jokeType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(jokeType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
