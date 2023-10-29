<template>
  <div class="shopAllSetDiv">
    <div class="checkOutHeaderDivAllSet">
      <p class="checkOutHeader">
        <span style="color: #f26d25">{{
          this.$t("instoreallset.header1")
        }}</span>
        {{ this.$t("instoreallset.header2") }}
        <span style="color: #f26d25">{{ this.customerName }}</span
        >.
      </p>
      <p class="checkOutHeader">{{ this.$t("shop.header1") }}</p>
      <p class="checkOutHeader">
        {{ this.$t("shop.header2") }}
        <span style="color: #f26d25">{{ this.$t("shop.header3") }}</span>
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        {{ this.$t("shop.subtitle1") }} :
        <span style="color: #f26d25"
          ><b>{{ this.shopOrderNumber }}</b></span
        >
      </p>
    </div>
    <div class="allSetImg">
      <img
        src="@/assets/photos/shopping.webp"
        alt="Booking Picture"
        width="300"
      />
    </div>
    <div class="bookTimeDiv2">
      <p class="txt2 timeDiv2">{{ this.$t("instoreallset.button1") }}</p>
      <p class="txt2 timeDiv2"><u>+43 1 9909777</u></p>
      <p class="txt2 timeDiv2">{{ this.$t("instoreallset.button2") }}</p>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      customerName: null,
      shopOrderNumber: null,
    };
  },
  methods: {
    updateShopOrderPaymentStatusAsSuccess() {
      this.$ajax
        .put("Payment/UpdateShopOrderPaymentStatus/" + this.$route.query.sps)
        .then((snapshot) => {
          if (snapshot.data)
            toast.success(this.$t("apiErrors.axiosError"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
        })
        .catch((err) => {
          toast.error(this.$t("checkoutinstore.selectTime"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
        });
    },
  },
  mounted() {
    this.updateShopOrderPaymentStatusAsSuccess();
    this.shopOrderNumber = localStorage.getItem("shopOrderNumber");
    this.customerName = localStorage.getItem("payerName");
  },
};
</script>

<style>
.shopAllSetDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.checkOutHeaderDivAllSet {
  padding: 50px 0 30px 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.allSetImg {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

.bookTimeDiv2 {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 30px 0px 60px 0;
}

.timeDiv2 {
  text-align: center;
  border: 2px solid #f26d25;
  padding: 10px;
  border-radius: 15px;
  width: 30%;
  font-weight: 600;
  background-color: white;
  padding: 20px;
}

.timeDiv2:hover {
  background-color: aliceblue;
}

@media (max-width: 792px) {
  .checkOutHeader {
    font-size: 30px;
  }

  .allSetImg img {
    width: 200px;
  }
}

@media (max-width: 886px) {
  .bookTimeDiv2 {
    width: 80%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }

  .timeDiv2 {
    width: 100%;
  }
}
</style>
