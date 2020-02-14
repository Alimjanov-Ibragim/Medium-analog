import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

Vue.config.productionTip = false;

const token = localStorage.getItem("user-token");
if (token) {
  router.push({ name: "MainComponentCard" });
} else {
  router.push({ name: "AuthComponentLogin" });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
