<template>
  <main class="flex gap-4 py-4">
    <h1 class="hidden">Production Sound Mixing & Location Sound Recording with Sound Mixing & Recording Kit Rentals</h1>
    <section class="mixing">
      <div class="intro" :style="{ backgroundImage: `url('${mixing.cover}')` }">
        <div class="overlay">
          <div class="content">
            <h2>{{ mixing.title }}</h2>
            <h4>{{ mixing.subtitle }}</h4>
          </div>
        </div>
      </div>
      <div class="types">
        <div v-for="(type, index) in mixing.types" :key="index">
          <h3>{{ type.type }}</h3>
          <h6>{{ type.pricing }}</h6>
        </div>
      </div>
    </section>
    <section class="intro" :style="{ backgroundImage: `url('${rentals.cover}')` }">
      <div class="overlay">
        <div class="content">
          <h2>{{ rentals.title }}</h2>
          <h4>{{ rentals.subtitle }}</h4>
        </div>
      </div>
    </section>
    <section class="equipment">
      <div v-for="(cat, index) in rentals.categories" :key="index">
        <h4>{{ cat.name }}</h4>
        <ul v-for="(item, index) in cat.items" :key="index">
          <li>
            {{ item.name }} | <b>{{ item.price }}</b>
          </li>
        </ul>
      </div>
    </section>
    <section class="misc">
      <div>
        <h4>Miscellaneous</h4>
        <ul>
          <li>
            Earbuds, connectors, adapters, cables, USB battery banks, microphone mounting doodads, sticky things, SD
            cards, batteries, antennas, magnets, backup recorders, and on it goes...
          </li>
        </ul>
      </div>
    </section>
    <section class="cta">
      <div class="content">
        <h2>Call or Text for questions <a class="underline" href="tel:+19403674447">(940) 367-4447</a></h2>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.mixing {
  @apply flex w-full place-content-stretch place-items-stretch flex-col gap-4 lg:flex-row;

  .types {
    @apply flex w-full place-content-stretch place-items-stretch flex-col gap-4;

    div {
      @apply flex-auto p-6 bg-primary-700 md:p-14;
    }
  }
}

.intro {
  @apply flex flex-col w-full place-content-center place-items-center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    @apply p-20;
  }
}

.equipment {
  @apply grid grid-cols-1 gap-4 md:grid-cols-3;

  div {
    @apply p-10 bg-secondary-700;

    li {
      @apply leading-relaxed;
    }
  }
}

.misc {
  @apply text-dark;

  div {
    @apply p-10 bg-secondary-100;

    li {
      @apply leading-relaxed;
    }
  }
}

.cta {
  @apply flex place-content-center place-items-center bg-primary-600 p-20;
}
</style>

<script>
import * as services from '~/content/services/content.json'

export default {
  data() {
    return {
      services: services,
      mixing: {
        title: services.mixing.title,
        subtitle: services.mixing.subtitle,
        cover: services.mixing.cover,
        types: services.mixing.types,
      },
      rentals: {
        title: services.rentals.title,
        subtitle: services.rentals.subtitle,
        cover: services.rentals.cover,
        categories: services.rentals.categories,
      },
    }
  },
}
</script>