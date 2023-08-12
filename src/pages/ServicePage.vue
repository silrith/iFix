<template>
  <div class="serviceMainDiv">
    <div>
      <p class="txt5">Unsere <span style="color: #ff6700">Services</span></p>
    </div>
    <div style="display: flex; flex-direction: column">
      <div>
        <p class="txt2"><b>Suche dein Modell über die Suchbar</b></p>
      </div>
      <div class="serviceSearchDiv">
        <div
          class="wrapSearch-input103 validate-input"
          data-validate="Valid full name is required: Michael Jordan"
        >
          <input
            list="models"
            class="inputSearch103"
            type="search"
            name="search"
            placeholder="Search"
            v-model="searchText"
            @input="filterOptions"
          />
          <datalist id="models">
            <option v-for="model in filteredModels">
              {{ model.modelName }}
            </option>
          </datalist>
          <span class="focus-input103"></span>
          <span class="symbol-input103">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div style="text-align: center">
        <p
          class="txt2"
          style="color: #ff6700; font-size: 18px; padding: 10px 0 0 0"
        >
          <b>ODER</b>
        </p>
        <p class="txt2"><b>verwende die Auswahlfhilfe</b></p>
      </div>
    </div>
    <div class="serviceCategoryDiv">
      <Card v-for="category in this.categoryList" :cardElement="category" />
    </div>
  </div>
</template>

<style>
.serviceMainDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 30px 45px 30px;
}

.serviceCategoryDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.serviceSearchDiv {
  width: 100%;
  position: relative;
  display: inline-block;
}

.wrapSearch-input103 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
  padding: 20px 0 0 0;
}

.inputSearch103 {
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

.inputSearch103::placeholder {
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

.inputSearch103:focus + .focus-input103 + .symbol-input103 {
  color: white;
  padding-left: 15px;
  border: none !important;
  outline: none !important;
}

.wrapSearch-input103 input[type="search"] {
  outline: none;
}

.wrapSearch-input103 datalist{
  background-color: #f26d25;
}
</style>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import Card from "@/components/HelperComponents/CategoryCard.vue";
// import ProductCard from "@/components/MainComponents/ProductCard";

export default {
  data() {
    return {
      // modelList: [],
      // brandList: [],
      searchText: '',
      categoryList: [],
      modelList: [],
    };
  },
  components: {
    CustomRange,
    Card,
  },
  methods: {
    loadCategories() {
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
  },
  mounted() {
    this.loadCategories();
    this.loadModels();
    // if (this.$route.query.filter == "brands") {
    //   this.getBrandDatas();
    // }
    // localStorage.removeItem("reloaded");
  },
  computed:{
    filteredModels() {
      if (this.searchText.length >= 3) {
        return this.modelList.filter(model => model.modelName.toLowerCase().includes(this.searchText.toLowerCase()));
      } else {
        return [];
      }
    }
  }
};
</script>

<!-- <template>
  <div class="col-lg-12 mainBody">
    <div class="col-lg-12 rangeDiv">
      <CustomRange />
    </div>
    <ProductCard
      ref="childComponent"
      :brandList="brandList"
      :isBrand="isBrand"
      :isModel="isModel"
    />
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import ProductCard from "@/components/MainComponents/ProductCard";

export default {
  data() {
    return {
      isBrand: false,
      isModel: false,
      isRepair: false,
      modelList: [],
      brandList: [],
    };
  },
  components: {
    CustomRange,
    ProductCard,
  },
  methods: {
    getBrandDatas() {
      this.$ajax
        .get("brand/GetAllBrands")
        .then((response) => {
          if (response.data) {
            this.brandList = response.data;
            this.isBrand = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.$route.query.filter == "brands") {
      this.getBrandDatas();
    }
    localStorage.removeItem("reloaded");
  },
};
</script>

<style></style> -->
