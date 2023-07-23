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
      :modelList="modelList"
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
      isModel: true,
      isRepair: false,
      modelList: [],
      brandList: [],

      filterModel: [
        { key: "brandId", value: 0, type: "int" },
        // { key: "categoryDescription", value: "sm", type: "string" },
        // { key: "id", value: 1, type: "int" },
        // { key: "isActive", value: true, type: "bool" },
        // { key: "startDate", value: "20.01.2020", type: "datetime" },
        // { key: "endDate", value: "29.05.2023", type: "datetime" },
      ],
    };
  },
  components: {
    CustomRange,
    ProductCard,
  },
  methods: {
    getFilteredModelDatas(id) {
      this.filterModel[0].value = parseInt(id);
      this.$ajax
        .post("model/SearchModel", this.filterModel)
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
    this.getFilteredModelDatas(this.$route.query.brandFilter);
  },
};
</script>

<style></style>
