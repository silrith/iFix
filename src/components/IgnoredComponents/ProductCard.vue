<!-- <template>
  <div
    class="col-lg-12 mb-2 d-flex flex-row justify-content-center"
    style="width: 80%"
  >
    <div class="row text-center justify-content-center">
      <div
        v-if="isBrand"
        v-for="brand in brandList"
        :key="brand.id"
        class="col-md-6 col-lg-3 col-sm-12 mb-1"
      >
        <router-link
          :to="{
            path: '/models',
            query: { brandFilter: brand.id },
          }"
        >
          <div
            class="card repairCards mt-2"
          >
            <div class="card-body" width="200">
              <div class="row align-items-center">
                <div class="col-7 col-md-7">
                  <h4>{{ brand.brandName }}</h4>
                </div>
                <div class="col-5 col-md-5">
                  <div class="device-bg">
                    <img
                      width="110"
                      class="img-fluid bg-white"
                      :src="brand.brandPicture"
                      alt="Repair Service"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div
        v-if="isModel"
        v-for="model in modelList"
        :key="model.id"
        class="col-md-6 col-lg-3 col-sm-12 mb-1"
      >
        <router-link
          :to="{
            path: '/repairTypes',
            query: { modelFilter: model.id },
          }"
        >
          <div class="card repairCards mt-2">
            <div class="card-body" width="200">
              <div class="row align-items-center">
                <div class="col-7 col-md-7">
                  <h4>{{ model.modelName }}</h4>
                </div>
                <div class="col-5 col-md-5">
                  <div class="device-bg">
                    <img
                      width="110"
                      class="img-fluid bg-white"
                      :src="model.brand.brandPicture"
                      alt="Repair Service"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelList: [],
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
  props: {
    brandList: Array,
    modelList: Array,
    isModel: Boolean,
    isBrand: Boolean,
  },
  methods: {
  },
};
</script> -->
<template>
  asd
</template>