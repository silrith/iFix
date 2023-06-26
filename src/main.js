import { createApp } from "vue/dist/vue.esm-bundler";
import ajax from "@/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import i18n from "./i18n";

library.add(faTwitter, faFacebook, faInstagram);

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "de";
  }
  i18n.locale = language;
  next();
});

createApp(App)
  .use(i18n)
  .use(store)
  .use(ajax)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('VueDatePicker', VueDatePicker)
  .mount("#app");
