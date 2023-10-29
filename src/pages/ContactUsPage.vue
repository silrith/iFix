<template>
  <div class="contactUsLimiter">
    <div class="container-login102">
      <div class="wrap-contactus102">
        <div class="informationCard">
          <div class="contactUsHeader">
            <div style="margin-top: 30px; line-height: 25px">
              <p class="txt2" style="line-height: 70px">
                <b>{{ $t("contact.header1") }}</b
                ><br />
              </p>
              <p class="txt2">
                <b>{{ $t("contact.header2") }}</b> <br />
                <b style="color: #f26d25">{{ $t("contact.header3") }}</b>
              </p>
            </div>
          </div>
          <div
            class="txtDark2"
            style="text-align: flex-start; padding: 0 30px 0 30px"
          >
            <p style="line-height: 60px">
              <b
                ><u>{{ $t("contact.or") }}</u></b
              ><br />
            </p>
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
              <p class="txt2"><b>+43 1 9909777</b></p>
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
              <p class="txt2"><b>info@ifix.at</b></p>
            </div>
            <div style="display: flex; text-align: flex-start">
              <font-awesome-icon
                :icon="['fas', 'map']"
                style="
                  color: rgb(255, 103, 0);
                  font-size: 25px;
                  margin-right: 10px;
                "
              />
              <p class="txt2">
                <b>Wien 1010 Standort, Rabensteig 1, 1010 Wien</b>
              </p>
            </div>
          </div>
        </div>
        <div class="login102-form validate-form">
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
              <p
                class="txtDark2"
                style="
                  padding-top: 13px;
                  padding-bottom: 10px;
                  text-align: center;
                "
              >
                Contact us!
              </p>
            </div>
            <div style="width: 30%">
              <hr class="txt3" />
            </div>
          </div>
          <div class="wrap-input102 validate-input">
            <input
              class="contactUs102"
              type="text"
              name="name"
              :placeholder="$t('userForm.name')"
              v-model="customerName"
            />
          </div>
          <div class="contactUsCustomInput">
            <div class="wrap-input102 validate-input mr-5">
              <input
                class="contactUs102"
                type="text"
                name="email"
                :placeholder="$t('userForm.email')"
                v-model="customerEmail"
              />
            </div>
            <div class="wrap-input102 validate-input">
              <input
                class="contactUs102"
                type="text"
                name="telephone"
                :placeholder="$t('userForm.phone')"
                v-model="customerPhone"
              />
            </div>
          </div>
          <div class="wrap-input102 validate-input">
            <select class="contactUs102" v-model="customerRepairType">
              <option disabled selected value="0">
                {{ $t("contact.select") }}
              </option>
              <option value="19">{{ $t("userForm.phone") }}</option>
              <option value="20">{{ $t("footer.tablet") }}</option>
              <option value="21">{{ $t("footer.computer") }}</option>
              <option value="22">{{ $t("footer.wearableAccessories") }}</option>
            </select>
          </div>
          <div class="wrap-input102 validate-input">
            <textarea
              class="textarea102"
              name="customeropinion"
              id="customerOpinion"
              rows="10"
              type="text"
              :placeholder="$t('contact.textarea')"
              v-model="customerOpinion"
            ></textarea>
          </div>
          <div class="container-login102-form-btn">
            <button class="btn btn-block py-2 btn-login" @click="contactUs">
              {{ $t("buttons.send") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      categoryList: [],
      customerName: null,
      customerEmail: null,
      customerPhone: null,
      customerOpinion: null,
      customerRepairType: 0,
    };
  },
  methods: {
    validateInputs(data, type) {
      if (data == this.customerRepairType)
        if (data == 0)
          toast.warning(this.$t("mailin.mailInValidate") + type, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
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
    contactUs() {
      var validate = this.validateInputs(
        this.customerName,
        this.$t("userForm.name")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.customerEmail,
        this.$t("userForm.email")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.customerPhone,
        this.$t("userForm.phone")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.customerOpinion,
        this.$t("userForm.opinion")
      );
      if (validate == false) return;
      validate = this.validateInputs(
        this.customerRepairType,
        this.$t("customRange.repairTypes")
      );
      if (validate == false) return;

      this.$ajax
        .post("Contact/CreateContactMessage", {
          customerName: this.customerName,
          customerEmail: this.customerEmail,
          customerPhone: this.customerPhone,
          customerRepairType: this.customerRepairType,
          customerOpinion: this.customerOpinion,
        })
        .then((snapshot) => {
          if (snapshot.data)
            toast.success(
              this.$t("contact.contactSuccess") +
                ":" +
                snapshot.data.contactNumber,
              {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
                toastStyle: {
                  fontSize: "12px",
                },
              }
            );
        })
        .catch((err) => {
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
  mounted() {},
};
</script>

<style>
.contactUsLimiter {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
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
  background-color: #ced4da;
}

.wrap-contactus102 {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 10px 30px 30px;
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

.textarea102::placeholder {
  color: #999 !important;
}

.textarea102:focus {
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

.contactUs102::placeholder {
  color: #999;
}

.contactUs102:hover {
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

.contactUs102::placeholder {
  text-align: flex-start;
}

.textarea102:focus {
  border: none;
  outline: none;
}

@media (max-width: 992px) {
  .wrap-contactus102 {
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
  .wrap-contactus102 {
    padding: 0 15px 33px 15px;
  }

  .login102-form {
    width: 100%;
  }

  .contactUsCustomInput {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .wrap-contactus102 {
    padding: 0 15px 33px 15px;
  }

  .informationCard {
    width: 100%;
    padding: 0;
    margin-top: 30px;
  }
}

@media (max-width: 1214px) {
  .login102-form {
    width: 100%;
  }

  .informationCard {
    width: 100%;
    margin-right: 0px;
    padding: 0 50px 30px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .wrap-contactus102 {
    padding: 50px 10px 50px 10px;
  }
}

@media (max-width: 1372px) {
  .login102-pic {
    display: none;
  }
}

@media (max-width: 662px) {
  .informationCard {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .contactUsHeader {
    text-align: center;
  }

  .txtDark2 {
    text-align: center;
  }
}
</style>
