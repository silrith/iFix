<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="signup100">
          <p style="font-size: 36px; font-weight: 600;">
            {{ $t("signin.header1") }}<br />
            {{ $t("signin.header2") }}
          </p>
          <p>
            <b>{{ $t("signin.subtitle1") }}</b> <br />
            <b>{{ $t("signin.subtitle2") }}</b>
            <b style="color: #f26d25"
              ><router-link to="/signup" style="color: #f26d25">
                {{ $t("signin.subtitle3") }}</router-link
              ></b
            >
          </p>
        </div>
        <div class="login100-pic js-tilt" data-tilt>
          <img src="@/assets/header/login.png" alt="Login Picture" />
        </div>
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
              <p class="txt1" style="padding-top: 15px">
                {{ $t("header.login") }}!
              </p>
            </div>
            <div style="width: 30%">
              <hr class="txt3" />
            </div>
          </div>
          <div
            class="wrap-input100"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              :placeholder="$t('userForm.email')"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              id="#password-input"
              class="input100"
              :type="showPassword ? 'text' : 'password'"
              name="pass"
              :placeholder="$t('userForm.password')"
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
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-login100-form-btn">
            <button class="btn btn-block py-2 btn-login">
              {{ $t("header.login") }}
            </button>
          </div>
          <div
            style="
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <small class="txt1 mt-2">{{ $t("signin.loginSocial") }}</small>
            <div style="width: 60%">
              <hr class="txt1" />
            </div>
          </div>
          <div class="">
            <a href="#" class="btn btn-block py-2 btn-facebook">
              <span class="icon-facebook mr-3"
                ><font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  style="color: #ffffff"
              /></span>
              {{ $t("signin.loginFacebook") }}
            </a>
            <a href="#" class="btn btn-block py-2 btn-google"
              ><span class="icon-google mr-3"
                ><font-awesome-icon
                  :icon="['fab', 'google']"
                  style="color: #ffffff"
              /></span>
              {{ $t("signin.loginGoogle") }}</a
            >
          </div>
          <div
            style="
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <div style="width: 60%">
              <hr class="txt1" />
            </div>
          </div>
          <div class="text-center p-t-12">
            <span class="txt1"> {{ $t("signin.forgot") }} </span>
            <a class="txt2" href="#"
              >{{ $t("signin.userName") }} / {{ $t("userForm.password") }}?
            </a>
          </div>
          <div class="text-center p-t-136">
            <a class="txt2" href="#">
              {{ $t("signin.createAccount") }}
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
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
    };
  },
  components: {},
  methods: {
    togglePasswordField() {
      this.showPassword = !this.showPassword;
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

.container-login100 {
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

.container-login100 input{
  border: 1px solid #f26d25;
}

.container-login100 input:focus{
  border: 1px solid #f26d25;
  outline: none;
}

.container-login100-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

.signup100 {
  text-align: start !important;
  padding: 25px 0;
}

.wrap-login100 {
  width: 80%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 7px 100px 13px 105px;
}

.login100-pic {
  width: 316px;
}

.login100-pic img {
  max-width: 100%;
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

.wrap-input100 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input100 {
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

.focus-input100 {
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

.input100:focus + .focus-input100 {
  color: #f26d25;
  padding-left: 15px;
}

.symbol-input100 {
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

.input100:focus + .focus-input100 + .symbol-input100 {
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

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
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

.login100-form-btn {
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

.login100-form-btn:hover {
  background: #333333;
  cursor: pointer;
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

@media (max-width: 992px) {
  .wrap-login100 {
    padding: 0 90px 33px 85px;
  }

  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }

  .login100-form {
    width: 100%;
  }

  .signup100 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .signup100 p,
  h1 {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .wrap-login100 {
    padding: 0 80px 33px 80px;
  }

  .login100-form {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding: 0 15px 33px 15px;
  }
}

@media (max-width: 1372px) {
  .login100-pic {
    display: none;
  }
}
</style>
