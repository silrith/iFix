<template>
  <div
    class="col-lg-12 mb-2 d-flex flex-row justify-content-center"
    
  >
    <div class="row text-center justify-content-center">
      <div
        v-for="repairType in repairTypeList"
        :key="repairType.id"
        class="item-container text-center"
      >
        <div class="main-item">
          <img class="main-item" :src="repairType.repairTypePicture" :alt="repairType.repairTypeCategory" />
        </div>
        <h2 class="item-heading">
          {{ repairType.repairTypeCategory }}
        </h2>
        <p class="item-description">
          {{ repairType.warrantyPeriod }}
        </p>
        <p class="item-description">Delivery in {{ repairType.deadLine }}</p>
        <p class="item-price">
          {{ repairType.repairTypePrice }} <span>£</span>
        </p>
        <button class="item-cart-btn" @click="addToShoppingCart(repairType)">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomRange from "@/components/MainComponents/CustomRange";

export default {
  data() {
    return {};
  },
  props: {
    repairTypeList: Array,
    customMethod: Function,
  },
  components: {
    CustomRange,
  },
  methods: {
    addToShoppingCart(item) {
      if(!this.$parent.shoppingCart.includes(item))
        this.$parent.shoppingCart.push(item);
      else
        alert("Mevcut bileşen");
    },
  },
  mounted() {},
};
</script>

<style>
.item-container {
    background-color: #fff;
    width: 15rem;
    margin: .7rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.main-item {
  width: 9vh;
    display: flex;
    margin: 0 auto;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.item-heading {
    text-transform: capitalize;
    font-size: 1rem;
    height: 2.5rem;
}

.item-description {
    margin: .5rem 0;
    font-size: .9rem;
    font-weight: 200;
}

.item-price {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: .5rem;
}

.item-cart-btn {
    border: none;
    background-color: transparent;
    margin: 0 auto;
    width: 100%;
    border: 1px;
    font-weight: bold;
    padding: .5rem 1rem;
    background-color: #FF6700;
    color: #fff;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 200;
    position: relative;
    cursor: pointer;
    transition: all .3s linear;
}

.item-cart-btn:hover {
    color: #fff;
    background-color: rgb(255, 0, 0);
}
</style>
