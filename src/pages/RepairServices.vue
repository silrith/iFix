<template>
  <div class="col-lg-12 mainBody">
    <div class="col-lg-12 mb-2" style="width: 100%">
      <img
        style="width: 100%; height: 32vh"
        src="@/assets/banners/tabletBanner.webp"
        alt=""
      />
    </div>
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

<style></style>
