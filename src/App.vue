<template>
  <Header />
  <RouterView />
  <PopUp />
  <Footer />
  <font-awesome-icon
    class="top-button"
    :icon="['fas', 'circle-up']"
    style="color: rgb(255, 103, 0); font-size: 25px; margin-right: 15px"
    onclick="window.scrollTo(0, 0)"
  />
</template>

<script>
import Header from "../src/components/MainComponents/Header.vue";
import Footer from "@/components/MainComponents/Footer.vue";
import PopUp from "../src/components/MainComponents/PopUp.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { toast } from "vue3-toastify";

library.add(fab, fas, faCartArrowDown);
export default {
  name: "App",
  data() {
    return {
      language: null,
      expirationTime: null,
      currentTimestamp: null,
    };
  },
  components: {
    Header,
    Footer,
    PopUp,
    FontAwesomeIcon,
  },
  methods: {
    checkTokenExpiration() {
      if (this.currentTimestamp >= this.expirationTime) {
        console.log("token doldu");
      } else {
      }
    },
  },
  mounted() {
    localStorage.setItem("cursorPointer", "home");
    if (
      localStorage.getItem("googleToken") != null ||
      localStorage.getItem("googleToken") != undefined
    ) {
      this.currentTimestamp = Math.floor(Date.now() / 1000);
      this.expirationTime = localStorage.getItem(
        localStorage.getItem("googleToken")
      );
      if (this.currentTimestamp >= this.expirationTime) {
      }
    }
    setInterval(this.checkTokenExpiration, 300000);
  },
  beforeMount() {
    var cookie = localStorage.getItem("cookieSettings");
    if (cookie == null || cookie == undefined)
      localStorage.setItem("cookieSettings", "false");
  },
  computed: {},
};
</script>

<style src="@/assets/css/base.css"></style>
