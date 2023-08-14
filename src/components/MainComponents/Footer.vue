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
          <p class="txt2">Einfach schnell und unkompliziert!</p>
          <p class="txt2">Qualitat zu fairem Preis!</p>
          <p class="txt2">Deine Handywerkstatt!</p>
          <div>
            <p class="txt2">
              <b
                >Copyright IFix © {{ new Date().getFullYear() }} |
                {{ $t("footer.allRightsReserved") }}</b
              >
            </p>
          </div>
        </div>
        <div class="customContent">
          <p class="txt3">Kontakt</p>
          <div style="display: flex; text-align: flex-start">
            <font-awesome-icon
              :icon="['fas', 'map']"
              style="
                color: rgb(255, 103, 0);
                font-size: 25px;
                margin-right: 15px;
              "
            />
            <p class="txt2">
              Wien 1010 Standort, Rabensteig 1, <br />
              1010 Wien, Austria
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
              src="@/assets/header/facebook.png"
              alt="Login Picture"
              width="45"
            />
            <img
              src="@/assets/header/twitter.png"
              alt="Login Picture"
              width="45"
            />
            <img
              src="@/assets/header/instagram.png"
              alt="Login Picture"
              width="45"
            />
            <img
              src="@/assets/header/youtube.png"
              alt="Login Picture"
              width="45"
            />
          </div>
          <p class="txt2">
            Folge uns auf den sozialen <br />
            Netzwerken und bleibe auf <br />
            dem neuesten Stand!
          </p>
        </div>
        <div class="customContent">
          <div>
            <img
              src="@/assets/header/stripe.png"
              alt="I Fix Main Logo"
              style="height: 40px"
            />
          </div>
          <div class="customContent">
            <div style="display: flex">
              <img
                src="@/assets/header/mastercard.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/cartesBancaries.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/apple-pay.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/ideal.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/sepa.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
            </div>
            <div style="display: flex">
              <img
                src="@/assets/header/visa.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/paypal.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/american-express.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/klarna.png"
                alt="I Fix Main Logo"
                style="height: 40px"
              />
              <img
                src="@/assets/header/bancontact.png"
                alt="I Fix Main Logo"
                style="height: 40px"
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
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>