<template>
  <div class="homeBanner">
    <div class="homeBannerLeftDiv">
      <div class="homeBannerLeftText">
        <div class="txt3">
          <p>
            <b
              ><span style="color: black">IFIX.</span>
              {{ this.$t("homeBanner.repairShop") }}</b
            >
          </p>
        </div>
        <div class="txt4" style="height: max-content">
          <p>
            <b>{{ this.$t("homeBanner.header1") }}</b
            ><br /><b>{{ this.$t("homeBanner.header2") }}</b>
          </p>
        </div>
        <div>
          <p class="txt2">
            {{ this.$t("homeBanner.subtitle1") }}
            <br />{{ this.$t("homeBanner.subtitle2") }} <br />{{
              this.$t("homeBanner.subtitle3")
            }}
          </p>
        </div>
        <div class="homeBannerSearchDiv">
          <div class="wrap-input103 validate-input">
            <input
              list="models"
              class="inputBanner103"
              type="search"
              name="search"
              :placeholder="$t('header.searchBox')"
              v-model="searchText"
              @input="filterOptions"
            />
            <ul id="models2" class="dropdown" v-show="showDropdown">
              <router-link
                v-for="model in filteredModels"
                :to="{
                  path: '/serviceResult',
                  query: { modelId: model.id },
                }"
                style="text-decoration: none"
                ><li class="txt2" @click="selectModel(model)">
                  {{ model.modelName }}
                </li></router-link
              >
            </ul>
            <span class="focus-input103"></span>
            <span class="symbol-input103">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-banner103-form-btn">
            <router-link to="/shop"
              ><button class="btn-Banner">
                {{ this.$t("homeBanner.button") }}
              </button></router-link
            >
          </div>
        </div>
        <div class="bannerLeftFooterText">
          <div class="footerTextDiv1">
            <p class="txt5">
              6
              <span style="color: #f26d25">{{
                this.$t("homeBanner.title1")
              }}</span
              ><br />
              <span class="txt4">{{ this.$t("homeBanner.title2") }}</span>
            </p>
          </div>
          <div class="footerTextDiv2">
            <p class="txt5">
              {{ this.$t("homeBanner.title3") }}
              <span style="color: #f26d25">{{
                this.$t("homeBanner.title4")
              }}</span
              ><br />
              <span class="txt4">{{ this.$t("homeBanner.title5") }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="homeBannerRightDiv" style="margin-top: 30px">
      <div>
        <div class="homeBannerRightDivTop">
          <div>
            <img
              src="@/assets/homebanner/3.webp"
              alt="Home Banner Picture 3"
              style="width: fit-content; max-width: 100%"
            />
          </div>
          <div class="bgDiv">
            <img
              class="mb-3"
              src="@/assets/homebanner/1.webp"
              alt="Home Banner Picture 1"
              style="width: fit-content; max-width: 100%"
            />
          </div>
          <div class="">
            <img
              src="@/assets/homebanner/4.webp"
              alt="Home Banner Picture 4"
              style="width: fit-content; max-width: 100%"
            />
          </div>
        </div>
      </div>
      <div class="socialMedia">
        <a
          href="https://www.facebook.com/profile.php?id=100063571123762"
          target="_blank"
        >
          <img
            class="bannerSocialMediaLogo"
            src="@/assets/footer/facebook.webp"
            alt="Facebook Logo"
            width="45"
        /></a>
        <a
          href="https://www.linkedin.com/in/ifix-wien-a7a997100/"
          target="_blank"
        >
          <img
            class="bannerSocialMediaLogo"
            src="@/assets/footer/linkedin.webp"
            alt="Linkedin Logo"
            width="45"
        /></a>
        <a href="https://www.instagram.com/ifix.at_1010_wien/" target="_blank">
          <img
            class="bannerSocialMediaLogo"
            src="@/assets/footer/instagram.webp"
            alt="Instagram Logo"
            width="45"
        /></a>
        <a
          href="https://www.youtube.com/channel/UCTYIels_GZ7WHS9yFyShrlQ"
          target="_blank"
        >
          <img
            class="bannerSocialMediaLogo"
            src="@/assets/footer/youtube.webp"
            alt="Youtube Logo"
            width="45"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      showDropdown: false,
      categoryList: [],
      modelList: [],
      selectedModel: null,
    };
  },
  methods: {
    loadModels() {
      this.$ajax
        .get("model/getallmodels")
        .then((response) => {
          if (response.data) {
            this.modelList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterOptions() {
      this.showDropdown = true;
      if (this.searchText.length < 3) {
        this.showDropdown = false;
      }
    },
    selectModel(model) {
      this.selectedModel = model;
      this.searchText = model.modelName;
      this.showDropdown = false;
    },
    filterOptions() {
      this.showDropdown = true;
      if (this.searchText.length < 3) {
        this.showDropdown = false;
      }
    },
  },
  mounted() {
    this.loadModels();
  },
  computed: {
    filteredModels() {
      if (this.searchText.length >= 3) {
        return this.modelList.filter((model) =>
          model.modelName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        return [];
      }
    },
  },
};
</script>

<style>
.homeBanner {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 100px 30px 50px 30px;
  align-items: center;
  justify-content: center;
}

.homeBannerLeftDiv {
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0 15px;
}

.homeBannerRightDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.homeBannerRightDivTop {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.homeBannerLeftText {
  width: 100%;
}

.homeBannerSearchDiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
}

.bannerLeftFooterText {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0px;
}

.footerTextDiv1 {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0 0 0;
}

.footerTextDiv2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0 0 0;
}

.socialMedia {
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px 0 0 0;
}

.bannerSocialMediaLogo {
  margin: 5px;
}

.banner100-pic {
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bgDiv {
  display: flex;
  background-image: url("@/assets/homebanner/2.webp");
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  padding: 0px 40px 10px 10px;
}

.homeBannerH {
  font-size: 40px;
  line-height: 40px;
  flex-wrap: wrap;
}

.headerSearch::placeholder {
  color: rgb(255, 255, 255, 0.5);
  font-size: 12px;
}

.headerButton {
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  font-weight: 600;
  height: 2.5rem;
  border-color: #ff6700;
  text-align: center;
  background-color: white;
}

.banner103-form {
  padding: 30px 50px 40px 50px;
  width: 100%;
  background-color: #dee2e6;
}

.wrap-input103 {
  position: relative;
  width: 60%;
  z-index: 1;
  margin-bottom: 10px;
  padding: 20px 0 0 0;
}

.selectBanner {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #f26d25;
  height: 40px;
  border-radius: 25px;
  padding: 0 0 0 68px;
  border: none;
}

.selectBanner:hover {
  border: none;
}

.selectBanner option:hover {
  background-color: #f26d25;
  background: blue;
}

.selectBanner:focus {
  color: #666666;
  padding-left: 15px;
  border: none;
  outline: none;
}

.container-banner103-form-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

.btn {
  text-decoration: none !important;
}

.btn-Banner {
  color: white;
  background: #333333;
  font-family: Poppins-Medium;
  font-size: 0.8rem;
  border-radius: 25px;
  height: 40px;
  width: 100%;
  padding: 0 40px 0 40px;
}

.btn-Banner:hover {
  background-color: #333333;
  color: #fff;
}

.inputBanner103 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #f26d25;
  color: white;
  height: 40px;
  border-radius: 25px;
  padding: 0 0 0 68px;
  border: none;
}

.inputBanner103::placeholder {
  color: #fff;
}

.focus-input103 {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: #f26d25;
}

.symbol-input103 {
  font-size: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 0px 0 30px;
  pointer-events: none;
  color: white;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

#models2 {
  position: absolute;
  top: 100%;
  width: 95%;
  background-color: white;
  list-style: none;
  margin: 3px;
  margin-left: 8px;
  padding: 0;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  font-family: Poppins-Regular;
  font-size: 12px;
  max-height: 280px;
  overflow-y: auto;
  border-radius: 5px;
}

#models2 li {
  padding: 10px;
  color: black;
}

#models2 li:hover {
  background-color: #f26d25;
  color: white;
  cursor: pointer;
}

.inputBanner103:focus + .focus-input103 + .symbol-input103 {
  color: white;
  padding-left: 15px;
  border: none !important;
  outline: none !important;
}

.wrap-input103 input[type="search"] {
  outline: none;
}

@media (max-width: 1200px) {
  .homeBanner {
    width: 100%;
  }
  .txt4 {
    font-size: 25px;
  }

  .txt5 {
    font-size: 35px;
  }
}
</style>
