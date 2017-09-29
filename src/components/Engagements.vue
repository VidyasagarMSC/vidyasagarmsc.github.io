<template>
      <div class="engagements">
         <br>
      <div class="inline"><h3>Projects/Talks</h3></div>
      <br>
       <v-card hover raised v-for="item in items" :key="item.title">
         <v-card-media
          class="white--text"
          height="200px"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs6 align-start flexbox>
                <v-chip class="indigo white--text">
                  <v-avatar>
                     <v-icon>{{item.icon}}</v-icon>
                  </v-avatar>
                  {{item.type}}
                </v-chip>
              </v-flex>
              <v-flex xs12 align-end flexbox>
                <span class="headline mb-0">{{item.event}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>{{item.title}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat :href="item.link" class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        items: [
        { title: 'Mobile and Serverless: an untold story', event: 'Mobile Developer Summit', link: 'http://www.developermarch.com/mds/session.html?insert=Vidyasagar', type: 'talk', icon: 'mic' },
        { title: '2 Talks and a lab', event: 'IBM Cloud University, Berlin, Germany', link: 'http://conference.learnquest.com/CTU17/sessions/', type: 'talk', icon: 'mic' },
        { title: 'An Android Chatbot powered by Watson', event: 'WatBot', link: 'https://github.com/VidyasagarMSC/WatBot', type: 'project', icon: 'code' },
        { title: 'My Contributions', event: 'Older Engagements', link: 'https://vmacwrites.wordpress.com/about/my-contributions-to-developer-community/', type: 'talk', icon: 'mic' }
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