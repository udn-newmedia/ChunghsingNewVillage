// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Trip from "@/Trip.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#trip",
  template: "<Trip/>",
  components: { Trip }
});
