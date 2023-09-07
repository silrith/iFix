<template>
  <div class="serviceMainDiv">
    <div class="servicePageHeader">
      <p class="txt5">
        {{ $t("services.our") }} <span style="color: #ff6700">Services</span>
      </p>
    </div>
    <div style="display: flex; flex-direction: column">
      <p class="txt2">
        <b>{{ $t("services.subtitle1") }}</b>
      </p>
      <div class="serviceSearchDiv">
        <div class="wrapSearch-input103">
          <input
            list="models"
            class="inputSearch103"
            type="search"
            name="search"
            :placeholder="$t('header.searchBox')"
            v-model="searchText"
            @input="filterOptions"
          />
          <ul id="models" class="dropdown" v-show="showDropdown">
            <router-link
              v-for="model in filteredModels"
              :to="{
                path: '/models',
                query: { filter: model.category.id },
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
      </div>
      <div class="searchSub2">
        <p
          class="txt2"
          style="color: #ff6700; font-size: 18px;"
        >
          <b>{{ $t("contact.or") }}</b>
        </p>
        <p class="txt2">
          <b>{{ $t("services.subtitle2") }}</b>
        </p>
      </div>
    </div>
    <div class="serviceCategoryDiv">
      <Card v-for="category in this.categoryList" :cardElement="category" />
    </div>
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import Card from "@/components/HelperComponents/CategoryCard.vue";

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
  },
  mounted() {
    this.loadCategories();
    this.loadModels();
    // if (this.$route.query.filter == "brands") {
    //   this.getBrandDatas();
    // }
    // localStorage.removeItem("reloaded");
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
.serviceMainDiv {
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 30px 45px 30px;
  justify-content: center;
  text-align: center;
}

.servicePageHeader{
  padding: 30px 0 0 0;
  text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc;
}

.search-container {
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
}

#models {
  position: absolute;
  top: 100%;
  width: 85%;
  background-color: white;
  list-style: none;
  margin: 3px;
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

#models li {
  padding: 10px;
  color: black;
}

#models li:hover {
  background-color: #f26d25;
  color: white;
  cursor: pointer;
}

.serviceCategoryDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 42px 0;
}

.serviceSearchDiv {
  width: 100%;
  position: relative;
  display: inline-block;
}

.wrapSearch-input103 {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #333 !important;
}

.wrapSearch-input103 input[type="search"] {
  outline: none;
}

.wrapSearch-input103 input[type="search"]:focus {
  background-color: #333;
}

.searchSub2{
  padding: 30px 0 0 0;
}

@media(max-width: 779px){
  .servicePageHeader{
    padding: 0;
  }
  
  .searchSub2{
    padding:10px 0 0 0;
  }

  .serviceCategoryDiv{
    padding: 0;
  }
}
</style>