<template>
  <div class="cookieDiv" v-if="!showCookiePopup">
    <div class="col-lg-4 col-md-6 col-sm-6" id="cookie-popup">
      <div>
        <svg
          aria-hidden="true"
          class="svg-spot cookieSvg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
        >
          <path
            d="M35 45.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM63.5 63a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm-19 19a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            opacity=".2"
          ></path>
          <path
            d="M56.99 2.53a23.1 23.1 0 0114.66 6.15h.01l.01.02c.57.55.61 1.27.5 1.74v.07a10.95 10.95 0 01-3.07 4.77 9 9 0 01-6.9 2.5 10.34 10.34 0 01-9.72-10.44v-.08a10 10 0 011.03-3.74l.01-.03.02-.02c.28-.5.82-.92 1.52-.95.63-.02 1.27-.02 1.93.01zm12.04 7.83a20.1 20.1 0 00-12.2-4.83l-.92-.03c-.23.6-.38 1.25-.43 1.94a7.34 7.34 0 006.95 7.34 6 6 0 004.64-1.7c.94-.88 1.6-1.9 1.96-2.72zm15.3 8.76a6.84 6.84 0 00-5.09-.24 7.9 7.9 0 00-3.28 2.05 1.8 1.8 0 00-.3 1.95l.02.02v.02a15.16 15.16 0 008.74 7.47c.64.23 1.32.08 1.8-.33a6.63 6.63 0 001.63-1.97l.01-.03.01-.03c1.67-3.5-.12-7.32-3.54-8.91zm-5.5 3.28c.36-.25.82-.5 1.35-.67.92-.3 1.92-.35 2.89.1 2.14 1 2.92 3.14 2.11 4.88-.12.21-.26.41-.43.6l-.26-.1a12.29 12.29 0 01-5.66-4.81zM32 24a2 2 0 11-4 0 2 2 0 014 0zm12 21a2 2 0 11-4 0 2 2 0 014 0zm36 4a2 2 0 11-4 0 2 2 0 014 0zm-7 21a2 2 0 11-4 0 2 2 0 014 0zM59 81a2 2 0 11-4 0 2 2 0 014 0zM22 63a2 2 0 11-4 0 2 2 0 014 0zm27 7a9 9 0 11-18 0 9 9 0 0118 0zm-3 0a6 6 0 10-12 0 6 6 0 0012 0zM33 41a9 9 0 11-18 0 9 9 0 0118 0zm-15 0a6 6 0 1012 0 6 6 0 00-12 0zm50 11a9 9 0 11-18 0 9 9 0 0118 0zm-3 0a6 6 0 10-12 0 6 6 0 0012 0zM44.08 4.24c.31.48.33 1.09.05 1.58a17.46 17.46 0 00-2.36 8.8c0 9.55 7.58 17.24 16.85 17.24 2.97 0 5.75-.78 8.16-2.15a1.5 1.5 0 012.1.66 12.08 12.08 0 0011 6.74 12.4 12.4 0 007.85-2.75 1.5 1.5 0 012.38.74A45.76 45.76 0 0192 48.16c0 24.77-19.67 44.9-44 44.9S4 72.93 4 48.16C4 25.23 20.84 6.28 42.64 3.58a1.5 1.5 0 011.44.66zM40.22 7C21.32 10.71 7 27.7 7 48.16c0 23.17 18.39 41.9 41 41.9s41-18.73 41-41.9c0-3.52-.42-6.93-1.22-10.2a15.5 15.5 0 01-7.9 2.15c-5.5 0-10.36-2.83-12.97-7.1a19.46 19.46 0 01-8.28 1.85c-11 0-19.86-9.1-19.86-20.24 0-2.7.52-5.26 1.45-7.62zM92 91a2 2 0 100-4 2 2 0 000 4zM7 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM82.5 90a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5-7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM80 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM53.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          ></path>
        </svg>
      </div>
      <div></div>
      <h5 class="mt-2 mb-2" style="color:black">"{{this.$t('cookieSetting.cookiePolicy')}}"</h5>
      <div>
        <h6>{{ this.$t('cookieSetting.privacy') }}</h6>
      </div>
      <div>
        <p>{{ this.$t('cookieSetting.description1') }}<br />
          {{ this.$t('cookieSetting.description2') }}
        </p>
      </div>
      <div class="d-flex justify-content-center">
          <button class="cookieButton" @click="closePopUp()">{{ this.$t('cookieSetting.cookieButton') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cookie Options",
  data() {
    return {
      showCookiePopup: null,
    };
  },
  components: {},
  methods: {
    closePopUp() {
      localStorage.setItem("cookieSettings", "true");
      this.showCookiePopup = true;
    },
  },
  mounted() {
    const cookieSettings = localStorage.getItem('cookieSettings');

  if (cookieSettings === 'false') {
    this.showCookiePopup = false;
  } else {
    this.showCookiePopup = true;
  }
  },
};
</script>

<style lang="css">
.cookieDiv {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  font-size: 10px;
  padding: 10px;
  color: black;
}

#cookie-popup {
  background-color: rgba(242, 109, 37, 0.95);
  width: max-content;
  height: max-content;
  text-align: center;
  position: fixed;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 15px;
}

.cookieSvg {
  fill: black;
  border-radius: 15px;
}

.cookieButton {
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 10px;
  transition: background-color 0.3s;
}
</style>
