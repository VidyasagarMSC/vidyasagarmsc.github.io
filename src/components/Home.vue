<template>
  <div class="home">
  <img :src="require('@/assets/vidyasagar.jpg')" />
    <div class = "inline"><h3>Hi, I'm Vidyasagar Machupalli</h3></div>
    <p>{{ about }}</p>
    <p>{{ more }}</p>
    <v-divider></v-divider><br>
    <h4 class="inline">Recognitions</h4>

<p><ul>
    <li>November 2015 | DZone Most Valuable Blogger(MVB)</li><br>
    <li>Apr 2015 | Intel Software Innovator – RealSense</li><br>
    <li>Feb 2015 | Dell-Silver Award – Breakthrough Thinker</li><br>
    <li>Nov 2014 | Microsoft Most Active Individual in the gaming community.</li><br>
    <li>July 2014 – June 2017 | Microsoft Most Valuable Professional – Gaming, Xbox & Visual Studio Tools.</li><br>
    <li>May 2013 | Indecomm Top Gun Award for Innovation and Excellence.</li>
</ul><p>
<v-divider></v-divider>
    <div class="engagements"><h4 class="inline">Skill Set</h4>
    <expertise></expertise>
    </div>
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
      about: 'A Polyglot and Pragmatic programmer, who loves technologies changing lives. I blog and speak at various technical conferences, meetups, and events. I currently work for IBM as Technical Offering Manager developing solutions, promoting the use of IBM Cloud through talks, articles, blogging, user demonstrations, recorded demonstrations, or by the creation of sample projects. I have been awarded as Microsoft MVP, Intel Software Innovator, and DZone MVB. I am passionate about game development and works in his free time developing games and Mobile apps.',

      more: 'I have 10+ years of industry experience and a broad set of skills in software development and design. I started my career as a .Net Developer in early 2007 and continued to hone my kills from that point on. I am a tech addict, constant Learner, and a technology enthusiast. I am also a Core Member and Organiser of BlueCoders Meetup Group.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
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
font-family: 'Montserrat', sans-serif;
  position: relative;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  font-size: 16px;
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
background-color: #F0F8FF;
display: inline-block;
}

.engagements{
margin-bottom: 15px;
}

</style>
