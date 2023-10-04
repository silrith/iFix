<template>
  <div class="homeBanner">
    <div class="homeBannerLeftDiv">
      <div class="homeBannerLeftText">
        <div class="txt3">
          <p>
            <b>IFIX. {{ this.$t("homeBanner.repairShop") }}</b>
          </p>
        </div>
        <div class="txt4" style="height: max-content">
          <p>
            <b>{{ this.$t("homeBanner.header1") }}</b
            ><br /><b>{{ this.$t("homeBanner.header2") }}</b>
          </p>
        </div>
        <div class="">
          <p class="txt2">
            We are business consultant is company with a wide array of
            <br />skills who assists business owners with their endeavors.
            <br />Consultants are knowledgeable because of their education and
            previous experience.
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
              ><button class="btn-Banner">Go Shop</button></router-link
            >
          </div>
        </div>
        <div class="bannerLeftFooterText">
          <div class="footerTextDiv1">
            <p class="txt5">
              6 <span style="color: #f26d25">Monate</span><br />
              <span class="txt4">Garantie</span>
            </p>
          </div>
          <div class="footerTextDiv2">
            <p class="txt5">
              faire <span style="color: #f26d25">Preise</span><br />
              <span class="txt4">Transparent & fix</span>
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
              src="@/assets/header/3.png"
              alt=""
              style="width: fit-content; max-width: 100%"
            />
          </div>
          <div class="bgDiv">
            <img
              class="mb-3"
              src="@/assets/header/1.png"
              alt=""
              style="width: fit-content; max-width: 100%"
            />
          </div>
          <div class="">
            <img
              src="@/assets/header/4.png"
              alt=""
              style="width: fit-content; max-width: 100%"
            />
          </div>
        </div>
      </div>
      <div class="socialMedia">
        <img
          class="bannerSocialMediaLogo"
          src="@/assets/footer/facebook.webp"
          alt="Login Picture"
          width="45"
        />
        <img
          class="bannerSocialMediaLogo"
          src="@/assets/footer/twitter.webp"
          alt="Login Picture"
          width="45"
        />
        <img
          class="bannerSocialMediaLogo"
          src="@/assets/footer/instagram.webp"
          alt="Login Picture"
          width="45"
        />
        <img
          class="bannerSocialMediaLogo"
          src="@/assets/footer/youtube.webp"
          alt="Login Picture"
          width="45"
        />
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
  methods:{
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
  background-image: url(data:image/png;base64,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);
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
