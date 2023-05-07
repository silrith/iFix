<template>
  <body class="mainBody">
    <div class="homePagePicContainer">
      <img src="../assets/photos/tablet.jpg" class="homePagePic1" />
      <img src="../assets/photos/iphone.jpg" class="homePagePic2" />
      <img src="../assets/photos/notebook.jpg" class="homePagePic3" />
    </div>
    <div class="informationContainer">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
        culpa dolorum mollitia repellendus earum quam enim alias aliquid
        necessitatibus suscipit vel, voluptatibus officia beatae saepe atque
        quod assumenda dignissimos!
      </h1>
    </div>
    <!-- <MainCarousel /> -->
  </body>
</template>

<script>
// import MainCarousel from "../components/SideComponents/MainCarousel.vue";
export default {
  name: "Home Page",
  mounted() {},
  components: {
    // MainCarousel,
  },
};
</script>

<style>
.mainBody {
  display: flex;
  width: 100%;
  position: inherit;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
}

.informationContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}

.homePagePicContainer {
  width: 100%;
  height: 48vh;
  display: flex;
  flex-wrap: wrap;
}

.homePagePicContainer img {
  width: 33.33%;
  height: auto;
}

@media (max-width: 768px) {
  .homePagePicContainer img {
    width: 100%;
    height: 48vh;
  }
  .homePagePic1 {
    display: none;
  }
  .homePagePic3 {
    display: none;
  }
}
</style>
