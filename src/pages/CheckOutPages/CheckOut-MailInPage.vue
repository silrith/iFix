<template>
  <div class="mailInDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">Enter your</p>
      <p class="checkOutHeader">
        <span style="color: #f26d25">Shipping </span>Address
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        We provide a free label
      </p>
    </div>
    <div class="mailInTextArea">
      <input
        id="address-input"
        type="text"
        placeholder="Enter Your Address"
        v-model="address"
      />
      <span class="textAreaIcon" @click="clearAddress"
        ><font-awesome-icon :icon="['fas', 'xmark']"
      /></span>
    </div>
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">
        <span style="color: #f26d25">Last Step</span> - enter
      </p>
      <p class="checkOutHeader">
        your contact
        <span style="color: #f26d25"> info</span>
      </p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        This will speed up check-in when you get here.
      </p>
    </div>
    <div class="mailInFormDiv">
      <div class="mailInFormDoubleDiv">
        <input
          class="mailInFormInput"
          type="text"
          placeholder="First Name"
          v-model="address"
        />
        <input
          class="mailInFormInput"
          type="text"
          placeholder="Last Name"
          v-model="address"
        />
      </div>

      <input
        class="mailInFormInput"
        type="text"
        placeholder="Email Address"
        v-model="address"
      />
      <input
        class="mailInFormInput"
        type="text"
        placeholder="Phone Number"
        v-model="address"
      />
    </div>
    <div class="checkOutHeaderDiv">
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        By continuing, you agree our Terms of Service and Privacy Policy
      </p>
    </div>
    <div class="mailSelectDiv">
      <div class="container-login102-form-btn">
        <button
          class="btn btn-block py-2 btn-login"
          @click="timeToShip()"
        >
          {{ $t("serviceFilter.continue") }}
        </button>
      </div>
    </div>
    <div class="parallelogram2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: null,
    };
  },
  methods: {
    clearAddress() {
      this.address = "";
    },
    timeToShip(){
        this.$router.push({ 
          path: '/mail-in-time-to-ship'
        });
    }
  },
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
  top: 20px;
  font-size: 20px;
  display: flex;
  color: white;
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
  top: 130px;
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
    top: 210px;
    width: 70%;
  }
}

@media (max-width: 349px) {
  .parallelogram2 {
    display: none;
  }
}
</style>
