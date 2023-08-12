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
    <div class="row d-flex justify-content-around col-lg-12">
      <div class="col-lg-8">
        <RepairTypeCard class="col" :repairTypeList="repairTypeList" />
      </div>
      <div class="col-lg-4 justify-content-between">
          <ShoppingCart :shoppingCartList="shoppingCart"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import RepairTypeCard from "@/components/IgnoredComponents/RepairTypeCard";
import ShoppingCart from "@/components/IgnoredComponents/ShoppingCart";

export default {
  data() {
    return {
      shoppingCart: [],
      repairTypeList: [],
      showList: false,
      filterModel: [
        { key: "modelId", value: 0, type: "int" },
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
    RepairTypeCard,
    ShoppingCart,
  },
  methods: {
    getFilteredRepairTypeDatas(id) {
      this.filterModel[0].value = parseInt(id);
      this.$ajax
        .post("repairType/SearchRepairTypes", this.filterModel)
        .then((response) => {
          if (response.data) {
            this.repairTypeList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleList(show) {
      this.showList = show;
    },
  },
  mounted() {
    this.getFilteredRepairTypeDatas(this.$route.query.modelFilter);
  },
};
</script>

<style>
</style>
