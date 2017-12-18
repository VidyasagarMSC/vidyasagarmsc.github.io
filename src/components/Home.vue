<template>
  <div class="home">
  <img src= "/static/images/vidyasagar.jpg"/>
   <h3 class="inline">Vidyasagar Machupalli</h3>
    <p v-html="about"></p>
   <p v-html="more"></p>
    <v-divider></v-divider><br>
    <h3 class="inline">Accomplishments</h3>

<p><ul>
    <li>November 2015 | DZone Most Valuable Blogger(MVB)</li><br>
    <li>Apr 2015 | Intel Software Innovator – RealSense</li><br>
    <li>Feb 2015 | Dell-Silver Award – Breakthrough Thinker</li><br>
    <li>Nov 2014 | Microsoft Most Active Individual in the gaming community.</li><br>
    <li>July 2014 – June 2017 | Microsoft Most Valuable Professional – Gaming, Xbox & Visual Studio Tools.</li><br>
    <li>May 2013 | Indecomm Top Gun Award for Innovation and Excellence.</li>
</ul><p>
<v-divider></v-divider>
    <h3 class="inline">Skill Set</h3>
    <expertise></expertise>
    </div>
</template>

<script>
import Expertise from './Expertise'
export default {
  name: 'home',
  components: { Expertise },
  data () {
    return {
      msg: 'Vidyasagar Machupalli',
      about: 'is a polyglot and pragmatic programmer, who loves technologies changing lives. He is a well-known <a href="/writes" style="color: #EA8E28 !important;" target="_blank">blogger</a> and also <a href="/engagements" style="color: #EA8E28 !important;" target="_blank">speaker</a> at various technical conferences, meetups, and events. He currently works for IBM as Technical Product Manager & Developer Advocate. His role involves in exploring & defining cloud solutions, tutorials & products, working closely with product teams, coding <a href="https://github.com/vidyasagarmsc" style="color: #EA8E28 !important;" target="_blank">code samples</a>, enabling SIs and startups on IBM Cloud, presenting at Conferences covering cloud, AI, devops, and mobile. He loves exploring new cloud paradigms, programming languages, and technologies.',
      more: 'Vidyasagar has 10+ years of industry experience and a broad set of skills in software development and design. He started his career as a .Net Developer in early 2007 and continued to hone his skills from that point on.  He is a tech addict, constant Learner, and a technology enthusiast. He is a Core Member and Organiser of <a href="https://bluecodersdev.github.io" style="color: #EA8E28 !important;" target="_blank">BlueCoders Meetup Group</a>. <br>Vidyasagar is an adjunct faculty at the Christ University where he teaches Cloud Computing to the students enrolled for the Masters course.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
color: #F0FFFF;
font-weight: bold;
-webkit-transition: color 0.2s ease-in-out;
-moz-transition: color 0.2s ease-in-out;
-o-transition: color 0.2s ease-in-out;
transition: color 0.2s
}
p{
font-family: 'Open Sans', sans-serif;
  position: relative;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  font-size: 18px;
 line-height: 2;
 color: #F0F8FF;
 text-rendering: optimizeLegibility;

}

.home img{
padding: 1rem 0;
margin: 3rem 0;
width: 300px;
border-radius: 50%;
margin: 0 auto;
display: table
}

h4{
font-size:18px;
font-weight: bold;
}

.inline{
color:#66c0ec !important;
}
.background{
  background-color: #fff;
}

</style>
