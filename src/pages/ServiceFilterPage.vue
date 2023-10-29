<template>
  <div class="serviceFilterPageDiv">
    <!-- <div class="col-lg-12 rangeDiv">
      <CustomRange />
    </div> -->
    <div class="serviceSelectDiv">
      <p class="serviceFilterText1">
        Unsere <span style="color: #f26d25">Services</span>
      </p>
      <p class="serviceFilterText2">What kind of device is it ?</p>
      <p class="serviceFilterText3">
        You're in good hands-we do more than 500 repairs every month
      </p>
    </div>
    <div class="serviceSelectDiv">
      <select
        v-model="selectedBrand"
        @change="getFilteredModelDatas(selectedBrand)"
      >
        <option class="txt2" disabled selected :value="null">
          {{ $t("shopFilter.brand") }}
        </option>
        <option v-for="brand in brandList" :value="brand.id">
          {{ brand.brandName }}
        </option>
      </select>
      <select
        v-if="showModelSelect"
        class="serviceSelect"
        v-model="selectedModel"
        @change="setModelName(selectedModel)"
      >
        <option disabled selected :value="null">
          {{ $t("shopFilter.model") }}
        </option>
        <option v-for="model in modelList" :value="model.id">
          {{ model.modelName }}
        </option>
      </select>
    </div>
    <div class="serviceSelectDiv">
      <div class="container-login102-form-btn">
        <button
          class="btn btn-block py-2 btn-login"
          @click="goModelRepairTypes()"
        >
          {{ $t("serviceFilter.continue") }}
        </button>
      </div>
    </div>
    <div class="parallelogram"></div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import ProductCard from "@/components/IgnoredComponents/ProductCard";

export default {
  data() {
    return {
      showModelSelect: false,
      selectedBrand: null,
      selectedModel: null,
      modelList: [],
      brandList: [],
      filterBrand: [{ key: "brandName", value: "", type: "string" }],
      filterModel: [{ key: "brandId", value: null, type: "int" }],
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    getFilteredModelDatas(id) {
      this.filterModel[0].value = parseInt(id);
      this.$ajax
        .post("model/SearchModel", this.filterModel)
        .then((response) => {
          if (response.data) {
            this.modelList = response.data.filter(
              (x) => x.modelCategoryId === parseInt(this.$route.query.filter)
            );
            if (this.modelList.length > 0) this.showModelSelect = true;
            else {
              toast.error(this.$t("serviceFilter.noModel"), {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
                toastStyle: {
                  fontSize: "12px",
                },
              });
              this.showModelSelect = false;
            }
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
    getFilteredBrandDatas() {
      this.$ajax
        .get("brand/GetAllBrands")
        .then((response) => {
          if (response.data) {
            this.brandList = response.data;
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
    setModelName(id) {
      this.selectedModel = id;
    },
    goModelRepairTypes() {
      if (this.selectedModel != null) {
        this.$router.push({
          path: "/serviceResult",
          query: { modelId: this.selectedModel },
        });
      } else {
        toast.error(this.$t("serviceFilter.chooseModel"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
      }
    },
  },
  mounted() {
    this.getFilteredBrandDatas();
  },
};
</script>

<style>
.serviceFilterPageDiv {
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
}

.serviceSelectDiv {
  width: 30%;
  text-align: start !important;
}

.serviceSelectDiv select {
  width: 100%;
  height: 40px;
  border: 2px solid #f79533;
  border-radius: 5px;
  margin: 10px;
}

.serviceSelectDiv select::after {
  border: none;
  outline: none;
}

.serviceSelectDiv select[data-chosen] {
  border: 2px solid #f79533 !important;
}

.serviceSelectDiv select option:hover {
  background-color: #f79533;
}

.serviceSelectDiv option:focus {
  border: 2px solid #f79533;
}

.serviceSelectDiv select:focus {
  border: 2px solid rgb(247, 149, 51, 0.5);
  outline: none;
}

.serviceSelectDiv select {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  text-align-last: flex-start;
  padding: 0px 5px;
  color: #666666;
  resize: none;
  text-align: flex-start !important;
}

.serviceSelectDiv option:hover {
  background-color: #f79533;
}

.container-login102-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

.btn-login {
  background-color: #f26d25;
  color: #fff;
}

.btn-login:hover {
  background-color: #333333;
  color: #fff;
}

.serviceFilterText1 {
  font-family: Poppins-bold;
  width: 100%;
  font-size: 50px;
  line-height: 1;
  text-align: start !important;
}

.serviceFilterText2 {
  font-family: Poppins-Regular;
  width: 100%;
  font-weight: 600;
  text-align: start !important;
  color: #666666;
}

.serviceFilterText3 {
  font-family: Poppins-Regular;
  width: 100%;
  font-weight: 600;
  text-align: start !important;
  color: #666666;
}

@media (max-width: 992px) {
  .serviceSelectDiv {
    width: 80%;
  }

  .serviceFilterPageDiv {
    max-height: 78vh;
  }
}
</style>
