<template>
  <div class="row justify-content-center mt-2 mb-2 shoppingCartTopDiv">
    <div class="col-md-12">
      <div id="accordion">
        <div
          class="card mt-2 mb-2"
          style="background-color: white; font-size: 15px box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
        >
          <div
            class="card-header d-flex justify-content-between bg-white border-3"
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
                style="font-size: 18px; color: black"
              >
                Shopping Cart List
              </h5>
            </button>
            <font-awesome-icon
              class="asdcontainer"
              :icon="['fas', 'cart-shopping']"
              size="2xl"
              style="
                color: black;
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
          <table class="col-lg-12 mt-2">
            <thead style="padding: 0.75rem">
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
                  class="text-start"
                  scope="col"
                  colspan="1"
                  style="font-size: 12px"
                >
                  Repair Category
                </th>
                <th class="text-center" scope="col" style="font-size: 12px">
                  Time
                </th>
                <th class="text-end" scope="col" style="font-size: 12px">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
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
                  class="align-middle text-start"
                  scope="row"
                  colspan="1"
                  style="font-size: 10px"
                >
                  <img
                    class="img-fluid mr-1 bg-cover"
                    :src="cart.repairTypePicture"
                    alt=""
                    width="20"
                  />
                  <b>{{ cart.repairTypeCategory }}</b>
                </td>
                <td class="align-middle text-center" style="font-size: 10px">
                  <b>{{ cart.deadLine }}</b>
                </td>
                <td class="align-middle text-end" style="font-size: 15px">
                  <u
                    ><b>{{ cart.repairTypePrice }}</b></u
                  >
                  <b>£</b>
                </td>
              </tr>
            </tbody>
            <tfoot class="table" style="font-size: 15px">
              <tr class="">
                <th class="text-start" scope="row" colspan="2">
                  <u class="text-dark p-1">Total Price:</u>
                </th>
                <th
                  class="text-black text-end"
                  scope="row"
                  colspan="2"
                  style="text-align: end; font-size: 15px"
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
            <router-link
            to="/payments"
              class="item-cart-btn nav-link col-lg-3 text-center"
              style="
                border: 1px solid white;
                border-radius: 30px;
                background-color: rgb(255, 103, 0);
                font-size: 15px;
              "
            >
              Payment
            </router-link>
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