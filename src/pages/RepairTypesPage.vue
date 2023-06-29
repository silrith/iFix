<template>
  <div class="col-lg-12 mainBody">
    <div class="col-lg-12 mb-2" style="width: 100%">
      <img
        style="width: 100%; height: 32vh"
        src="@/assets/photos/geo-pad-110-tablet-banner.jpg"
        alt=""
      />
    </div>
    <div class="col-lg-12 rangeDiv">
      <CustomRange />
    </div>
    <div class="row d-flex justify-content-around col-lg-12">
      <RepairTypeCard class="col" :repairTypeList="repairTypeList" />
      <div class="col d-flex flex-column justify-content-start">
        <div class="row col-lg-12 bg-primary">asdasd</div>
        <div class="row col-lg-12 bg-warning">asdasd</div>
        <div class="row col-lg-12 bg-info">asdasd</div>
        <div class="row col-lg-12 bg-primary">asdasd</div>
        <div class="row col-lg-12 bg-warning">asdasd</div>
        <div class="row col-lg-12 bg-info">asdasd</div>
        <hr class="" style="color: black" />
        <div class="col-lg-12 bg-danger d-flex justify-content-end">
          <h4>Total Price :</h4>
          <p class="m-1">3000 £</p>
        </div>
        <button class="btn btn-primary">Payment</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import RepairTypeCard from "@/components/MainComponents/RepairTypeCard";

export default {
  data() {
    return {
      repairTypeList: [],
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
  },
  mounted() {
    this.getFilteredRepairTypeDatas(this.$route.query.modelFilter);
  },
};
</script>

<style></style>
