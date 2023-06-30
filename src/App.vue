<template>
  <Header :shoppingCartList="shoppingCartList"/>
  <RouterView />
  <Footer />
  <img
    class="top-button"
    src="../src/assets/icons/scroll-bar.png"
    alt=""
    onclick="window.scrollTo(0, 0)"
  />
</template>

<script>
import Header from "../src/components/MainComponents/Header.vue";
import Footer from "../src/components/MainComponents/Footer.vue";
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
    FontAwesomeIcon
  },
  methods: {},
  mounted() {
    localStorage.setItem("lang", "en");
  },
};
</script>

<style src="@/assets/css/base.css"></style>
