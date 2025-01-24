<template>
  <div id="app">

    <nav class="navbar container">
      <div class="navbar-brand">
        <div class="navbar-item">

        <!--<router-link :to="{ name: 'Home' }" class="navbar-item">-->
          <h1 class="heading title"></h1>
          <h1 class="heading title is-4">Secure Seed Commands</h1>
        <!--</router-link>-->
        </div>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': true }">
        <div class="navbar-start">

        </div>
        <div class="navbar-end">

          <!--<div class="navbar-item">-->
            <!--Night Mode TODO-->
          <!--</div>-->

          <div class="navbar-item">

            <b-dropdown position="is-bottom-left">
              <button class="button is-primary" slot="trigger">
                <span>Cryptocurrency Type</span>
                <b-icon icon="menu-down"></b-icon>
              </button>
              <div v-for="seedCommandTokenItem in seedCommandTokens">
                <b-dropdown-item has-link>
                  <router-link :to="seedCommandTokenItem.cryptocurrencyType.pathName">
                    <div class="media">
                      <img :src="seedCommandTokenItem.cryptocurrencyType.image" style="padding-right: 20px; max-height: 1.3rem" />
                      <div class="media-content">
                        <h3>{{ seedCommandTokenItem.cryptocurrencyType.displayName }}</h3>
                      </div>
                    </div>
                  </router-link>
                </b-dropdown-item>
              </div>

            </b-dropdown>

          </div>

          <span class="navbar-item">
            <a class="button is-primary medium-scale-up-hover" href="https://github.com/pRizz/SecureSeedCommands" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
          </span>

        </div>
      </div>
    </nav>

    <router-view></router-view>

    <section class="hero is-primary content" style="margin-bottom: 0">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Security Tips
          </h1>
          <br/>
          <ul>
            <li>
              Disable your internet while generating seeds.
            </li>
            <li>
              Always clear or overwrite your clipboard after pasting your seed. Malicious websites and applications can silently read your clipboard.
            </li>
            <li>
              Generate multiple seeds and splice them together randomly. This can mitigate key logging / terminal history attacks and give you a sense of greater control. Ensure you have the proper number of characters.
            </li>
            <li>
              Encrypt your seeds. Example password encryption with gpg: <code>gpg --symmetric seeds.txt</code> and decryption: <code>gpg seeds.gpg</code>
            </li>
            <li>
              Study the above commands and their explanations so that you could put them in manually.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="heading title is-4">Secure Seed Commands</h1>
            <h1 class="subtitle is-6">A simple, secure, open-source reference for generating cryptocurrency seeds</h1>
            <h2>
              By using this website, you agree to use this tool at your own risk. This website is in beta and may contain bugs or other issues. Please report any bugs, optimizations, or feature requests at the <a href="https://github.com/pRizz/SecureSeedCommands/issues" target="_blank">GitHub Issues</a> page.
            </h2>
          </div>
          <div class="column">
            <p>
              For more information, view the README on
              <a class="button is-small" href="https://github.com/pRizz/SecureSeedCommands/blob/master/README.md" target="_blank">
                <span class="icon is-small">
                  <i class="fa fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
            </p>
            <p>
              This site is hosted by <a target="_blank" href="https://www.prizzventuresllc.com/">P Rizz Ventures LLC</a>
            </p>
            <p>
              <!-- FIXME -->
              <a href="https://www.secureseedcommands.com/PrivacyPolicy.txt" target="_blank">Privacy Policy</a>
            </p>
            <!--<p>-->
              <!--Image sources-->
              <!--https://commons.wikimedia.org/wiki/File:Tux.svg-->
              <!--https://commons.wikimedia.org/wiki/File:Apple-Apple.svg-->
              <!--https://commons.wikimedia.org/wiki/File:Windows_logo_-_2012.svg-->
              <!--https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg-->
              <!--https://commons.wikimedia.org/wiki/File:Ruby_logo.svg-->
              <!--https://hackr.io/tutorials/learn-python/svg/python_logo-->
              <!--https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg-->
              <!--https://nano.org/assets/img/logo.svg-->
            <!--</p>-->
          </div>
          <div class="column">
            <p>Copyright © 2018 Peter Ryszkiewicz</p>
            <p>Created by Peter Ryszkiewicz
              <!-- FIXME -->
              <a class="button is-small" href="https://github.com/pRizz" target="_blank">
                <span class="icon is-small">
                  <i class="fa fa-github"></i>
                </span>
              </a>
              <a class="button is-small" href="https://twitter.com/pryszkie" target="_blank">
                <span class="icon is-small">
                  <i class="fa fa-twitter"></i>
                </span>
              </a>
            </p>
            <p>MIT License</p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import SecureSeedCommandMatrix from '@/ViewModels/SecureSeedCommandMatrix'

export default {
  name: 'app',
  data() {
    return {
      seedCommandTokens: SecureSeedCommandMatrix
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
