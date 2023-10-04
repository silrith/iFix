<template>
  <div class="mainBody">
    <HomeBanner/>
    <HomeBadge />
    <!-- <section class="serviceSelectDiv">
      <div class="col-md-6">
        <h2 class="main-heading">
          {{ $t("homePage.letUsKnow") }}
          <strong>{{ $t("homePage.repaired") }}</strong>
        </h2>
        <div class="row justify-content-center">
          <div v-for="category in categoryList" class="col-md-8 col-lg-6 mb-1">
            <router-link
              :to="{
                path: '/services',
                query: { filter: 'brands' },
              }"
            >
              <div class="card repairCards mt-2">
                <div class="card-body" width="200">
                  <div class="row align-items-center">
                    <div class="col-7 col-md-7">
                      <h3>{{ category.categoryName }}</h3>
                      <p>{{ category.categoryDescription }}</p>
                    </div>
                    <div class="col-5 col-md-5">
                      <div class="device-bg">
                        <img
                          width="110"
                          class="img-fluid"
                          :src="category.categoryPicture"
                          alt="Repair Service"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section
      class="col-lg-12 row text-center d-flex justify-content-center align-items-center stepsDiv"
    >
      <div class="mt-3">
        <h2>{{ $t("homePage.repair4steps") }}</h2>
      </div>
      <div
        class="col-lg-9 mb-3 d-flex justify-content-center align-items-center"
      >
        <div
          class="col-lg-12 m-5 row d-flex justify-content-center align-items-center"
        >
          <div
            class="col-lg-4 col-md-6 col-sm-6 m-1 justify-content-center align-items-center"
          >
            <div class="justify-content-center align-items-center">
              <img
                class=""
                width="100"
                src="@/assets/icons/step-one.webp"
                alt="Card image cap"
              />
              <h4>{{ $t("homePage.1") }}</h4>
              <div class="card-body">
                <p class="card-text">
                  {{ $t("homePage.1desc") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-4 m-1 justify-content-center align-items-center"
          >
            <div class="justify-content-center align-items-center">
              <img
                class=""
                width="100"
                src="@/assets/icons/step-two.webp"
                alt="Card image cap"
              />
              <h4>{{ $t("homePage.2") }}</h4>
              <div class="card-body">
                <p class="card-text">
                  {{ $t("homePage.2desc") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-4 m-1 justify-content-center align-items-center"
          >
            <div class="justify-content-center align-items-center">
              <img
                class=""
                width="100"
                src="@/assets/icons/step-three.webp"
                alt="Card image cap"
              />
              <h4>{{ $t("homePage.3") }}</h4>
              <div class="card-body">
                <p class="card-text">
                  {{ $t("homePage.3desc") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-4 m-1 justify-content-center align-items-center"
          >
            <div class="justify-content-center align-items-center">
              <img
                class=""
                width="100"
                src="@/assets/icons/step-four.webp"
                alt="Card image cap"
              />
              <h4>{{ $t("homePage.4") }}</h4>
              <div class="card-body">
                <p class="card-text">
                  {{ $t("homePage.4desc") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light pb-md-0 pt-2" id="section-about">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="row align-items-end">
            <div class="col-md-12 mt-4">
              <h2 class="main-heading">
                {{ $t("homePage.chooseRepairOption") }}
              </h2>
            </div>

            <div class="col-md-12 col-lg-5">
              <img
                class="img-fluid d-lg-block"
                src="@/assets/photos/manShowsRight2.webp"
                alt="repair"
              />
            </div>

            <div class="col-md-12 col-lg-7 mb-4">
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/shop.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">{{ $t("homePage.visitStore") }}</h5>
                          <p>
                            {{ $t("homePage.visitStoreDesc") }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/booking.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">{{ $t("homePage.bookServiceVehicle") }}</h5>
                          <p>
                            {{ $t("homePage.bookServiceVehicleDesc") }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/smartPhoneNoBg.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">{{ $t("homePage.postYourDevice") }}</h5>
                          <p>
                            {{ $t("homePage.postYourDeviceDesc") }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import Carousel from "@/components/IgnoredComponents/Carousel.vue";
import HomeBanner from "@/components/MainComponents/HomeBanner.vue";
import HomeBadge from "@/components/MainComponents/HomeBadge.vue";

export default {
  name: "Home Page",
  data() {
    return {
      searchText:"",
      categoryList: [],
      modelList: [],
      selectedModel: null
    };
  },
  components: {
    Carousel,
    HomeBanner,
    HomeBadge
  },
  methods: {
    loadData() {
      this.$ajax
        .get("category/getallcategories")
        .then((response) => {
          if (response.data) {
            this.categoryList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
    imageToString(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataURL = reader.result;
          resolve(imageDataURL);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    uploadImage(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        this.$ajax
          .put("Brand/UploadBrandImage", {
            BrandPicture: reader.result,
            Id: 1,
          })
          .then((snapshot) => {
            window.qwe = reader.result;
            this.loadData();
          })
          .catch((error) => {});
      };
    },
  },
  mounted() {
    this.loadData();
    localStorage.setItem('cursorPointer', "home");
    this.selectedTab = localStorage.getItem('cursorPointer');
  },
  computed: {},
  created() {},
};
</script>

<style>
.mainBody {
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 0;
  overflow: hidden;
}

.serviceSelectDiv {
  display: flex;
  width: 100%;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

.main-heading {
  text-align: center;
  font-weight: 700;
  color: var(--text-black);
  font-size: 28px;
  margin-bottom: 40px;
  font-family: "Montserrat", sans-serif;
}

#section-about {
  width: 100%;
}

.chooseOptionCard {
  background-color: rgb(255, 255, 250, 0.3) !important;
}

.repairCards {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.faq-section {
  padding: 60px 0 80px;
  display: block;
}

@media (max-width: 767px) {
  .main-heading {
    font-size: 20px;
  }

  .faq-section {
    padding: 60px 0 80px;
    display: block;
    width: 100%;
    height: 570px;
  }

  .faq-section strong {
    font-size: large;
    text-align: flex-start;
  }

  .faq-section a {
    font-size: 90%;
    text-align: start;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .faq-section span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
}

.stepsDiv {
  background-color: rgb(220, 226, 232, 0.4);
}
</style>
