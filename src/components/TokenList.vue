<template>

  <div class="panel">
    <p class="panel-heading">
      Tokens
    </p>

    <!--<div class="panel-block">-->
      <!--<p class="control">-->
        <!--New Channels will appear here as people create messages on them-->
      <!--</p>-->
    <!--</div>-->

    <!--<div class="panel-block">-->
      <!--<p class="control has-icons-left">-->
        <!--<input class="input is-small" type="text" placeholder="Filter (Not yet implemented)">-->
        <!--<span class="icon is-small is-left">-->
            <!--<b-icon icon="search" size="is-small"></b-icon>-->
          <!--</span>-->
      <!--</p>-->
    <!--</div>-->

    <!--<a v-for="channel in channelController.channels" v-on:click="setCurrentChannel(channel)" class="hover-channel panel-block" v-bind:class="{'active-channel': isActiveChannel(channel.name), 'has-text-weight-bold': shouldChannelBeBold(channel)}">-->
      <!--<span style="white-space: pre">{{unreadDisplayText(channel)}}</span>-->
      <!--<span class="hover-channel hover-child panel-icon" v-bind:class="{'active-channel': isActiveChannel(channel.name)}">-->
          <!--<b-icon icon="wifi" size="is-small" class="hover-channel hover-child" v-bind:class="{'active-channel': isActiveChannel(channel.name)}">-->
                      <!--&lt;!&ndash;<span>{{unreadDisplayText(channel)}}</span>&ndash;&gt;-->
          <!--</b-icon>-->
        <!--</span>-->
      <!--{{ truncateChannelName(channel.name)}}-->
    <!--</a>-->

    <!--<div class="field">-->
      <!--<label class="label"></label>-->
      <!--<div class="control">-->
        <!--<input class="input" type="text" v-model="newChannelName" @keyup.enter="addChannel" placeholder="New channel (max 40 chars)">-->
      <!--</div>-->
    <!--</div>-->

  </div>

</template>

<script>
  export default {
    name: 'token-list'
  }
</script>

<style scoped>

</style>