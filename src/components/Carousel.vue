<template>
  <div>
    <b-carousel id="carousel1"
                controls
                indicators
                :interval="6000"
                img-width="1024"
                img-height="320"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-blank img-alt="Blank image" v-for="recommendation in recommendations" :key="recommendation.author">
        <h5>
         {{ recommendation.testimonial }}<br>
        </h5>
         - {{ recommendation.author }}
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Source: <v-btn href="https://www.linkedin.com/in/vidyasagarmsc" target="_blank" dark v-tooltip:bottom="{ html: 'LinkedIN' }"><icon name="linkedin" scale="1" ripple></icon></v-btn><br>
      <a href="https://www.linkedin.com/in/vidyasagarmsc" target="_blank">Add your recommendation</a>
    </p>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      slide: 0,
      sliding: null,
      recommendations: [
        { testimonial: ' I have known Vidya from the early days of the XHackers meetup group and later after he joined IBM. I ve been always been impressed with his enthusiasm to start on a new endeavor. His ability to engage an audience in a technical talk is brilliant! He keeps his talks very engaging and entertaining and to convey the essence of the complex topic he is presenting. I have been very impressed with the methodical code explanations in his blogs explaining mobile, cloud and Watson. Above all he is a great person to have around for his immense enthusiasm!', author: 'Ajay Chebbi, STSM, IBM Cloud' },
        { testimonial: ' Vidyasagar is an exceptional developer with good object oriented software development knowledge and is always up-to-date with latest technologies. He is a fast learner and has expertise in broad range of technologies/frameworks. Always strives for better alternatives and keen at solving problems. He makes a team member with excellent communication skills and I would any day like to work with a guy like him.', author: 'Phani Vankadari, Development Lead' },
        { testimonial: ' Vidyasagar helped my company develop a Social Analytics Product (Facebook, Google Analytics) in the Microsoft cloud services environment. He is an intelligent and hardworking engineer capable of developing extremely complex software in a very resourceful and timely manner. His ability to research and learn new things along with his passion will help a great deal in implementing any high tech, innovative software solution. He is very personable and communicative too.', author: 'Manoj P Keechilot, Architect' },
        { testimonial: ' I have been working with Vidya for little over 3 years. He is one of the most passionate techie I met in his specialization be it gaming or cross platform development. He is a community person and always willing to help and support others. He is very dependable and tasks given to him, will surely complete as per given timeframe. He is extremely professional and down to earth. I strongly recommend him to be worked with and wish him all the best for his career endeavor.', author: 'Biplab Paul, PMP' },
        { testimonial: ' Vidya is one of the buddies I see as an aggressive and enthusiastic person in work. He is very much interested and determined person to accomplish the task in different folds. Very much interested and obedient person while receiving the suggestions from seniors. He stands first to take up any kind of job with full determination and very much eager to learn new technologies. Always stays ahead in the game. I surely recommend Mr. Vidya for any organization.', author: 'Srinivasu Pemma, Technical Lead' },
        { testimonial: ' Vidyasagar is very persuasive when it comes to find a solution. He can always come up with great problem solving process to nail the issues.He is fun and easy to work with. I like to thank him for being a good resource in R&D.', author: 'Kathy Zarrehparvar, Project Manager' }
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
p,h5 {
    font-family: 'Poppins', sans-serif;
}
</style>
