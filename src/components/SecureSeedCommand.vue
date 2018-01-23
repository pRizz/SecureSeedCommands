<template>

  <section class="hero">
    <div class="hero-body columns">

      <div class="column is-2">
        <img style="width: 60%" :src="commandItem.languageType.image" />
        <div class="title">
          {{ commandItem.languageType.displayName }}
        </div>
      </div>

      <div class="column is-9" style="padding-top: 30px;">

        <b-field position="">
          <b-input :value="commandItem.command" style="width: 100%">
          </b-input>
          <p class="control">
            <button class="button is-info" @click="copyClicked" v-clipboard:copy="commandItem.command">Copy</button>
          </p>
        </b-field>

        <b-collapse class="panel" :open.sync="isOpen">
          <div slot="trigger" class="panel-heading">
            <strong>See Explanation ▾</strong>
          </div>
          <div class="panel-block has-text-left" v-for="step in commandItem.explanation.steps">
            <span v-html="step"></span>
          </div>
        </b-collapse>

      </div>

      </div>
  </section>

</template>

<script>
  export default {
    name: 'secure-seed-command',
    props: ['heroStyle', 'commandItem', 'explanation'],
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      copyClicked() {
        this.$toast.open({
          message: 'Copied to Clipboard ✓',
          type: 'is-success'
        })
      }
    }
  }
</script>

<style scoped>

</style>