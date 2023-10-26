<template>
  <div class="spairParts">
    <div class="modelFilter">
      <label class="" style="color: #f25d26; font-size: 13px">
        <b>{{ $t("shopFilter.model") }}</b>
      </label>
      <hr style="width: 100%" />
      <ul class="ulElements">
        <li v-for="model in modelList" :key="model.id">
          <label class="liLabel">
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
    modelList: Array,
  },
  methods: {
    getFilteredSpairPartsByModel(model) {
      if (this.isCheckedModel[model]) {
        if (this.originalSpairPartList.length == 0)
          this.originalSpairPartList = this.$parent.repairTypeList;
        this.filteredSpairPartList = this.originalSpairPartList.filter(
          (x) => x.model.modelName === model
        );
        this.filteredSpairPartList.forEach((element) => {
          if (!this.finalSpairPartList.includes(element)) {
            this.finalSpairPartList.push(element);
          }
        });
        this.$parent.repairTypeList = this.finalSpairPartList;
      } else {
        this.finalSpairPartList = this.finalSpairPartList.filter(
          (x) => x.model.modelName !== model
        );
        if (this.finalSpairPartList.length == 0) {
          this.$parent.repairTypeList = this.originalSpairPartList;
        } else this.$parent.repairTypeList = this.finalSpairPartList;
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
  border: 2px solid #666;
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

@media(max-width:1450px){
  .spairParts{
    height: 167px;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }

  .modelFilter{
    width: 100%;
    overflow-x: auto;
  }

  .modelFilter ul{
    display: flex;
    max-width: 100%;
    padding: 0 3px;
  }

  .liLabel{
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
    width: max-content;
    font-size: 10px;
  }
}
</style>
