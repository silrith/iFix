<template>
  <footer class="text-light text-center text-md-left">
    <div class="container">
      <div class="row pt-4">
        <div class="col-sm-6 col-md-3 pb-4">
          <h5 class="mb-4">{{ $t("header.repairServices") }}</h5>
          <ul class="list-unstyled">
            <li>
              <router-link class="text-light" to="/androidRepair">
                {{ $t("header.androidRepair") }}
              </router-link>
            </li>
            <li>
              <router-link class="text-light" to="/iphoneRepair">
                {{ $t("header.iphoneRepair") }}
              </router-link>
            </li>
            <li>
              <router-link class="text-light" to="/tabletRepair">
                {{ $t("header.tabletRepair") }}
              </router-link>
            </li>
            <li>
              <router-link class="text-light" to="/computerRepair">
                {{ $t("header.computerRepair") }}
              </router-link>
            </li>
            <li>
              <router-link class="text-light" to="/wearableRepair">
                {{ $t("header.wearableRepair") }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 pb-4">
          <h4 class="mb-4">About</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-light">Company</a>
            </li>
            <li>
              <a href="#" class="text-light">Team</a>
            </li>
            <li>
              <a href="#" class="text-light">Careers</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 pb-4">
          <h4 class="mb-4">Navigation Info ?</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-light"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a
              >
            </li>
            <li>
              <a href="#" class="text-light"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a
              >
            </li>
            <li>
              <a href="#" class="text-light"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col d-flex border-top border-secondary justify-content-center mb-4"
      >
        <a href="#" class="d-block px-3 mt-3"
          ><img
            class="socialIcons"
            src="../../assets/logos/facebook.png"
            alt="Facebook"
        /></a>
        <a href="#" class="d-block px-3 mt-3"
          ><img
            class="socialIcons"
            src="../../assets/logos/twitter.png"
            alt="Facebook"
        /></a>
        <a href="#" class="d-block px-3 mt-3"
          ><img
            class="socialIcons"
            src="../../assets/logos/instagram.png"
            alt="Facebook"
        /></a>
        <a href="#" class="d-block px-3 mt-3"
          ><img
            class="socialIcons"
            src="../../assets/logos/linkedin.png"
            alt="Facebook"
        /></a>
      </div>
      <p class="text-center text-light border-top border-secondary py-4">
        I Fix At © {{ new Date().getFullYear() }} | All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem("language"),
    };
  },
};
</script>

<style>
footer {
  background: #1f262d;
}

.footerContainer {
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
