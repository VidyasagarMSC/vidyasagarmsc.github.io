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
                        <span class="headline">{{ post.title }}</span>
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
                  <v-btn icon class="light-blue--text" :href="'https://twitter.com/share?url='+ post.more +'&via=VidyasagarMSC&text=I am reading '+ post.title">
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
export default {
  name: 'blog',
  data: () => {
    return {
      title: 'Your Logo',
      posts: [
        {
          title: 'VMac Writes',
          content: 'VMac Writes is hosted on Wordpress.com and has more than 100 blog posts. From Cloud to AI to Gaming.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg',
          more: 'https://vmacwrites.wordpress.com/'
        },
        {
          title: 'Medium',
          content: 'Interesting and important technical thoughts are posted here for your reference. Clap if you like and also check my claps. #AI #ML ',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg',
          more: 'https://medium.com/@VidyasagarMSC'
        },
        {
          title: 'DZone',
          content: 'A collection of my technical articles. Catering Cloud, Cognitive, and many more...',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg',
          more: 'https://dzone.com/users/2567192/vidyasagarmsc.html'
        }
      ],
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
  }
}
</script>
<style>
.inline{
background-color: #F0F8FF;
display: inline-block;
}
</style>