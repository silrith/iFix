<template>
  <div class="checkOutPageDiv">
    <div class="parallelogram"></div>
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">Choose your</p>
      <p class="checkOutHeader">
        <span style="color: #f26d25">Repair</span> Option
      </p>
    </div>
    <div class="checkOutButtons">
      <button class="checkOutButton" @click="storeIn()">Visit Store</button>
      <button class="checkOutButton" @click="mailIn()">Mail in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModelSelect: false,
      selectedBrand: null,
      selectedModel: null,
      modelList: [],
      brandList: [],
      filterBrand: [{ key: "brandName", value: "", type: "string" }],
      filterModel: [{ key: "brandId", value: null, type: "int" }],
    };
  },
  methods: {
    storeIn() {
      this.$router.push({
        path: "/inStore",
      });
    },
    mailIn() {
      this.$router.push({
        path: "/mailIn",
      });
    },
  },
};
</script>

<style>
.checkOutPageDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 86vh;
  padding: 0 0 50px 0;
}

.checkOutButtons {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.checkOutButton {
  background-color: white;
  width: 200px;
  height: 60px;
  border: 1px solid #f26d25;
  border-radius: 10px;
  font-weight: 500;
  line-height: 1;
}

.checkOutButton:hover {
  background-color: #333333;
  color: #fff;
  border: none;
}

.checkOutButton:focus {
  background-color: #f26d25;
}

.checkOutButton:focus {
  color: white;
}

.checkOutHeaderDiv {
  padding: 50px 0;
  text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

@media (max-width: 992px) {
  .checkOutButtons {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .checkOutPageDiv {
    height: 60vh;
  }

  .checkOutButton {
    width: 130px;
    font-size: 13px;
  }

  .checkOutHeader {
    font-size: 40px;
  }
}
</style>
