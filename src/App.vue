<template>
  <div>
    <Header />
    <body class="vueAppBody">
      <RouterView />
    </body>
    <Footer />
    <img
      class="top-button"
      src="../src/assets/icons/scroll-bar.png"
      alt=""
      onclick="window.scrollTo(0, 0)"
    />
  </div>
</template>

<script>
import Header from "../src/components/MainComponents/Header.vue";
import Footer from "../src/components/MainComponents/Footer.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab, fas);
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
  },
  methods: {},
  mounted() {
    localStorage.setItem("lang", "en");
  },
};
</script>

<style src="@/assets/css/base.css"></style>
