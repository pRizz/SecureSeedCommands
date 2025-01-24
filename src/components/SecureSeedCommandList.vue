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

            <div class="box random-box">
              <div class="random-content">
                <h2 class="random-title">Cryptographically Secure Random Seed</h2>
                <h4 class="random-subtitle">This is a cryptographically secure random seed for your {{currentSeedCommandToken.cryptocurrencyType.displayName}} wallet. (<a href="https://github.com/pRizz/SecureSeedCommands/blob/master/src/components/SecureSeedCommandList.vue" target="_blank">This code</a> is free and open source)</h4>
                <h4 class="random-subtitle">Turn off your internet connection before copying this seed.</h4>
                <div class="random-text" @click="copyRandomText" style="cursor: pointer" v-clipboard:copy="randomCharacters">{{ randomCharacters }}</div>
                <button class="button is-primary" @click="generateRandomCharacters">
                    <FontAwesomeIcon :icon="['fas', 'sync']" /><span>&nbsp;&nbsp;Regenerate</span>
                </button>
              </div>
            </div>

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
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSync } from '@fortawesome/free-solid-svg-icons'
  import { Toast } from 'buefy'
  library.add(faSync)

  export default {
    components: {SecureSeedCommand, FontAwesomeIcon},
    name: 'secure-seed-command-list',
    props: ['currentSeedCommandToken'],
    data() {
      return {
        randomCharacters: ''
      }
    },
    methods: {
      generateRandomCharacters() {
        const array = new Uint8Array(32); // 32 bytes = 64 hex characters
        crypto.getRandomValues(array);
        this.randomCharacters = Array.from(array)
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      },
      copyRandomText() {
        this.$buefy.toast.open({
          message: 'Seed copied to clipboard ✓',
          type: 'is-success',
          duration: 2000
        });
      }
    },
    mounted() {
      this.generateRandomCharacters();
    }
  }
</script>

<style scoped>
.shaded {
  background-color: #DCDCDF;
}

.random-box {
  max-width: 800px;
  margin: 20px auto;
  background-color: #f5f5f5;
  border-radius: 6px;
}

.random-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.random-text {
  font-family: monospace;
  font-size: 1.2em;
  word-break: break-all;
  text-align: center;
  background: white;
  padding: 15px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid #dbdbdb;
}

.random-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #363636;
  margin-bottom: 0.5rem;
}

.random-subtitle {
  font-size: 1.1rem;
  color: #4a4a4a;
  text-align: center;
  margin: 0;
  line-height: 1.4;
}
</style>