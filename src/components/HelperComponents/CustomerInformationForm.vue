<template>
  <div class="customerInformationForm">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">
        <span style="color: #f26d25">{{
          this.$t("customerinformation.header1")
        }}</span>
        - {{
          this.$t("customerinformation.header2")
        }}
      </p>
      <p class="checkOutHeader">
        {{
          this.$t("customerinformation.header3")
        }}
        <span style="color: #f26d25"> {{
          this.$t("customerinformation.header4")
        }}</span>
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        {{
          this.$t("customerinformation.subtitle1")
        }}
      </p>
    </div>
    <div class="mailInFormDiv">
      <div class="mailInFormDoubleDiv">
        <input
          class="mailInFormInput"
          type="text"
          :placeholder="$t('userForm.firstName')"
          v-model="this.firstName"
        />
        <input
          class="mailInFormInput"
          type="text"
          :placeholder="$t('userForm.lastName')"
          v-model="this.lastName"
        />
      </div>

      <input
        class="mailInFormInput"
        type="text"
        :placeholder="$t('userForm.email')"
        v-model="this.email"
      />
      <input
        class="mailInFormInput"
        type="tel"
        pattern="[+][0-9]{2}-[0-9]{1}-[0-9]{7}"
        :placeholder="$t('userForm.phone')"
        v-model="this.phone"
      />
    </div>
    <div class="checkOutHeaderDiv">
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        {{ this.$t("customerinformation.subtitle2") }}
      </p>
    </div>
    <div class="mailSelectDiv">
      <div class="container-login102-form-btn">
        <button class="btn btn-block py-2 btn-login" @click="this.method">
          {{ this.buttonTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
    };
  },
  props: {
    buttonTitle: String,
    method: Function,
  },
  methods: {
    createPayment() {
      var payAmount = this.shoppingCartList.reduce(
        (acc, item) => acc + item.repairTypePrice,
        0
      );
      this.$ajax
        .post("Payment/CreatePayment", {
          amount: payAmount,
          repairTypeProducts: this.shoppingCartList,
        })
        .then((snapshot) => {
          window.open(snapshot.data);
        })
        .catch((error) => {
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
        });
    },
  },
};
</script>

<style>
.customerInformationForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
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

.mailInFormDiv {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.mailInFormDoubleDiv {
  display: flex;
  width: 100%;
  gap: 1rem;
}

.mailInFormInput {
  width: 100%;
  padding: 15px;
  border: 1px solid #f26d25;
  border-radius: 10px;
  font-family: Poppins-Regular;
  color: #666;
  caret-color: #f26d25;
  caret-shape: underscore;
  height: 50px;
  padding: 15px;
}

.mailInFormInput::placeholder {
  text-align: center;
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #999999;
  font-weight: 500;
}

.mailInFormInput:focus {
  outline: none;
  border: 2px solid #f26d29;
  background-color: aliceblue;
}

.mailSelectDiv {
  width: 30%;
  text-align: start !important;
  padding: 0 0 30px 0;
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

@media(max-width: 772px){
  .mailInFormInput::placeholder {
    font-size: 10px;
    font-weight: bold;
  }
}
</style>
