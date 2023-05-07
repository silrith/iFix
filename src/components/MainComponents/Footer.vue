<template>
  <hr />
  <footer class="footer mt-3">
    <div class="footerContext">
      <div class="footerContainer">
        <div class="footerContainerLeft col-6">
          <div class="header__logo">
            <router-link to="/">
              <img
                class="iFixLogo"
                src="../../assets/ifixnobg.png"
                alt="Logo"
              />
            </router-link>
          </div>
          <div class="iFixInformation">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              aliquam at a aperiam, reprehenderit consectetur eum consequuntur
              laborum provident hic doloremque veritatis
            </p>
          </div>
        </div>
        <div class="footerContainerRight col-6">
          <div class="quickLinks">
            <div>
              <p>1. Bölüm</p>
            </div>
            <div>
              <p>1. Bölüm</p>
            </div>
            <div>
              <p>1. Bölüm</p>
            </div>
            <div>
              <p>1. Bölüm</p>
            </div>
          </div>
        </div>
      </div>
      <div class="socialMediaIcons">
        <hr class="col-12" />
        <div class="footerIconsDiv mb-2">
          <a href="https://www.facebook.com" target="_blank"
            ><img
              src="../../assets/icons/facebook.png"
              alt=""
              class="socialIcons"
          /></a>
          <a href="https://www.instagram.com" target="_blank"
            ><img
              src="../../assets/icons/instagram.png"
              alt=""
              class="socialIcons"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank"
            ><img
              src="../../assets/icons/twitter.png"
              alt=""
              class="socialIcons"
          /></a>
          <a href="https://www.linkedin.com" target="_blank"
            ><img
              src="../../assets/icons/linkedin.png"
              alt=""
              class="socialIcons"
          /></a>
          <a href="https://www.youtube.com" target="_blank"
            ><img
              src="../../assets/icons/youtube.png"
              alt=""
              class="socialIcons"
          /></a>
        </div>
        <div>
          <p>
            © {{ new Date().getFullYear() }} | I Fix At - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem("language"),
      search: null,
    };
  },
};
</script>

<style>
.footerContainer {
  width: 80%;
  display: flex;
  position: relative;
}

.footerContext {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.footerContainerLeft {
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.footerContainerRight {
  display: flex;
  width: 50%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.socialMediaIcons {
  display: flex;
  justify-content: space-around;
  flex-direction: initial;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

.footerIconsDiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.quickLinks {
  display: flex;
  justify-content: space-evenly;
}

.socialIcons:hover {
  scale: 0.9;
}
</style>
