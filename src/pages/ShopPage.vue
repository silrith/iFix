<template>
  <div class="shopMainDiv">
    <div class="col-lg-2 leftDiv">
      <ShopFilter
        :categoryList="categoryList"
        :brandList="brandList"
        :modelList="modelList"
      />
    </div>
    <div class="col-lg-7 middleDiv"><SpairParts :spairPartList="spairPartList"/></div>
    <div class="col-lg-3 rightDiv"><ShopFilter
        :categoryList="categoryList"
        :brandList="brandList"
        :modelList="modelList"
      /></div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import SpairPartCard from "@/components/HelperComponents/SpairPartCard";
import testCard from "@/components/HelperComponents/testCard";
import ShopFilter from "@/components/HelperComponents/ShopFilter";
import SpairParts from "@/components/HelperComponents/SpairParts";

export default {
  data() {
    return {
      categoryList: [],
      brandList: [],
      modelList: [],
      spairPartList: [],
    };
  },
  components: {
    SpairPartCard,
    testCard,
    ShopFilter,
    SpairParts
  },
  methods: {
    showToast() {
      toast.warning("Berk");
    },

    getAllCategories() {
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
    getAllBrands() {
      this.$ajax
        .get("brand/getallbrands")
        .then((response) => {
          if (response.data) {
            this.brandList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllModels() {
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
    getAllRepairTypes() {
      this.$ajax
        .get("repairType/getallrepairTypes")
        .then((response) => {
          if (response.data) {
            this.spairPartList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllCategories();
    this.getAllBrands();
    this.getAllModels();
    this.getAllRepairTypes();
  },
};
</script>

<style>
.shopMainDiv {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
}

.leftDiv {
  flex-basis: 50%;
  flex: 1;
  padding: 10px;
}

.middleDiv {
  flex-basis: 100%;
  padding: 10px;
}

.rightDiv {
  flex-basis: 50%;
  flex: 1;
  padding: 10px;
}

.shopContentDiv {
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.shopComponentsDiv {
  width: 20%;
  height: max-content;
  background-color: aquamarine;
}

.specialPartsDiv {
  background-color: blueviolet;
  width: 60%;
  height: 86vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
}

@media (max-width: 992px) {
  .leftDiv {
    order: 1;
  }
  .middleDiv {
    order: 2;
  }
  .rightDiv {
    order: 1;
  }
}
</style>
