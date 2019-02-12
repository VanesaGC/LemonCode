import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { router } from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.use(VueRouter);

new Vue({
  el: "#root",
  router,
  render: h => h(App)
});
