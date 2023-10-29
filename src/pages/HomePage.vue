<template>
  <div class="mainBody">
    <HomeBanner />
    <HomeBadge />
  </div>
</template>

<script>
import HomeBanner from "@/components/MainComponents/HomeBanner.vue";
import HomeBadge from "@/components/MainComponents/HomeBadge.vue";

export default {
  name: "Home Page",
  data() {
    return {
      searchText: "",
      categoryList: [],
      modelList: [],
      selectedModel: null,
    };
  },
  components: {
    HomeBanner,
    HomeBadge,
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
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
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
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
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
          .catch((error) => {
            toast.error(this.$t("apiErrors.axiosError"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
          });
      };
    },
  },
  mounted() {
    this.loadData();
    localStorage.setItem("cursorPointer", "home");
    this.selectedTab = localStorage.getItem("cursorPointer");
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
