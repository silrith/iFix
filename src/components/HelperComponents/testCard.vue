<template>
  <div class="wrapperTest">
    <div class="product-img">
      <img src="@/assets/header/1.png" height="200" width="180" />
    </div>
    <div class="product-info">
      <div class="product-text">
        <p class="txt2">Harvest Vase</p>
        <p class="txt2">by studio and friends</p>
        <p class="txt2">
          Harvest Vases are a reinterpretation<br />
          of peeled fruits and vegetables as<br />
          functional objects. The surfaces<br />
        </p>
      </div>
      <div class="product-price-btn">
        <p class="txt2"><b>78 $</b></p>
        <button class="testCardButton" type="button">
          <font-awesome-icon
            :icon="['fas', 'circle-plus']"
            style="color: white"
            size="xl"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.wrapperTest {
  position: inherit;
  height: 200px;
  width: 450px;
  margin: 15px 0 15px 15px;
  border-radius: 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  float: left;
  height: 200px;
  width: 180px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
  rotate: -15deg;
  padding: 9px;
}

.product-info {
  float: left;
  height: 200px;
  width: 270px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
  padding: 20px;
}

.product-text {
  height: 125px;
  width: 270px;
}

.product-price-btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.product-price-btn p {
  display: flex;
  position: relative;
  right: 190px;
  top: 25px;
  border-radius: 7px;
}

.testCardButton {
  position: relative;
  right: -35px;
  top: 33px;
  width: 30px;
  height: 30px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  background-color: transparent;
  border-radius: 35px;
  display: flex;
  background-color: #f25d26;
  justify-content: center;
  align-items: center;
  border: 5px solid #f25c2685;
}
</style>
