<template>
  <div>
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
    <button class="top-button" onclick="window.scrollTo(0, 0)">OK</button>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.top-button {
  position: fixed;
  bottom: 85px;
  right: 5px;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.top-button:hover {
  background-color: grey;
}

.top-button:active {
  transform: translateY(1px);
}

html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}

.content {
  padding-top: 30px;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
