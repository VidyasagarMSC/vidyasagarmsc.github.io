<template>
       <v-layout row wrap align-center>
  <v-flex xs12 md4>
            <div class="text-xs-center">
              <h4 class="inline"> Code | Projects</h4>
            </div>
          </v-flex>
    <v-flex md4 class="my-2" v-for="project in projects" :key="project.title">
              <v-card class="mr-2" hover>
                <v-card-media
                  class="white--text"
                  height="190px"
                  :src="project.imgUrl"
                >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs6 align-start flexbox>
                <v-chip label class="indigo white--text">
                  {{project.type}}
                </v-chip>
              </v-flex>
              <v-flex xs6 align-end flexbox>
                <span class="headline mb-0 inline-block">{{project.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
                </v-card-media>
                <v-card-text>
                  {{ project.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text" :href="'http://reddit.com/submit?url=https://vidyasagarmsc.github.io/writes/' + '&title=' + project.title +' '+ project.content">
                    <icon name="reddit-alien"></icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text" :href="'https://twitter.com/share?url=https://vidyasagarmsc.github.io/writes/'+'&via=VidyasagarMSC&text='+ project.title +' '+ project.content">
                    <icon name="twitter"></icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-3" :href="'http://www.facebook.com/sharer.php?'+'u=https://vidyasagarmsc.github.io/writes/' +'&t=' + project.title +' '+ project.content">
                    <icon name="facebook-f"></icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="orange--text" :href="project.more" target="_blank">Explore</v-btn>
                </v-card-actions>
              </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
export default {
  name: 'projects',
  data: () => {
    return {
      title: 'Your Logo',
      projects: []
    }
  },
  created () {
    axios.get('/static/json/projects.json')
    .then(response => {
      this.projects = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style>
.inline{
color:#66c0ec
}
.inline-block{
background-color: #66c0ec;
display: inline-block;

}
</style>