<template>
  <div class="row justify-content-center mt-2 mb-2 shoppingCartTopDiv">
    <div class="col-md-12">
      <div id="accordion">
        <div
          class="card mt-2 mb-2"
          style="
            background-color: white;
            font-size: 15px;
            background-color: rgb(255, 103, 0);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
              rgba(0, 0, 0, 0.22) 0px 10px 10px;
          "
        >
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
              <h5
                class="mt-2 font-weight-bold"
                style="font-size: 18px; color: rgba(255, 255, 255, 0.8)"
              >
                {{ $t("shoppingCart.shoppingCartList") }}
              </h5>
            </button>
            <font-awesome-icon
              class="asdcontainer"
              :icon="['fas', 'cart-shopping']"
              size="2xl"
              style="
                color: rgba(255, 255, 255, 0.8);
                background-color: transparent;
                padding-top: 10px;
              "
            />
            <span>{{ shoppingCartList.length }}</span>
          </div>
        </div>
        <div
          v-if="shoppingCartList.length > 0"
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <table class="col-lg-12">
            <thead class="table table-bordered" style="padding: 0.75rem">
              <tr class="table">
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
            <tbody class="table table-bordered">
              <tr
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
                      style="color: crimson; padding-top: 5px"
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
            <tfoot
              class="table table-bordered"
              style="font-size: 15px background-color: rgba(255, 255, 255, 0.8)"
            >
              <tr class="">
                <th class="text-start" scope="row" colspan="3">
                  <u class="text-dark p-1">{{ $t("shoppingCart.totalPrice") }}:</u>
                </th>
                <th
                  class="text-black text-center"
                  scope="row"
                  colspan="1"
                  style="font-size: 15px"
                >
                  {{
                    shoppingCartList
                      .reduce((acc, item) => acc + item.repairTypePrice, 0)
                      .toLocaleString()
                  }}
                  £
                </th>
              </tr>
            </tfoot>
          </table>
          <div class="d-flex justify-content-end mb-2 mt-4">
            <button
              class="item-cart-btn nav-link col-lg-3 text-center"
              @click="createPayment"
              style="
                border: 1px solid white;
                border-radius: 30px;
                background-color: rgb(255, 103, 0);
                font-size: 15px;
              "
            >
              Payment
          </button>
          </div>
        </div>
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
    shoppingCartList: Array,
  },
  methods: {
    removeItemFromCart(index) {
      this.$props.shoppingCartList.splice(index, 1);
    },
    createPayment(){
      var payAmount = this.shoppingCartList.reduce((acc, item) => acc + item.repairTypePrice, 0)
      this.$ajax.post("Payment/CreatePayment", {
                  amount : payAmount
                }).then((snapshot) => {
                  console.log(snapshot);
                  window.open(snapshot.data);
                }).catch((error) => {
                  console.log(error);
                });
    }
  },
  mounted() {},
};
</script>

<style>
.item-cart-btn:hover {
  color: #fff;
  background-color: rgb(255, 0, 0) !important;
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

.customTable {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

@media screen {
}
</style>

Widget HaleninFormu extends
