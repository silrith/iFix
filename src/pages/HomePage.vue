<template>
  <!-- <h1>{{ $t("homePage") }}</h1> -->
  <h1>Ana Sayfa</h1>
  <div class="slider-container">
    <div class="slider">
      <img src="https://wallpaperaccess.com/full/12575.jpg" alt="Resim 1" />
      <img
        src="https://www.pixelstalk.net/wp-content/uploads/images6/Original-Iphone-HD-Wallpaper-4K-Free-download.jpg"
        alt="Resim 2"
      />
      <img
        src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg"
        alt="Resim 3"
      />
      <img
        src="https://e0.pxfuel.com/wallpapers/343/353/desktop-wallpaper-unique-background.jpg"
        alt="Resim 4"
      />
    </div>
  </div>

  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>

  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>

  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
  <h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis
    culpa dolorum mollitia repellendus earum quam enim alias aliquid
    necessitatibus suscipit vel, voluptatibus officia beatae saepe atque quod
    assumenda dignissimos!
  </h1>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style>
.slider-container {
  max-width: calc(100% - 100px);
  margin: 0 auto;
}

.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin: 0;
  padding: 0;
}

.slider > img {
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start;
  max-height: 400px;
}

@media (max-width: 768px) {
  .slider-container {
    max-width: 100%;
  }
  .slider {
    margin: 0;
    padding: 0;
  }
}
</style>
