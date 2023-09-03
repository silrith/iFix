<template>
  <div class="spairParts">
    <div class="modelFilter">
      <label class="" style="color: #f25d26; font-size: 13px">
        <b>{{ $t("shopFilter.model") }}</b>
      </label>
      <hr style="width: 100%" />
      <ul>
        <li v-for="model in modelList" :key="model.id">
          <label class="">
            <input
              type="checkbox"
              name="checkbox"
              v-model="this.isCheckedModel[model.modelName]"
              @change="getFilteredSpairPartsByModel(model.modelName)"
            />
            {{ model.modelName }}
          </label>
          <hr style="width: 100%" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandFilter: null,
      isCheckedBrand: {},
      isCheckedCategory: {},
      isCheckedModel: {},
      filteredSpairPartList: [],
      originalSpairPartList: [],
      finalSpairPartList: [],
    };
  },
  props: {
    categoryList: Array,
    brandList: Array,
    modelList: Array,
  },
  methods: {
    getFilteredSpairPartsByModel(model) {
      if (this.isCheckedModel[model]) {
        if (this.originalSpairPartList.length == 0)
          this.originalSpairPartList = this.$parent.spairPartList;
        this.filteredSpairPartList = this.originalSpairPartList.filter(
          (x) => x.model.modelName === model
        );
        this.filteredSpairPartList.forEach((element) => {
          if (!this.finalSpairPartList.includes(element)) {
            this.finalSpairPartList.push(element);
          }
        });
        this.$parent.spairPartList = this.finalSpairPartList;
      } else {
        this.finalSpairPartList = this.finalSpairPartList.filter(
          (x) => x.model.modelName !== model
        );
        if (this.finalSpairPartList.length == 0) {
          this.$parent.spairPartList = this.originalSpairPartList;
        } else this.$parent.spairPartList = this.finalSpairPartList;
      }
    },
  },
};
</script>

<style>
.spairParts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 18px;
  width: 100%;
  max-height: 715px !important;
  overflow-y: auto;
  font-family: Poppins-bold;
  font-size: 11px;
  color: #666;
  border: 1px solid #666;
  background-color: #ffffff;
}

.spairParts label {
  display: flex;
  align-items: center;
}

.spairParts input[type="checkbox"] {
  margin: 5px;
  border: 2px solid red;
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: white;
  outline: #f25d26;
}

.spairParts input[type="checkbox"]:checked + label {
  border-color: green;
}

.spairParts li {
  list-style-type: none;
  font-size: 12px;
}
</style>
