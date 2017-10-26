<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex md6 sm12>
        <div class="text-xs-center">
          <v-chip v-for="skill in skills" :key="skill.name">
            <v-avatar class="teal">{{skill.type}}</v-avatar>
            {{skill.name}}
          </v-chip>
        </div>
      </v-flex>
       <v-flex md6 sm12>
        <div class="text-xs-right">
         <v-chip class="teal">W - Web</v-chip>
        <v-chip class="teal">B - Backend</v-chip>
         <v-chip class="teal">M - Mobile</v-chip>
          <v-chip class="teal">L - Language</v-chip>
        <v-chip class="teal">C - Cloud</v-chip>
         <v-chip class="teal">O - Others</v-chip>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'expertise',
  data: () => {
    return {
      skills: [
        { type: 'L', name: 'C#' },
        { type: 'L', name: 'Javascript' },
       { type: 'L', name: 'Swift' },
       { type: 'W', name: 'HTML' },
        { type: 'W', name: 'CSS' },
       { type: 'M', name: 'Android' },
       { type: 'M', name: 'iOS' },
        { type: 'M', name: 'Ionic' },
       { type: 'B', name: 'NoSQL' },
       { type: 'C', name: 'IBM Cloud' },
        { type: 'C', name: 'Google Cloud Platform' },
       { type: 'C', name: 'Microsoft Azure' },
       { type: 'W', name: 'AngularJS' },
        { type: 'W', name: 'VueJS' },
       { type: 'B', name: 'SQL Server' },
       { type: 'O', name: 'Unity 3D' }

      ]
    }
  }
}
</script>

<style scoped>
* {
  color: #2B3940;
}
h4 {
  font-weight: bold;
}
.language-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: column;
}
.blue{
  color: #66c0ec;
}
</style>