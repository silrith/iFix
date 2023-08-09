<template>
  <div
    class="contactUsPage"
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 86vh;
    "
  >
    <div
      class="contactUsContent"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        min-height: 86vh;
      "
    >
      <div class="contactUsHeader">
        <p>Contact Us</p>
      </div>
      <h1>
        Let's talk about <br />
        your need
      </h1>
      <div class="contactUsSubtitle">
        <p>Drop us a line through the form below and we'll get back to you</p>
      </div>
      <div class="contactUsFormPic"></div>
      <form class="login102-form validate-form">
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
        >
          <div style="width: 30%">
            <hr class="txt3" />
          </div>
          <div>
            <p class="txt1" style="padding-top: 15px">Contact us!</p>
          </div>
          <div style="width: 30%">
            <hr class="txt3" />
          </div>
        </div>
        <div
          class="wrap-input102 validate-input"
          data-validate="Valid full name is required: George Michael"
        >
          <input
            class="input102"
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <span class="focus-input102"></span>
          <span class="symbol-input102">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>
        <div
          class="wrap-input102 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input
            class="input102"
            type="text"
            name="email"
            placeholder="Email"
          />
          <span class="focus-input102"></span>
          <span class="symbol-input102">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>
        <div
          class="wrap-input102 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <select class="select102">
            <option>Please choose your repair type</option>
            <option>Phone</option>
            <option>Tablet</option>
            <option>Computer</option>
            <option>Wearable</option>
          </select>
        </div>
        <div
          class="wrap-input102 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <textarea
            class="textarea102"
            name="customeropinion"
            id="customerOpinion"
            rows="10"
            type="text"
            placeholder="Share your opinion"
          ></textarea>

        </div>
        <div class="container-login102-form-btn">
          <button class="btn btn-block py-2 btn-login">Send</button>
        </div>
        <div
          style="
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <small class="txt1 mt-2"
            >Or
            <router-link
              to="/booking"
              style="font-style: normal; color: #f26d25"
              ><b class="txt2">
                check out the appointment system
                <font-awesome-icon
                  :icon="['fas', 'share']"
                  class="txt2" /></b></router-link
          ></small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: this.$t("userForm.firstNameRequired"),
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.contactUsPage {
  font-family: Inter, sans-serif;
}

.contactUsHeader {
  color: #171d1a;
  letter-spacing: 0.02em;
  text-transform: none;
  margin-bottom: 23px;
  font-size: 24px;
  font-weight: 500;
  line-height: 26px;
}

.contactUsContent h1 {
  color: #171d1a;
  text-align: center;
  white-space: normal;
  flex-direction: row;
  font-size: 48px;
  font-weight: 800;
  line-height: 62.4px;
}

.contactUsSubtitle {
  color: #171d1a;
  text-align: center;
  letter-spacing: -0.01px;
  text-transform: none;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
}

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login102 {
  width: 100%;
  min-height: 86vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.container-login102-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

.wrap-login102 {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 7px 100px 13px 105px;
}

.login102-pic {
  width: 316px;
  background-image: url(@/assets/header/signuppic.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login102-pic img {
  max-width: 100%;
  max-height: 100%;
}

.login102-form {
  width: 290px;
}

.login102-form-title {
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
}

.wrap-input102 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input102 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 40px;
  border-radius: 10px;
  padding: 0 0 0 68px;
  resize: none;
}

.textarea102{
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #e6e6e6;
  border-radius: 10px;
  resize: none;
  text-align: center !important;
  justify-content: center;
  align-items: center;
  text-align-last: center;
  padding: 10px;
}

.select102{
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #e6e6e6;
  border-radius: 10px;
  resize: none;
  text-align: center !important;
  justify-content: center;
  align-items: center;
  text-align-last: center;
  padding: 10px;
  color: #999999;
  border: none;
}

.select102 option:hover{
  background-color: #f26d25;
}

.focus-input102 {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: #f26d25;
}

.symbol-input102 {
  font-size: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  pointer-events: none;
  color: #f26d25;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input102:focus + .focus-input102 + .symbol-input102 + .select102 {
  color: #f26d25;
  padding-left: 15px;
}

.field-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #f26d25;
  box-shadow: #333333;
}

.btn {
  text-decoration: none !important;
}

.btn-login {
  background-color: #f26d25;
  color: #fff;
}

.btn-login:hover {
  background-color: #333333;
  color: #fff;
}

.login102-form-btn {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #f26d25;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  outline: none !important;
  border: none;
}

.login102-form-btn:hover {
  background: #333333;
  cursor: pointer;
}

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: white;
  border: 1px solid #c80000;
  border-radius: 13px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;
  font-family: Poppins-Medium;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 13px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

.txt1 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #999999;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
}

.txt3 {
  font-family: Poppins-bold;
  font-size: 15px;
  line-height: 1.5;
  color: #f26d25;
}

input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #999999;
}
input:-moz-placeholder {
  color: #999999;
}
input::-moz-placeholder {
  color: #999999;
}
input:-ms-input-placeholder {
  color: #999999;
}

textarea::-webkit-input-placeholder {
  color: #999999;
}
textarea:-moz-placeholder {
  color: #999999;
}
textarea::-moz-placeholder {
  color: #999999;
}
textarea:-ms-input-placeholder {
  color: #999999;
}

@media (max-width: 992px) {
  .wrap-login102 {
    padding: 0 90px 33px 85px;
  }

  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }

  .login102-form {
    width: 100%;
  }

  .signup102 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .signup102 p,
  h1 {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .wrap-login102 {
    padding: 0 80px 33px 80px;
  }

  .login102-form {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-login102 {
    padding: 0 15px 33px 15px;
  }
}

@media (max-width: 1372px) {
  .login102-pic {
    display: none;
  }
}
</style>
