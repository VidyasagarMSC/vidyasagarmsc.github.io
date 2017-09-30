// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import 'vue-awesome/icons'
import VueAnalytics from 'vue-analytics'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-30026605-1'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
