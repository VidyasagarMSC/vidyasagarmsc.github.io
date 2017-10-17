<template>
  <v-app dark>
    <v-container fluid>
  <topbar></topbar>
  <main>
    <v-container fluid>
      <router-view>
        <home></home>
      </router-view>
    </v-container>
  </main>
  <bottombar></bottombar>
    </v-container>
</v-app>
</template>

<script>
import Topbar from './components/Topbar'
import Home from './components/Home'
import Engagements from './components/Engagements'
import Bottombar from './components/Bottombar'
import Expertise from './components/Expertise'
import Blog from './components/Blog'

export default {
  name: 'app',
  components: {
    Topbar,
    Home,
    Engagements,
    Bottombar,
    Expertise,
    Blog
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;
  margin-top: 20px;

}
</style>
