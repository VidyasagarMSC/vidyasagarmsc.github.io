<template>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <h4 class="inline">Writer | Blogger</h4>
              <v-layout justify-space-between>
              <span v-for="link in links" :key="link.category">
                <v-spacer></v-spacer>
                <a :href="link.url" class="orange--text" target="_blank">{{link.category}}</a>
              </span>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="190px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline inline-block">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text" :href="'http://reddit.com/submit?url=' + post.more + '&title=' + post.title">
                    <icon name="reddit-alien"></icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text" :href="'https://twitter.com/share?url='+ post.more +'&via=VidyasagarMSC&text='+ post.title">
                    <icon name="twitter"></icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-3" :href="'http://www.facebook.com/sharer.php?'+'u='+ post.more +'&t=' + post.title">
                    <icon name="facebook-f"></icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="orange--text" :href="post.more" target="_blank">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
</template>
<script>
import axios from 'axios'
export default {
  name: 'blog',
  data: () => {
    return {
      title: 'Your Logo',
      posts: [],
      links: [
        {
          url: 'https://vmacwrites.wordpress.com/category/cloud/',
          category: 'Cloud'
        },
        {
          url: 'https://vmacwrites.wordpress.com/category/mobile/',
          category: 'Mobile'
        },
        {
          url: 'https://vmacwrites.wordpress.com/category/gaming/',
          category: 'Gaming'
        },
        {
          url: 'https://vmacwrites.wordpress.com/',
          category: 'More...'
        }
      ]

    }
  },
  created () {
    axios.get('/static/json/writings.json')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
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