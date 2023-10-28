<template>
  <div class="profilePageMainDiv">
    <div class="profile102-form">
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
        <div style="margin-bottom: 50px">
          <img
            class="profilePageImageDiv"
            :src="profilePicture"
            alt="User Profile Picture"
            width="100"
          />
        </div>
        <div style="width: 30%">
          <hr class="txt3" />
        </div>
      </div>
      <div class="profileInputDiv">
        <input
        class="profilePage102"
        type="text"
        name="name"
        :placeholder="$t('userForm.firstName')"
        v-model="customerFirstName"
      />
      <input
        class="profilePage102"
        type="text"
        name="name"
        :placeholder="$t('userForm.lastName')"
        v-model="customerLastName"
      />
      <input
        class="profilePage102"
        type="text"
        name="email"
        :placeholder="$t('userForm.email')"
        v-model="customerEmail"
      />

      <input
        class="profilePage102"
        type="text"
        name="telephone"
        :placeholder="$t('userForm.phone')"
        v-model="customerPhone"
      />

      <input
        class="profilePage102"
        type="text"
        name="email"
        :placeholder="$t('userForm.password')"
        v-model="password"
      />

      <input
        class="profilePage102"
        type="text"
        name="telephone"
        :placeholder="$t('userForm.repeatPassword')"
        v-model="confirmationPassword"
      />
      </div>
      <div class="container-profile102-form-btn">
        <button class="btn btn-block py-2 btn-profile" @click="contactUs">
          {{ $t("buttons.update") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: null,
      customerFirstName: null,
      customerLastName: null,
      customerEmail: null,
      customerPhone: null,
      password: null,
      confirmationPassword: null,
      api: false,
      google:false,
      facebook: false,
    };
  },
  methods: {
    checkLoginMethod(){
      this.api = localStorage.getItem("apiLogged");
      this.google = localStorage.getItem("googleLogged");
      this.facebook = localStorage.getItem("facebookLogged");
    },
    getUserDatas() {
      this.$ajax
          .post("User/GetProfileInformation", {
            username: localStorage.getItem("loggedUserName"),
            email : localStorage.getItem("loggedEmail")
          })
          .then((snapshot) => {
            console.log(snapshot);
            this.profilePicture = snapshot.data.profilePicture;
            this.customerFirstName = snapshot.data.firstName;
            this.email = snapshot.data.email;
            this.customerLastName = snapshot.data.lastName;
            this.customerEmail = snapshot.data.phone;
            this.customerPhone = snapshot.data.email;
          })
          .catch((err) => {
            console.log(err);
          })
    },
    googleDatas(){},
    facebookDatas(){},
  },
  mounted() {
    this.checkLoginMethod();
    if(this.api)
      this.getUserDatas();
    else if(this.google)
      this.googleDatas();
    else
      this.facebookDatas();
  },
};
</script>

<style>
.profilePageMainDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.profilePageImageDiv {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: #f25d26;
  border: 2px solid #999;
  padding: 1px;
}

.profile102-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 67px;
  width: 100%;
  background-color: #dee2e6;
}

.profileInputDiv{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profilePage102 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1;
  display: block;
  width: 50%;
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
  margin: 10px;
}

.profilePage102::placeholder {
  color: #999;
  font-size: 12px;
}

.profilePage102:hover {
  border: none;
}

.profilePage102:focus {
  color: #666666;
  padding-left: 15px;
  border: none;
  outline: none;
}

.btn-profile {
  background-color: #f26d25;
  color: #fff;
  width: 25%;
}

.btn-profile:hover {
  background-color: #333333;
  color: #fff;
}

.container-profile102-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
}

@media(max-width:1192px){
  .profilePage102{
    width: 60%;
  }

  .profileInputDiv{
    width: 80%;
  }
}

@media(max-width:992px){
  .profilePage102{
    width: 80%;
  }
}

@media(max-width:762px){
  .btn-profile{
    width: 30%;
  }
}

@media(max-width:576px){
  .profilePage102{
    width: 100%;
  }

  .profileInputDiv{
    width: 100%;
  }

  .profile102-form {
    padding: 20px;
  }

  .btn-profile{
    width: 100%;
  }
}
</style>
