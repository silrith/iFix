<template>
  <div class="bodyCarousel">
    <div class="centerCarousel">
      <div class="slider-container">
        <div class="navigation">
          <span class="prev nav-button"
            ><svg viewBox="0 0 256 512" width="50%" title="angle-left">
              <path
                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
              /></svg
          ></span>
          <span class="next nav-button"
            ><svg viewBox="0 0 256 512" width="50%" title="angle-right">
              <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              /></svg
          ></span>
        </div>
        <div id="items">
          <div class="item">
            <img class="imgCarousel" src="../../assets/photos/computer.jpg" />
          </div>
          <div class="item">
            <img
              class="imgCarousel"
              src="../../assets/photos/orangeBackGround.jpg"
            />
          </div>
          <div class="item">
            <img class="imgCarousel" src="../../assets/photos/iphone.jpg" />
          </div>
          <div class="item">
            <img
              class="imgCarousel"
              src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div class="item">
            <img
              class="imgCarousel"
              src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div class="item">
            <img
              class="imgCarousel"
              src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bodyCarousel {
  height: 80vh;
  overflow-y: hidden;
}

.centerCarousel {
  height: fit-content;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-container {
  width: 80vw;
  height: 50vh;
  position: relative;
  margin: auto;
}

.imgCarousel {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

#items {
  height: 52vh;
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

.item {
  flex: none;
  height: 50vh;
  width: 80vw;
  scroll-snap-align: start;
  -webkit-overflow-scrolling: touch;
  pointer-events: none;
}

.navigation .prev {
  fill: transparent;
  position: absolute;
  left: 0px;
  z-index: 10;
  height: 50vh;
  width: 10%;
  display: flex;
}

.navigation .next {
  fill: transparent;
  position: absolute;
  right: 0px;
  z-index: 10;
  height: 50vh;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.navigation .nav-button svg {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: 0.3s;
}

.navigation .nav-button svg:hover {
  fill: azure;
}
</style>

<script>
export default {
  mounted() {
    let items = document.getElementById("items");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");

    prev.addEventListener("click", (event) => {
      items.scrollBy(-300, 0);
    });

    next.addEventListener("click", (event) => {
      items.scrollBy(300, 0);
    });
  },
};
</script>
