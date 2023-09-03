<template>
  <div class="wrapperTest">
    <div class="product-img">
      <img :src="this.spairPart.repairTypePicture" height="120" width="90" />
    </div>
    <div class="product-info">
      <p>
        {{ this.spairPart.repairTypeCategory }} <br />
        {{ this.spairPart.deadLine }} <br />
        <b>{{ this.spairPart.repairTypePrice }} €</b>
      </p>
      <div class="product-price-btn">
        <button class="testCardButton" type="button">
          <font-awesome-icon
            :icon="['fas', 'circle-minus']"
            style="color: #f25d26; font-size: 17px"
          />
        </button>
        <button class="testCardButton" type="button">
          <font-awesome-icon
            :icon="['fas', 'circle-plus']"
            style="color: #f25d26; font-size: 17px"
            @click="addToShoppingCart(this.spairPart)"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {
  data() {
    return {};
  },
  props: {
    spairPart: Object,
  },
  methods: {
    addToShoppingCart(item) {
      if (!this.$parent.$parent.shoppingCart.includes(item))
        this.$parent.$parent.shoppingCart.push(item);
      else
        toast.error("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
    },
  },
};
</script>

<style>
.wrapperTest {
  height: 120px;
  width: 250px;
  margin: 15px 0 15px 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px 2px, rgba(0, 0, 0, 0.23) 2px 2px 2px 2px;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid #f25d26; */
  border-radius: 5px;
}

.product-img {
  float: left;
  height: 120px;
  width: 90px;
  padding: 0 0 0 5px;
}

.product-img img {
  padding: 10px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: right;
  height: 110px;
  width: 195px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
  padding: 15px 0 5px 0;
  font-size: 11px;
}

.product-text {
  height: 120px;
  width: 145px;
}

.product-price-btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}

.testCardButton {
  width: 30px;
  height: 30px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
</style>
