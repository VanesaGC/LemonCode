import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  el: "#root",
  render: h => h(App)
});
