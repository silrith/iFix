<template>
  <footer>
    <div class="footerDiv">
      <div class="footerImgDiv">
        <router-link to="/">
          <img
            src="@/assets/photos/ifixnobg.webp"
            alt="I Fix Main Logo"
            style="height: 50px"
          />
        </router-link>
      </div>
      <hr style="width: 100%" />
      <div class="footerContent">
        <div class="col-lg-3 col-md-6 col-sm-6 p-2 customContentMainDiv">
          <div class="customContent">
            <p class="txt2">{{ $t("footer.leftSubtitle1") }}</p>
            <p class="txt2">{{ $t("footer.leftSubtitle2") }}</p>
            <p class="txt2">{{ $t("footer.leftSubtitle3") }}</p>
            <div>
              <p class="txt2">
                <b
                  >{{ $t("footer.copyRight") }} IFix ©
                  {{ new Date().getFullYear() }} |
                  {{ $t("footer.allRightsReserved") }}</b
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 p-2 customContentMainDiv">
          <div class="customContent">
            <p class="txt3">{{ $t("header.contact") }}</p>
            <div class="footerInformationDiv">
              <font-awesome-icon
                :icon="['fas', 'map']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">
                Wien 1010 Standort, Rabensteig 1, 1010 Wien, Austria
              </p>
            </div>
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">info@ifix.at</p>
            </div>
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'phone-volume']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">+43 1 9909777</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 p-2 customContentMainDiv">
          <div class="customContentThird">
            <div class="socialMediaFooter">
              <a href="https://www.facebook.com/profile.php?id=100063571123762" target="_blank">
                <img
                  src="@/assets/footer/facebook.webp"
                  alt="Facebook Logo"
                  width="45"
                  style="padding: 2px"
              /></a>
              <a href="https://www.linkedin.com/in/ifix-wien-a7a997100/" target="_blank">
                <img
                  src="@/assets/footer/linkedin.webp"
                  alt="Linkedin Logo"
                  width="45"
                  style="padding: 2px"
              /></a>
              <a href="https://www.instagram.com/ifix.at_1010_wien/" target="_blank">
                <img
                  src="@/assets/footer/instagram.webp"
                  alt="Instagram Logo"
                  width="45"
                  style="padding: 2px"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCTYIels_GZ7WHS9yFyShrlQ" target="_blank">
                <img
                  src="@/assets/footer/youtube.webp"
                  alt="Youtube Logo"
                  width="45"
                  style="padding: 2px"
              /></a>
            </div>
            <div>
              <p class="txt2">
                <b>
                  {{ $t("footer.rightSubtitle1") }} <br />
                  {{ $t("footer.rightSubtitle2") }} <br />
                  {{ $t("footer.rightSubtitle3") }}
                </b>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 p-2 customContentMainDiv">
          <div class="customContentLast">
            <div>
              <img
                src="@/assets/footer/stripe.webp"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <div style="display: flex">
                <img
                  src="@/assets/footer/stripePayments.webp"
                  alt="I Fix Main Logo"
                  style="height: 80px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.footerDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px 50px 50px 50px;
}

.footerImgDiv {
  height: 10vh;
  display: flex;
  justify-content: flex-start;
}

.footerContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footerInformationDiv {
  width: 100%;
  display: flex;
}

.customContentMainDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.customContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.customContentThird {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding-left: 25px;
}

.customContentLast {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding-left: 25px;
}

.socialMediaFooter {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

@media (max-width: 1688px) {
  /* .footerContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .socialMediaFooter {
    width: 40%;
  } */
}

@media (max-width: 768px) {
  .customContentMainDiv {
    align-items: center;
  }

  /* .footerContent {
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  } */
  /* 
  .customContent {
    width: 50%;
  } */

  /* .footerContent {
    padding: 30px 0px 0px 50px;
  } */
}

@media (max-width: 500px) {
  .footerDiv {
    padding: 50px 0px 50px 0px;
  }

  .customContent {
    padding: 0px 50px 30px 50px;
  }
}

@media (max-width: 576px) {
  .footerImgDiv {
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .footerImgDiv img {
    height: 80px !important;
  }

  .customContent {
    padding: 0px 80px 30px 80px !important;
  }

  .customContentLast {
    align-items: center;
    padding-left: 0px;
  }

  .customContentThird {
    align-items: center;
    padding-left: 0px;
  }

  .socialMediaFooter {
    width: 55%;
  }
}

@media (max-width: 992px) {
  .customContent {
    padding: 0px 30px 30px 30px;
  }
}
</style>
