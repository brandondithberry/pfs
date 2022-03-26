<template>
  <main class="flex gap-4 py-4">
    <h1 class="hidden">
      Production Sound Mixing & Location Sound Recording with Sound Mixing & Recording Kit Rentals
    </h1>
    <section class="mixing">
      <div class="intro" :style="{ backgroundImage: `url('img/272701578_758037662254380_7792244682493182394_n.jpg')` }">
        <div class="overlay">
          <div class="content">
            <h2>Production Sound Mixing & Location Sound Recording</h2>
            <h4>Starting at $800/day + Kit Fees</h4>
          </div>
        </div>
      </div>
      <div class="type">
        <div>
          <h3>Scripted & Unscripted TV</h3>
          <h6>Starting at $800/day</h6>
        </div>
        <div>
          <h3>Narrative Film</h3>
          <h6>Starting at $800/day</h6>
        </div>
        <div>
          <h3>International Travel</h3>
          <h6>Starting at $1,200/day</h6>
        </div>
      </div>
    </section>
    <section class="intro" :style="{ backgroundImage: `url('img/boom-mic.jpg')` }">
      <div class="overlay">
        <div class="content">
          <h2>Sound Mixing & Recording Kit Rentals</h2>
          <h4>Same-day delivery and pickup offered, 3-day weeks</h4>
        </div>
      </div>
    </section>
    <section class="equipment">
      <div>
        <h4>Timecode</h4>
        <ul>
          <li>3x Tentacle Sync-E boxes ($35/day)</li>
          <li>3x Tentacle to TRS 3.5mm (included)</li>
          <li>2x Tentacle to BNC ($3/day)</li>
          <li>2x Tentacle to 4-pin mini Lemo (for RED camera) ($7/day)</li>
          <li>1x Tentacle to 5-pin LEMO ($7/day)</li>
        </ul>
      </div>
      <div>
        <h4>Wireless & IFB</h4>
        <ul>
          <li>7x Sennheiser evolution wireless channels (2xG2, 4xG3, 1xG4) ($45/day)</li>
          <li>1x Sennheiser G4 SKP 100 transmitter ($30/day)</li>
          <li>2x URSA LG waist strap ($1/day)</li>
          <li>2x URSA thigh strap ($1/day)</li>
          <li>2x URSA calf strap ($1/day)</li>
        </ul>
      </div>
      <div>
        <h4>Boom Pole</h4>
        <ul>
          <li>1x K-tek Klassic K230CCR 19'4" ($65/day)</li>
          <li>1x K-tek KE-89CC 7'6" ($25/day)</li>
          <li>2x Rycote shock mounts ($5/day)</li>
        </ul>
      </div>
      <div>
        <h4>Microphone</h4>
        <ul>
          <li>5x Deity W.lav Pro (w/ Sennheiser microdots) ($15/day)</li>
          <li>1x RØDE NT5 ($35/day)</li>
          <li>1x MJE-384K Oktavamod capsule for NT5 ($25/day)</li>
          <li>1x RØDE NT1000 large diaphragm ($40/day)</li>
          <li>1x Electro-Voice RE50B (standard newscaster handheld) ($25/day)</li>
        </ul>
      </div>
      <div>
        <h4>Weather Gear</h4>
        <ul>
          <li>1x Remote Audio RAINMAN blimp cover ($30/day)</li>
          <li>1x RØDE blimp (older style) ($20/day)</li>
        </ul>
      </div>
      <div>
        <h4>Headphones</h4>
        <ul>
          <li>1x Sony MDR-7506 monitor ($10/day)</li>
          <li>1x Halter Technical Elite monitor ($7/day)</li>
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

  .type {
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
export default {}
</script>