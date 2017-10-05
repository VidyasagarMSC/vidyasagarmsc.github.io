<template>
<div toolbar>
<v-navigation-drawer temporary dark v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="require('@/assets/vidyasagar.jpg')" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>VMac</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
         <v-list-tile v-for="local in locals" :key="local.title" :href="local.link">
          <v-list-tile-action>
            <icon :name="local.icon"></icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ local.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="item in items" :key="item.title" :href="item.link" :target="getTarget(item)">
          <v-list-tile-action>
            <icon :name="item.icon"></icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <v-toolbar fixed>
<span class="hidden-md-and-up"><v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon></span>
    <v-toolbar-title><router-link class="title" :to="{ path: '/' }">Vidyasagar MSC</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down" v-for="local in locals" :key="local.title" :href="local.link">
      <v-btn :href="local.link" dark v-tooltip:bottom="{ html: local.title }"><icon :name="local.icon" scale="1" ripple></icon></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.title" :href="item.link">
      <v-btn :href="item.link" target="_blank" dark v-tooltip:bottom="{ html: item.title }"><icon :name="item.icon" scale="1" ripple></icon></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  data: () => {
    return {
      drawer: false,
      mini: false,
      locals: [
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'Engagements', icon: 'user-o', link: '/#/engagements' },
        { title: 'Writes', icon: 'sticky-note-o', link: '/#/writes' }
      ],
      items: [
        { title: 'Code', icon: 'github-alt', link: 'https://github.com/vidyasagarmsc' },
        { title: 'Twitter', icon: 'twitter', link: 'https://twitter.com/VidyasagarMSC' },
        { title: 'Profile', icon: 'linkedin', link: 'https://www.linkedin.com/in/vidyasagarmsc' },
        { title: 'Videos', icon: 'youtube-play', link: 'https://www.youtube.com/user/mscvidyasagar' },
        { title: 'Photos', icon: 'instagram', link: 'http://instagram.com/vidyasagarmsc/' }
      ],
      nav: {
        edge: 'right'
      }
    }
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? '' : '_blank'
    }
  }
}
</script>
<style>
.title {
  color: white;
  text-decoration: none;
}
</style>
