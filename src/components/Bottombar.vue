<template>
  <v-footer class="card elevation-7" fixed dark>
    <div>
    &copy; {{ new Date().getFullYear() }} Vidyasagar MSC | Made with <v-spacer></v-spacer>
        <icon name="heart" class="red--text" scale="1"></icon>
        <a v-tooltip:top="{ html: 'Vue.js' }" href="https://vuejs.org/" target="_blank">
              <img :src="icons.vuejs" height="14"/>
            </a>
            <a v-tooltip:top="{ html: 'Vuetify.js' }" href="https://vuetifyjs.com/" target="_blank">
              <img :src="icons.vuetify" height="15"/>
            </a>
            <a v-tooltip:top="{ html: 'Hosted on github.io' }"
                href="https://github.io" target="_blank">
                  <icon name="github-alt" scale="1"></icon>
            </a>
             <a v-tooltip:top="{ html: 'Click to view source on GitHub' }"
                href="https://github.com/VidyasagarMSC/vidyasagarmsc.github.io" target="_blank">
                  <icon name="code" scale="1"></icon>
            </a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'bottombar',
  data: () => {
    return {
      icons: {
        vuejs: require('../assets/vuejs.svg'),
        vuetify: require('../assets/vuetify.png')
      }
    }
  }
}
</script>
<style>
div{
display: inline-block;
}
</style>
