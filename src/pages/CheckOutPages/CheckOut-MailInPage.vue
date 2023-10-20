<template>
  <div class="mailInDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">{{ this.$t("mailin.header1") }}</p>
      <p class="checkOutHeader">
        <span style="color: #f26d25">{{ this.$t("mailin.header2") }} </span
        >{{ this.$t("mailin.header3") }}
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        {{ this.$t("mailin.subtitle1") }}
      </p>
    </div>
    <div class="mailInTextArea">
      <input
        id="address-input"
        type="text"
        :placeholder="$t('mailin.address')"
        v-model="address"
      />
      <span class="textAreaIcon" @click="clearAddress"
        ><font-awesome-icon :icon="['fas', 'xmark']"
      /></span>
    </div>
    <CustomerInformationForm :buttonTitle="buttonTitle" :method="this.method" />
    <div class="parallelogram2"></div>
  </div>
</template>

<script>
import CustomerInformationForm from "@/components/HelperComponents/CustomerInformationForm.vue";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      address: null,
      buttonTitle: this.$t("services.getShippingLabel"),
      method: this.timeToShip,
      cargoResult: false,
    };
  },
  components: {
    CustomerInformationForm,
  },
  methods: {
    clearAddress() {
      this.address = "";
    },
    timeToShip() {
      this.$router.push({
        path: "/mail-in-time-to-ship",
      });
    },
    createPayment() {
      var payAmount = this.shoppingCartList.reduce(
        (acc, item) => acc + item.repairTypePrice,
        0
      );
      // this.$ajax.post("Cargo/CreateCargoForCustomer", JSON.parse(localStorage.getItem("address")))
      if (this.cargoResult == true) {
        this.$ajax
          .post("Payment/CreatePayment", {
            amount: payAmount,
            repairTypeProducts: this.shoppingCartList,
          })
          .then((snapshot) => {
            window.open(snapshot.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.error(
          "Kargo Talebiniz Oluşturulamadı, Lütfen Firmamız İle Görüşünüz",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          }
        );
      }
    },
  },
  mounted() {},
};
</script>

<style>
.mailInDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.checkOutHeaderDiv {
  padding: 50px 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.mailInTextArea {
  width: 50%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 0 20px 0;
}

.mailInTextArea input {
  width: 100%;
  padding: 15px;
  border: 1px solid #f26d25;
  border-radius: 10px;
  font-family: Poppins-Regular;
  color: #666;
  caret-color: #f26d25;
  caret-shape: underscore;
}

.mailInTextArea input:focus {
  outline: none;
  border: 2px solid #ff4800;
}

.mailInTextArea input::after {
  border: 2px solid #ff4800;
  outline: none;
}

.mailInTextArea input::placeholder {
  text-align: center;
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #999999;
  font-weight: 500;
}

.mailInTextArea input:focus + .textAreaIcon {
  color: red;
}

.textAreaIcon {
  position: absolute;
  right: 40px;
  top: 16px;
  font-size: 20px;
  display: flex;
  color: white;
}

.container-login102-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
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

.mailSelectDiv {
  width: 30%;
  text-align: start !important;
  padding: 0 0 30px 0;
}

.parallelogram2 {
  width: 50%;
  height: 150%;
  background: #f3efed;
  position: fixed;
  top: 135px !important;
  z-index: -9999;
}

@media (max-width: 772px) {
  .mailInTextArea input {
    height: 100px;
    font-size: 12px;
    text-align: justify;
  }

  .mailInTextArea {
    width: 100%;
    padding: 20px;
  }

  .textAreaIcon {
    top: 60px;
  }

  .checkOutHeaderDiv {
    text-align: center;
  }

  .checkOutHeader {
    font-size: 30px;
  }

  .txt2 {
    font-size: 10px !important;
  }

  .mailSelectDiv {
    width: 50%;
  }

  .mailInFormDiv {
    width: 100%;
    padding: 20px;
  }

  .mailInFormInput {
    height: 35px;
    font-size: 10px;
  }
}

.parallelogram2 {
  width: 60%;
  height: 150%;
  background: #f3efed;
  position: absolute;
  top: 130px;
  z-index: -2;
}

@media (max-width: 992px) {
  .parallelogram2 {
    top: 180px;
    width: 100%;
    height: 150%;
  }
}

@media (max-width: 400px) {
  .parallelogram2 {
    display: none;
  }
}
</style>
