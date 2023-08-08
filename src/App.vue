<template>
  <Header/>
  <RouterView />
  <PopUp />
  <Footer />
  <img
    class="top-button"
    src="../src/assets/icons/scroll-bar.png"
    alt="to the top"
    onclick="window.scrollTo(0, 0)"
  />
</template>

<script>
import Header from "../src/components/MainComponents/Header.vue";
import Footer from "../src/components/MainComponents/Footer.vue";
import PopUp from "../src/components/MainComponents/PopUp.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab, fas, faCartArrowDown);
export default {
  name: "App",
  data() {
    return {
      language: null,
    };
  },
  components: {
    Header,
    Footer,
    PopUp,
    FontAwesomeIcon
  },
  methods: {},
  mounted() {
    localStorage.setItem('cursorPointer', "home");
    var cookie = localStorage.getItem('cookieSettings');
    if(cookie == null || cookie == undefined) localStorage.setItem('cookieSettings', false);
  },
};
</script>

<style src="@/assets/css/base.css"></style>
