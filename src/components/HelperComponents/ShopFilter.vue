<template>
  <div class="spairParts">
    <div class="brandFilter">
      <label class="" style="color: #f25d26; font-size: 13px">
        <input type="checkbox" name="checkbox" />
        <b>{{ $t('shopFilter.brand') }}</b>
      </label>
      <hr style="width: 100%" />
      <ul>
        <li v-for="brand in brandList" :key="brand.id">
          <label class="">
            <input type="checkbox" name="checkbox" />
            {{ brand.brandName }}
          </label>
          <hr style="width: 100%" />
        </li>
      </ul>
    </div>
    <div class="modelFilter">
      <label class="" style="color: #f25d26; font-size: 13px">
        <input type="checkbox" name="checkbox" />
        <b>{{ $t('shopFilter.model') }}</b>
      </label>
      <hr style="width: 100%" />
      <ul>
        <li v-for="model in modelList" :key="model.id">
          <label class="">
            <input type="checkbox" name="checkbox" />
            {{ model.modelName }}
          </label>
          <hr style="width: 100%" />
        </li>
      </ul>
    </div>
    <div class="categoryFilter">
      <label class="" style="color: #f25d26; font-size: 13px">
        <input type="checkbox" name="checkbox" />
        <b>{{ $t('shopFilter.category') }}</b>
    </label>
      <hr style="width: 100%" />
      <ul>
        <li v-for="category in categoryList" :key="category.id">
          <label>
            <input type="checkbox" name="checkbox" />
            {{ category.categoryName }}
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
    return {};
  },
  props: {
    categoryList: Array,
    brandList: Array,
    modelList: Array,
  },
  methods: {},
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
