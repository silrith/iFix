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
      <div class="col-lg-8">
        <RepairTypeCard class="col" :repairTypeList="repairTypeList" />
      </div>
      <div class="col-lg-4 col-sm-12">
        <ShoppingCart :shoppingCartList="shoppingCart"/>
      </div>
      <!-- <div v-if="shoppingCart.length > 0" class="col d-flex flex-column justify-content-start">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Repair Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in shoppingCart" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.model.modelName }}</td>
              <td>{{ item.model.brand.brandName }}</td>
              <td>{{ item.repairTypeCategory }}</td>
              <td>{{ item.repairTypePrice }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>{{ this.repairTypeList.reduce(function(sum, item) {
            return sum + item.price;
          }, 0) }}</tr>
          </tfoot>
        </table>
        <button class="btn btn-primary">Payment</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";
import RepairTypeCard from "@/components/MainComponents/RepairTypeCard";
import ShoppingCart from "@/components/MainComponents/ShoppingCart";

export default {
  data() {
    return {
      shoppingCart: [],
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
    ShoppingCart
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
