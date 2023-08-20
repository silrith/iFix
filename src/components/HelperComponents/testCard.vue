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
            style="color: #f25d26; font-size: 12px;"
          />
        </button>
        <button class="testCardButton" type="button">
          <font-awesome-icon
            :icon="['fas', 'circle-plus']"
            style="color: #f25d26; font-size: 12px;"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    spairPart: Object,
  },
};
</script>

<style>
.wrapperTest {
  height: 120px;
  width: 300px;
  margin: 15px 0 15px 10px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
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
  float: right;
  height: 120px;
  width: 195px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
  padding: 15px 0 5px 0;
  font-size: 13px;
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
  align-items: center;
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
