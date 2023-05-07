<template>
  <div>
    <Header />
    <div class="spaceAround"></div>
    <body class="content">
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
