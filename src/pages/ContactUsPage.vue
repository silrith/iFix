<template>
  <div class="contactUsLimiter">
    <div class="container-login102">
      <div class="wrap-login102">
        <div class="informationCard">
          <div class="contactUsHeader">
            <div style="margin-top: 30px; line-height: 25px;">
              <p class="txtDark2" style="line-height: 70px"><b>{{ $t("contact.header1") }}</b><br /></p>
              <p class="txtDark2">
                <b>{{ $t("contact.header2") }}</b> <br />
                <b style="color: #f26d25">{{ $t("contact.header3") }}</b>
              </p>
            </div>
          </div>
          <div class="txtDark2" style="text-align: flex-start; padding: 0 30px 0 30px;">
            <p style="line-height: 60px"><b><u>{{ $t("contact.or") }}</u></b><br /></p>
          </div>
          <div
          class="txtDark2"
            style="
              margin-top: 30px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding: 0 30px 0 0;
            "
          >
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'phone-volume']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">+43 1 9909777</p>
            </div>
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">info@ifix.at</p>
            </div>
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'map']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 15px;
                "
              />
              <p class="txt2">
                Wien 1010 Standort, Rabensteig 1, <br />
                1010 Wien, Austria
              </p>
            </div>
          </div>
        </div>
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
              <p class="txtDark2" style="padding-top: 13px; padding-bottom: 10px; text-align: center;">Contact us!</p>
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
              class="contactUs102"
              type="text"
              name="name"
              :placeholder='$t("userForm.name")'
            />
          </div>
          <div class="contactUsCustomInput">
            <div
              class="wrap-input102 validate-input mr-5"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="contactUs102"
                type="text"
                name="email"
                :placeholder='$t("userForm.email")'
                required
              />
            </div>
            <div
              class="wrap-input102 validate-input"
              data-validate="Valid telephone is required: +123456"
            >
              <input
                class="contactUs102"
                type="text"
                name="telephone"
                :placeholder='$t("userForm.phone")'
              />
            </div>
          </div>
          <div class="wrap-input102 validate-input">
            <select class="contactUs102">
              <option disabled selected>{{ $t("contact.select")}}</option>
              <option value="19">{{ $t("userForm.phone")}}</option>
              <option value="20">{{ $t("footer.tablet")}}</option>
              <option value="21">{{ $t("footer.computer")}}</option>
              <option value="22">{{ $t("footer.wearableAccessories") }}</option>
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
              :placeholder='$t("contact.textarea")'
            ></textarea>
          </div>
          <div class="container-login102-form-btn">
            <button class="btn btn-block py-2 btn-login">{{ $t("buttons.send") }}</button>
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
      errorMessage: this.$t("userForm.firstNameRequired"),
      categoryList: [],
    };
  },
  methods: {
    
  },
  mounted() {
  },
};
</script>

<style>
.contactUsLimiter {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.contactUsHeader {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
}

.container-login102 {
  width: 100%;
  min-height: 80vh;
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

.informationCard {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 50px 40px 50px;
  background-color:#ced4da;
}

.wrap-login102 {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 10px 50px 50px;
}

.login102-pic {
  width: 316px;
}

.login102-pic img {
  max-width: 100%;
}

.login102-form {
  padding: 30px 50px 40px 50px;
  width: 50%;
  background-color: #dee2e6;
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

.contactUsCustomInput {
  display: flex;
  flex-direction: row;
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
}

.input102:focus {
  color: #f26d25;
  padding-left: 15px;
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

.txtDark1 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: black;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
}

.txtDark2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);
}

.txt3 {
  font-family: Poppins-bold;
  font-size: 15px;
  line-height: 1.5;
  color: #f26d25;
}

.textarea102 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: white;
  border-radius: 10px;
  resize: none;
  text-align: center !important;
  justify-content: center;
  align-items: center;
  text-align-last: center;
  padding: 10px;
  border: none;
}

.textarea102:focus{
  color: #666666;
  text-align: flex-start;
}

.contactUs102 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 100%;
  background: white;
  border-radius: 10px;
  resize: none;
  text-align: flex-start !important;
  justify-content: center;
  align-items: center;
  text-align-last: flex-start;
  padding: 10px;
  color: #999999;
  border: none;
}

.contactUs102:hover{
  border: none;
}

.contactUs102 option:hover {
  background-color: #f26d25;
  background: blue;
}

.contactUs102:focus {
  color: #666666;
  padding-left: 15px;
  border: none;
  outline: none;
}

.contactUs102::placeholder{
  text-align: flex-start;
}

.textarea102:focus{
  border:none;
  outline: none;
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
}

@media (max-width: 768px) {
  .wrap-login102 {
    padding: 0 15px 33px 15px;
  }

  .login102-form {
    width: 100%;
  }

  .contactUsCustomInput{
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .wrap-login102 {
    padding: 0 15px 33px 15px;
  }

  .informationCard{
   width: 100%;
   padding: 0;
   margin-top: 30px;
  }
}

@media(max-width: 1214px){
  .login102-form{
    width: 100%;
  }

  .informationCard{
    width: 100%;
    margin-right: 0px;
    padding: 0 50px 30px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .wrap-login102{
    padding: 50px 10px 50px 10px;
  }
}

@media (max-width: 1372px) {
  .login102-pic {
    display: none;
  }
}
</style>