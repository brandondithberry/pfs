<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" class="slide" />

    <div v-if="navigationEnabled === true" class="navigate">
      <a class="toggle-page left" @click="prevSlide"> ❮</a>
      <a class="toggle-page right" @click="nextSlide">❯</a>
    </div>

    <div v-if="paginationEnabled === true" class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['autoplay', 'timeout', 'navigation', 'pagination'],
  data(props) {
    return {
      currentSlide: 1,
      getSlideCount: 0,
      navigationEnabled: props.navigation === undefined ? true : props.navigation,
      paginationEnabled: props.pagination === undefined ? true : props.pagination,
      autoPlayEnabled: props.autoplay === undefined ? true : props.autoplay,
      timeoutDuration: props.timeout === undefined ? 5000 : props.timeout,
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.getSlideCount) {
        this.currentSlide = 1
        return
      }
      this.currentSlide += 1
    },
    prevSlide() {
      if (this.currentSlide === 1) {
        this.currentSlide = 1
        return
      }
      this.currentSlide -= 1
    },
    goToSlide(index) {
      this.currentSlide = index + 1
    },
  },
  mounted() {
    if (this.autoPlayEnabled === true) {
      setInterval(() => {
        this.nextSlide()
      }, this.timeoutDuration)
    }
    this.getSlideCount = document.querySelectorAll('.slide').length
  },
}
</script>

<style lang="postcss" scoped>
.slide {
  @apply absolute w-full h-full top-0 left-0;
}

.navigate {
  @apply absolute flex w-full h-full justify-between items-center;

  .toggle-page {
    @apply p-4 pt-5 bg-primary-900 text-2xl font-bold m-0 leading-none cursor-pointer shadow-lg;
  }
}

.pagination {
  @apply absolute flex w-full bottom-6 justify-center items-center gap-6;

  span {
    @apply block w-4 h-4 cursor-pointer bg-white opacity-30 shadow-lg;
  }

  .active {
    @apply opacity-100;
  }
}
</style>