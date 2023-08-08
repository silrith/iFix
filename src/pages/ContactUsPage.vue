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
      <form class="login100-form validate-form">
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
              <p class="txt1" style="padding-top: 15px">Login!</p>
            </div>
            <div style="width: 30%">
              <hr class="txt3" />
            </div>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Valid full name is required: George Michael"
          >
            <input
              class="input101"
              type="text"
              name="fullname"
              placeholder="Full name"
            />
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input101"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <textarea class="input101" name="customeropinion" id="#customerOpinion" cols="5" rows="5"></textarea>
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-login100-form-btn">
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
            <small class="txt1 mt-2">Or <router-link to="/booking" style="font-style: normal; color: #f26d25"><b class="txt2"> check out the appointment system <font-awesome-icon :icon="['fas', 'share']" class="txt2" /></b></router-link></small>
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

.contactUsWrap-input {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.contactUsInput {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 40px;
  border-radius: 10px;
  padding: 0 0 0 68px;
}

.contactUsFocus-input {
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

.contactUsSymbol-input {
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

.contactUsFocus-input:focus + .contactUsFocus-input + .contactUsSymbol-input {
  color: #f26d25;
  padding-left: 15px;
}

.login100-form {
  width: 290px;
}

.login100-form-title {
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
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
</style>
