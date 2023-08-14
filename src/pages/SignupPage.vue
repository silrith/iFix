<template>
  <div class="limiter">
    <div class="container-login101">
      <div class="wrap-login101">
        <div class="signup101">
          <div>
            <p style="font-size: 36px; font-weight: 600;">
              {{ $t('signup.header1') }}<br />
              {{ $t('signup.header2') }} 
            </p>
          </div>
          <div style="margin-top: 30px; line-height: 25px">
            <p>
              <b>{{ $t('signup.subtitle1') }}</b> <br />
              <b>{{ $t('signup.subtitle2') }}</b>
              <b style="color: #f26d25"
                ><router-link
                  to="/login"
                  style="font-style: normal; color: #f26d25"
                  >{{ $t('signup.subtitle3') }}</router-link
                ></b
              >
            </p>
          </div>
        </div>
        <div class="login101-pic js-tilt" data-tilt></div>
        <form class="login101-form validate-form">
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
              <p class="txt1" style="padding-top: 10px">{{ $t('signup.signup') }}!</p>
            </div>
            <div style="width: 30%">
              <hr class="txt3" />
            </div>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Valid full name is required: Michael Jordan"
          >
            <input
              class="input101"
              type="text"
              name="name"
              :placeholder='$t("userForm.name")'
            />
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-cog fa-spin" aria-hidden="true"></i>
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
              :placeholder='$t("userForm.email")'
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
              name="username"
              :placeholder='$t("signin.userName")'
            />
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Password is required"
          >
            <input
              id="#password-input"
              class="input101"
              :type="showPassword ? 'text' : 'password'"
              name="pass"
              :placeholder='$t("userForm.password")'
            />
            <span
              @click="togglePasswordField"
              toggle="#password-field"
              :class="{
                'fa fa-fw fa-eye field-icon toggle-password': showPassword,
                'fa fa-fw fa-eye-slash field-icon toggle-password':
                  !showPassword,
              }"
            ></span>
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div
            class="wrap-input101 validate-input"
            data-validate="Password is required"
          >
            <input
              id="#password-input"
              class="input101"
              :type="showRepeatPassword ? 'text' : 'password'"
              name="pass"
              :placeholder='$t("userForm.repeatPassword")'
            />
            <span
              @click="toggleRepeatPasswordField"
              toggle="#password-field"
              :class="{
                'fa fa-fw fa-eye field-icon toggle-password':
                  showRepeatPassword,
                'fa fa-fw fa-eye-slash field-icon toggle-password':
                  !showRepeatPassword,
              }"
            ></span>
            <span class="focus-input101"></span>
            <span class="symbol-input101">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-login101-form-btn">
            <button class="btn btn-block py-2 btn-login">{{ $t("signup.signup") }}</button>
          </div>
          <div
            style="
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          ></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: null,
      showPassword: false,
      showRepeatPassword: false,
    };
  },
  components: {},
  methods: {
    togglePasswordField() {
      this.showPassword = !this.showPassword;
    },
    toggleRepeatPasswordField() {
      this.showRepeatPassword = !this.showRepeatPassword;
    },
    // search() {
    //   console.log(this.searchQuery);
    // },
    // login() {
    //   this.isLogged = true;
    // },
    // isUserLoggedOrLogout($event) {
    //   this.data = $event;
    //   this.isLogged = this.data.isLogged;
    // },
  },
  mounted() {
    this.selectedTab = localStorage.getItem("cursorPointer");
  },

  beforeCreate() {
    localStorage.setItem("cursorPointer", "sign in");
  },
};
</script>

<style>
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login101 {
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

.container-login101-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

.signup101 {
  text-align: start !important;
  padding: 25px 0;
}

.wrap-login101 {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 7px 100px 13px 105px;
}

.login101-pic {
  width: 316px;
  background-image: url(@/assets/header/signuppic.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login101-pic img {
  max-width: 100%;
  max-height: 100%;
}

.login101-form {
  width: 290px;
}

.login101-form-title {
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
}

.wrap-input101 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input101 {
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

.focus-input101 {
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

.symbol-input101 {
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

.input101:focus + .focus-input101 + .symbol-input101 {
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
.btn.btn-facebook {
  display: block;
  background: #3b5998;
  color: #fff;
}
.btn.btn-google {
  background: #ea4335;
  color: #fff;
}

.btn-login {
  background-color: #f26d25;
  color: #fff;
}

.btn-login:hover {
  background-color: #333333;
  color: #fff;
}

.login101-form-btn {
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

.login101-form-btn:hover {
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

.other-login-methods-label {
  font-size: 14px;
}

.other-login-methods {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-logo {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  margin: 0 15px 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
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
  .wrap-login101 {
    padding: 0 90px 33px 85px;
  }

  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }

  .login101-form {
    width: 100%;
  }

  .signup101 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .signup101 p,
  h1 {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .wrap-login101 {
    padding: 0 80px 33px 80px;
  }

  .login101-form {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-login101 {
    padding: 0 15px 33px 15px;
  }
}

@media (max-width: 1372px) {
  .login101-pic {
    display: none;
  }
}
</style>
