<template>
  <div>
    <Header />
    <div class="spaceAround" style="height: 50px"></div>
    <div class="content">
      <RouterView />
    </div>
    <Footer />
    <button class="top-button" onclick="window.scrollTo(0, 0)">OK</button>
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
    localStorage.setItem("lang", "de");
  },
};
</script>

<style src="@/assets/css/base.css"></style>
