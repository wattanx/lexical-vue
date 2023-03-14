import "./assets/style.css";
import App from "./App.vue";
import Vue from "vue";
import PortalVue from "portal-vue";

Vue.use(PortalVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
