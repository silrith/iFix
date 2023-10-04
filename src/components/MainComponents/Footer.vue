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
      <div class="footerContent">
        <div class="customContentFirst">
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
        <div class="customContent">
          <div class="socialMediaFooter">
            <img
              src="@/assets/footer/facebook.webp"
              alt="Login Picture"
              width="45"
              style="padding: 1px"
            />
            <img
              src="@/assets/footer/twitter.webp"
              alt="Login Picture"
              width="45"
              style="padding: 1px"
            />
            <img
              src="@/assets/footer/instagram.webp"
              alt="Login Picture"
              width="45"
              style="padding: 1px"
            />
            <img
              src="@/assets/footer/youtube.webp"
              alt="Login Picture"
              width="45"
              style="padding: 1px"
            />
          </div>
          <p class="txt2"><b>
            {{ $t("footer.rightSubtitle1") }} <br />
            {{ $t("footer.rightSubtitle2") }} <br />
            {{ $t("footer.rightSubtitle3") }}
          </b></p>
        </div>
        <div class="customContent">
          <div style="padding: 6px">
            <img
              src="@/assets/header/stripe.png"
              alt="I Fix Main Logo"
              style="height: 40px"
            />
          </div>
          <div class="customContent">
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
}

.footerImgDiv {
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 50px;
}

.footerContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 50px 30px 50px;
}

.footerInformationDiv{
  width: 100%;
  display: flex;
}

.customContentFirst {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 25%;
}

.customContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 25%;
  padding: 5px;
}

.socialMediaFooter {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 1688px){
  .footerContent{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .socialMediaFooter{
    width: 40%;
  }
}

@media (max-width: 1308px) {
  .footerContent {
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .customContent {
    width: 50%;
  }

  .footerContent{
    padding: 30px 0px 0px 50px;
  }
}
</style>
