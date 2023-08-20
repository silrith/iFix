import { createApp } from "vue/dist/vue.esm-bundler";
import ajax from "@/axios";
import App from "./App.vue";
import i18n from "./i18n";
import store from "./store";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import toast from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

library.add(faTwitter, faFacebook, faInstagram);

createApp(App)
  .use(i18n)
  .use(toast,
    {
      autoClose: 2000,
      style:{
      }
    })
  .use(store)
  .use(ajax)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");