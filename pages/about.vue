<template>
  <div>
    <section class="intro">
      <div class="left">
        <h1>{{ title }}</h1>
        <h6 class="text-xl">
          {{ intro }}
        </h6>
      </div>
      <div class="right" :style="{ backgroundImage: `url(${cover})` }"></div>
    </section>
    <section class="body">
      <div class="left" :style="{ backgroundImage: `url(${bodyimage})` }"></div>
      <div class="right">
        <p>{{ body }}</p>
      </div>
    </section>
    <section v-if="gallery.length > 0" class="gallery">
      <div v-for="(image, index) in gallery" :key="index">
        <div class="img" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
section {
  @apply flex w-full place-content-center justify-between flex-row bg-primary-800 p-6;
}

.intro {
  .left {
    @apply w-2/3 p-20;
  }

  .right {
    @apply w-1/3;
    background: no-repeat center right;
    background-size: cover;
  }

  h1 {
    @apply pb-4;
  }
}

.body {
  @apply bg-secondary-100;

  .left {
    @apply w-1/3;
    background: no-repeat center right;
    background-size: cover;
  }

  .right {
    @apply w-2/3 p-20 text-dark;
  }
}

.gallery {
  @apply grid grid-cols-2 md:grid-cols-4 gap-6 p-6;

  .img {
    @apply grid w-full h-48;
    background: no-repeat center center;
    background-size: cover;
  }
}

/* Style inputs with type="text", select elements and textareas */
input[type='text'],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type='submit'] {
  @apply text-xl bg-accent py-4 px-6 cursor-pointer text-primary-900;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type='submit']:hover {
  @apply bg-white;
}
</style>

<script>
import * as about from '~/content/about/content.json'

export default {
  data() {
    return {
      title: about.title,
      intro: about.intro,
      cover: about.cover,
      bodyimage: about.bodyimage,
      body: about.body,
      gallery: about.galleryImages,
    }
  },
}
</script>