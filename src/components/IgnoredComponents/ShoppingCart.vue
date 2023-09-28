<template>
  <div class="row justify-content-center mt-2 mb-2 spairPartCartDiv">
    <div class="col-md-12">
      <div id="accordion">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between border-3"
            id="headingOne"
          >
            <button
              class="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style="color: transparent; padding-top: 5px"
            >
              <p class="txt3">
                {{ $t("shoppingCart.shoppingCartList") }}
              </p>
            </button>
            <font-awesome-icon
              :icon="['fas', 'cart-shopping']"
              size="2xl"
              style="
                background-color: transparent;
                padding-top: 10px;
                color: #666;
              "
            />
            <span>{{ shoppingCartList.length }}</span>
          </div>
        </div>
        <div
          v-if="shoppingCartList.length > 0"
          id="collapseOne"
          class="collapse show shoppingCartTopDiv"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <table
            class="col-lg-12"
            style="background-color: rgba(33, 37, 41, 0.03)"
          >
            <thead class="table table-bordered" style="padding: 0.75rem">
              <tr
                class="table"
                style="background-color: rgba(33, 37, 41, 0.03)"
              >
                <th
                  class="text-center"
                  scope="col"
                  width="10%"
                  style="font-size: 12px"
                >
                  #
                </th>
                <th
                  class="text-center"
                  scope="col"
                  colspan="1"
                  style="font-size: 12px"
                >
                  {{ $t("shoppingCart.repairCategory") }}
                </th>
                <th class="text-center" scope="col" style="font-size: 12px">
                  {{ $t("shoppingCart.time") }}
                </th>
                <th class="text-center" scope="col" style="font-size: 12px">
                  {{ $t("shoppingCart.price") }}
                </th>
              </tr>
            </thead>
            <tbody class="table table-bordered shoppingCartTopDiv">
              <tr
                style="background-color: rgba(33, 37, 41, 0.03)"
                class="table"
                v-for="(cart, index) in shoppingCartList"
                :key="index"
              >
                <th scope="row" class="text-center align-middle">
                  <a
                    href=""
                    class="bg-transparent"
                    data-toggle="modal"
                    data-title="White beach dress"
                    data-backdrop="static"
                    data-target="#removeModal"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'trash-can']"
                      style="
                        color: crimson;
                        padding-top: 5px;
                        background-color: transparent;
                      "
                      @click="removeItemFromCart(index)"
                    />
                  </a>
                </th>
                <td
                  class="align-middle text-center font-weight-bold"
                  scope="row"
                  colspan="1"
                  style="font-size: 10px"
                >
                  {{ cart.repairTypeCategory }}
                </td>
                <td
                  class="align-middle text-center font-weight-bold"
                  style="font-size: 10px"
                >
                  {{ cart.deadLine }}
                </td>
                <td
                  class="align-middle text-center font-weight-bold"
                  style="font-size: 15px"
                >
                  {{ cart.repairTypePrice }} £
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="totalPrice">
    <p class="txt3">{{ $t("shoppingCart.totalPrice") }}:</p>
    <p class="txt2">
      <b
        ><u>{{
          shoppingCartList
            .reduce((acc, item) => acc + item.repairTypePrice, 0)
            .toLocaleString()
        }}</u> €</b
      >
    </p>
  </div>
  <div class="container-login102-form-btn">
    <button class="btn btn-block py-2 btn-login" @click="createPayment">Go To Payment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shoppingCartList: [],
  },
  methods: {
    removeItemFromCart(index) {
      this.$props.shoppingCartList.splice(index, 1);
    },
    createPayment() {
      var payAmount = this.shoppingCartList.reduce(
        (acc, item) => acc + item.repairTypePrice,
        0
      );
      this.$ajax
        .post("Payment/CreatePayment", {
          amount: payAmount,
          repairTypeProducts: this.shoppingCartList
        })
        .then((snapshot) => {
          window.open(snapshot.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>

<style>
.spairPartCartDiv {
  padding: 34px 0px 0px 0px;
}

.shoppingCartTopDiv {
  max-height: 519px;
  overflow-y: auto;
}

#headingOne span {
  position: absolute;
  top: 3px;
  right: 3px;
  background-color: red;
  color: white;
  padding: 2px 10px;
  border-radius: 60%;
}

.container-login102-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
}

.btn-login {
  background-color: #f26d25;
  color: #fff;
}

.btn-login:hover {
  background-color: #333333;
  color: #fff;
}

.totalPrice {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  padding: 0px 10px 0px 0px;
}
</style>
