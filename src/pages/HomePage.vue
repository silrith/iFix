<template>
  <body class="mainBody">
    <!-- <div class="homePagePicContainer">
      <img src="../assets/photos/tablet.jpg" class="homePagePic1" />
      <img src="../assets/photos/iphone.jpg" class="homePagePic2" />
      <img src="../assets/photos/notebook.jpg" class="homePagePic3" />
    </div> -->
    <div class="homeContainer">
      <div class="col-sm-6 mb-2">
        <a style="border-radius: 5%" href="#" class="thumbnail">
          <img src="" />
        </a>
        <h3>Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium
        </p>
        <button class="button-17" role="button">Button 17</button>
      </div>
    </div>
    <div class="row col-12 mt-3">
      <div class="col-sm-6 homeContainer2"></div>
      <div class="col-sm-6 mb-2">
        <a style="border-radius: 5%" href="#" class="thumbnail">
          <img
            src="https://static.pexels.com/wp-content/uploads/2014/05/macbook-air-notebook-person-157.jpg"
          />
        </a>
        <h3>Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium
        </p>
        <button class="button-17" role="button">Button 17</button>
      </div>
    </div>
    <div class="row col-12 text-center mt-3" style="width: 90%">
      <div class="col-sm-4 visualPlay">
        <div class="button-17 col-12" style="background-color: orange"></div>
        <div class="button-17 col-8" style="background-color: purple"></div>
        <div class="button-17 col-3" style="background-color: red"></div>
        <div class="button-17 col-9" style="background-color: blue"></div>
        <div class="button-17 col-4" style="background-color: yellow"></div>
      </div>
      <div class="col-sm-4 ipadPicture" style="height: 500px"></div>
      <div class="col-sm-4 visualPlay2">
        <div class="button-17 col-4" style="background-color: orange"></div>
        <div class="button-17 col-8" style="background-color: purple"></div>
        <div class="button-17 col-3" style="background-color: red"></div>
        <div class="button-17 col-6" style="background-color: blue"></div>
        <div class="button-17 col-10" style="background-color: yellow"></div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home Page",
  data() {
    return {
      color1: "red",
      color2: "blue",
      duration: 3000,
    };
  },
  computed: {},
  mounted() {},
  components: {},
  created() {},
  methods: {},
};
</script>

<style>
.videoDiv {
  display: flex;
  margin-bottom: 10px;
  align-items: inherit;
  max-height: 400px;
}

.video-container video {
  width: 100%;
  object-fit: cover;
  height: 400px;
}

.videoContent {
  position: relative;
  z-index: 1;
  /* Diğer içerik için stil ayarlamaları */
}

.videoRightDescription {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(128, 128, 128, 0.3);
}

.homeContainer {
  width: 90%;
  background-image: url("../assets/photos/iphones.jpg");
  background-size: cover;
}
.homeContainer2 {
  width: 100%;
  background-image: url("../assets/photos/iwatch.jpg");
  background-size: cover;
}
.homeContainer2 p {
  opacity: 1 important;
}
p {
  font-family: "Open Sans", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
}

.thumbnail img {
  transition: all 0.3s ease 0s;
  width: 100%;
}

.thumbnail {
  overflow: hidden;
}

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

.ipadPicture {
  background-image: url("../assets/photos/ipad.jpg");
  background-size: cover;
  background-position: center;
}

.visualPlay {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
}

.visualPlay2 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
