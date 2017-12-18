<template>
 <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <h4 class="inline"> Coder | Speaker</h4>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="item in items" :key="item.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="190px"
                  :src="item.imgUrl"
                >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs6 align-start flexbox>
                <v-chip label class="indigo white--text">
                  <v-avatar>
                     <v-icon>{{item.icon}}</v-icon>
                  </v-avatar>
                  {{item.type}}
                </v-chip>
              </v-flex>
              <v-flex xs6 align-end flexbox>
                <span class="headline mb-0 inline-block">{{item.event}}</span>
              </v-flex>
            </v-layout>
          </v-container>
                </v-card-media>
                <v-card-text>
                  {{ item.title }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text" :href="'http://reddit.com/submit?url=https://vidyasagarmsc.github.io/engagements/' + '&title=' + item.event +' '+ item.title">
                    <icon name="reddit-alien"></icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text" :href="'https://twitter.com/share?url=https://vidyasagarmsc.github.io/engagements/'+'&via=VidyasagarMSC&text='+ item.event +' '+ item.title">
                    <icon name="twitter"></icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-3" :href="'http://www.facebook.com/sharer.php?'+'u=https://vidyasagarmsc.github.io/engagements/' +'&t=' + item.event +' '+ item.title">
                    <icon name="facebook-f"></icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="orange--text" :href="item.link" target="_blank">Link</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'about',
    data () {
      return {
        items: []
      }
    },
    created () {
      axios.get('/static/json/engagements.json')
    .then(response => {
      // JSON responses are automatically parsed.
      this.items = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
    }
  }
</script>
<style>
.inline{
color: #66c0ec;
}
.inline-block{
background-color: #66c0ec;
display: inline-block;

}
</style>