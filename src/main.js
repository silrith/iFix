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
import vue3GoogleLogin from 'vue3-google-login'
import facebookLogin from 'facebook-login-vuejs';

library.add(faTwitter, faFacebook, faInstagram);

const CLIENT_ID = "472152856762-qv8u6s3amtfo24s2o5o9s3ia22umsmid.apps.googleusercontent.com";

createApp(App)
  .use(i18n)
  .use(toast,
    {
      autoClose: 3000,
      style:{
      }
    })
  .use(store)
  .use(ajax)
  .use(router)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID
  })
  .component("facebook",
    facebookLogin
  )
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");