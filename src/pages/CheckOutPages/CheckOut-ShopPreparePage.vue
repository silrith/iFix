<template>
  <div class="mailInDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">{{ this.$t("mailin.header1") }}</p>
      <p class="checkOutHeader">
        <span style="color: #f26d25">{{ this.$t("mailin.header2") }}</span>
        {{ this.$t("mailin.header3") }}
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        {{ this.$t("mailin.subtitle1") }}
      </p>
    </div>
    <div class="mailInTextAreaMainDiv">
      <div class="mailInTextArea">
        <input
          id="street-input"
          type="text"
          :placeholder="$t('userForm.street')"
          v-model="street"
        />
      </div>
      <div class="mailInTextArea">
        <input
          id="houseNo-input"
          type="text"
          :placeholder="$t('userForm.houseNo')"
          v-model="houseNo"
        />
      </div>
    </div>
    <div class="mailInTextAreaMainDiv">
      <div class="mailInTextArea">
        <input
          id="zipCode-input"
          type="text"
          :placeholder="$t('userForm.zipCode')"
          v-model="zipCode"
        />
      </div>
      <div class="mailInTextArea">
        <input
          id="city-input"
          type="text"
          :placeholder="$t('userForm.city')"
          v-model="city"
        />
      </div>
    </div>
    <CustomerInformationForm
      ref="customerInformationForm"
      :buttonTitle="buttonTitle"
      :method="this.method"
    />
    <div class="parallelogram2"></div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import CustomerInformationForm from "@/components/HelperComponents/CustomerInformationForm.vue";

export default {
  data() {
    return {
      street: null,
      houseNo: null,
      zipCode: null,
      city: null,
      buttonTitle: this.$t("shop.paymentButton"),
      method: this.shopPayment,
    };
  },
  components: {
    CustomerInformationForm,
  },
  methods: {
    validateInputs(data, type) {
      if (data == null || data == undefined) {
        toast.warning(this.$t("mailin.mailInValidate") + type, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return false;
      }
    },
    shopPayment() {
      var validate = this.validateInputs(
        this.street,
        this.$t("userForm.street")
      );
      if (validate == false) return;
      validate = this.validateInputs(this.city, this.$t("userForm.city"));
      if (validate == false) return;
      validate = this.validateInputs(this.houseNo, this.$t("userForm.houseNo"));
      if (validate == false) return;
      validate = this.validateInputs(this.zipCode, this.$t("userForm.zipCode"));
      if (validate == false) return;
      validate = this.validateInputs(
        this.$refs.customerInformationForm.firstName,
        this.$t("userForm.firstName")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.$refs.customerInformationForm.lastName,
        this.$t("userForm.lastName")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.$refs.customerInformationForm.email,
        this.$t("userForm.email")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.$refs.customerInformationForm.phone,
        this.$t("userForm.phone")
      );
      if (validate == false) return;

      this.$ajax
        .post("Order/CreateShopOrder", {
          customerFirstName: this.$refs.customerInformationForm.firstName,
          customerLastName: this.$refs.customerInformationForm.lastName,
          customerEmail: this.$refs.customerInformationForm.email,
          customerPhone: this.$refs.customerInformationForm.phone,
          customerInformation: localStorage.getItem("informationShop"),
          address: this.street + +this.houseNo + +this.zipCode + +this.city,
          paymentSuccess: false,
          repairTypes: JSON.parse(localStorage.getItem("selectedRepairTypes")),
        })
        .then((snapshot) => {
          if (snapshot.data.shopOrderNumber != null || snapshot.data.shopOrderNumber != undefined) {
            localStorage.setItem("payerName", this.$refs.customerInformationForm.firstName);
            localStorage.setItem("shopOrderNumber", snapshot.data.shopOrderNumber);
            var repairTypeList = JSON.parse(
              localStorage.getItem("selectedRepairTypes")
            );
            this.$ajax
              .post("Payment/CreatePayment", {
                amount: repairTypeList.reduce(
                  (acc, item) => acc + item.repairTypePrice,
                  0
                ),
                repairTypeProducts: repairTypeList,
                mailInOrderId: 0,
                shopOrderId: snapshot.data.shopOrderId,
                successUrl: "shopSuccess?sps=",
                failUrl: "shop?failed=true",
              })
              .then((snapshot) => {
                window.open(snapshot.data);
              })
              .catch((err) => {
                toast.error(err, {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "foo-bar",
                  toastStyle: {
                    fontSize: "12px",
                  },
                });
              });
          } else
            toast.error(this.$t("mailin.paymentFail"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
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

.mailInTextAreaMainDiv {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}

.mailInTextArea {
  width: 50%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 5px 20px 5px;
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
    height: 40px;
    font-size: 10px;
    text-align: justify;
    border: 2px solid #f26d25;
  }

  .mailInTextArea input::placeholder {
    font-size: 11px;
    font-weight: bold;
  }

  .mailInTextAreaMainDiv {
    width: 80%;
  }

  .mailInTextArea {
    width: 100%;
    /* padding: 20px; */
  }

  .textAreaIcon {
    top: 10px;
    right: 20px;
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
    top: 185px !important;
    width: 100%;
    height: 140%;
  }
}

@media (max-width: 400px) {
  .parallelogram2 {
    display: none;
  }
}
</style>
