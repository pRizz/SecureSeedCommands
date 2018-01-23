<template>
  <div class="">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div style="">

            <img style="height: 150px" :src="currentSeedCommandToken.cryptocurrencyType.image"/>
            <h1 class="title">
              Secure Seed Commands for {{currentSeedCommandToken.cryptocurrencyType.displayName}}
            </h1>
            <br/>
            <h2 class="subtitle" v-html="currentSeedCommandToken.cryptocurrencyType.validSeedHint">
            </h2>
            <h2 class="subtitle">
              All the commands below utilize the proper cryptographically secure random number generators for each platform
            </h2>

          </div>
        </div>
      </div>
    </section>


    <div v-for="(seedCommandListItem, index) in currentSeedCommandToken.secureSeedCommandList || []">
      <section class="hero is-light" v-bind:class="{'shaded': index % 2 === 0}">
        <div class="hero-body">
          <div class="container">
            <secure-seed-command :commandItem="seedCommandListItem"/>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
  import SecureSeedCommand from './SecureSeedCommand'

  export default {
    components: {SecureSeedCommand},
    name: 'secure-seed-command-list',
    props: ['currentSeedCommandToken']
  }
</script>

<style scoped>
.shaded {
  background-color: #DCDCDF;
}
</style>