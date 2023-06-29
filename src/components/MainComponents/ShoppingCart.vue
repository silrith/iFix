<template>
  <div class="flex-column justify-content-center text-center">
    <div class="mb-4 mt-2">
      <h2>
        <b><u>Shopping Cart List</u></b>
      </h2>
    </div>
    <div
      v-for="(cart, index) in shoppingCartList"
      :key="index"
      class="col-lg-12 col-md-12 col-sm-12 m-2 d-flex shoppingCartDiv"
    >
      <img width="30" :src="cart.repairTypePicture" alt="" />
      <div
        class="col-lg-12 col-md-12 col-sm-12"
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          border-radius: 20px;
        "
      >
        <div class="col-md-2 col-sm-2">
          <span>{{ cart.repairTypePrice }} £</span>
        </div>
        <div class="col-md-2 col-sm-2">
          <span>{{ cart.repairTypeCategory }}</span>
        </div>
        <div class="button-81 col-lg-3 col-md-1 col-sm-1" @click="removeItemFromCart(index)">
          <font-awesome-icon
            class="bg-transparent"
            :icon="['fas', 'trash-can']"
            size="xl"
            style="color: #ff0000"
          />
        </div>
      </div>
    </div>
    <div
      v-if="shoppingCartList.length > 0"
      class="d-flex justify-content-center"
    >
      <button class="button-17 mt-3">Payment</button>
    </div>
    <div class="shoppingInformationDiv" v-if="shoppingCartList.length == 0">
      <h1>
        Please select the <span class="underlined underline-clip">repair</span
        ><br />
        <span class="underlined underline-clip2">categories</span><br />
        <span>before</span><br />
        proceeding<br />with <br />
        <span class="underlined underline-mask">the payment</span><br /><span
          class="underlined underline-overflow"
          >process.</span
        >
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shoppingCartList: Array,
  },
  methods: {
    removeItemFromCart(index) {
      this.$props.shoppingCartList.splice(index, 1);
    },
  },
  mounted() {},
};
</script>

<style>
.shoppingCartDiv {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 9px 8px, rgba(0, 0, 0, 0.22) 0px 5px 12px;
  border-radius: 20px;
  font-size: 10px;
}

.shoppingInformationDiv h1 {
  font-size: clamp(2rem, 15vmin, 5rem);
  font-family: sans-serif;
  color: rgb(0, 0, 0, 0.1);
}

.underlined {
  position: relative;
}

.underline-mask:after {
  content: "";
  position: absolute;
  top: 95%;
  width: 150%;
  aspect-ratio: 3 / 1;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 6px solid hsl(280 80% 50%);
  /* Use a conic gradient mask to hide and show the bits you want */
  --spread: 140deg;
  --start: 290deg;
  mask: conic-gradient(
    from var(--start),
    white 0 var(--spread),
    transparent var(--spread)
  );
}

.underline-overflow {
  display: inline-block;
  overflow: hidden;
  padding-bottom: clamp(1rem, 2vmin, 2rem);
}
.underline-overflow:after {
  content: "";
  position: absolute;
  top: 100%;
  height: 150%;
  aspect-ratio: 2.5 / 1;
  left: 50%;
  transform: translate(-50%, -10%);
  border-radius: 50%;
  border: 6px solid hsl(10 80% 50%);
}

.underline-clip:after {
  content: "";
  position: absolute;
  top: 95%;
  width: 150%;
  aspect-ratio: 3 / 1;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 6px solid hsl(130 80% 50%);
  /* Use a clip-path to hide and show the bits you want */
  clip-path: polygon(0 0, 50% 50%, 100% 0);
}

.underline-clip2:after {
  content: "";
  position: absolute;
  top: 95%;
  width: 150%;
  aspect-ratio: 3 / 1;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: 6px solid hsl(205, 93%, 50%);
  /* Use a clip-path to hide and show the bits you want */
  clip-path: polygon(0 0, 50% 50%, 100% 0);
}
</style>
