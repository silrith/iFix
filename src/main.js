import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import i18n from "./i18n/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter, faFacebook, faInstagram);

createApp(App)
  .use(store)
  .use(router)
  // .use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
