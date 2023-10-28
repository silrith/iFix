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
        <div
          style="
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          "
        >
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
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            ref="customerFirstName"
            type="text"
            name="name"
            :placeholder="$t('userForm.firstName')"
            v-model="customerFirstName"
            disabled
          />
          <font-awesome-icon
            :icon="['fas', 'pen']"
            style="
              color: #f26d25;
              font-size: 20px;
              border: 2px solid #f26d25;
              border-radius: 50%;
              padding: 5px;
            "
            @click="toggleInput('customerFirstName')"
          />
        </div>
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            ref="customerLastName"
            type="text"
            name="last name"
            :placeholder="$t('userForm.lastName')"
            v-model="customerLastName"
            disabled
          />
          <font-awesome-icon
            :icon="['fas', 'pen']"
            style="
              color: #f26d25;
              font-size: 20px;
              border: 2px solid #f26d25;
              border-radius: 50%;
              padding: 5px;
            "
            @click="toggleInput('customerLastName')"
          />
        </div>
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            ref="customerEmail"
            type="text"
            name="email"
            :placeholder="$t('userForm.email')"
            v-model="customerEmail"
            disabled
          />
          <font-awesome-icon
            :icon="['fas', 'pen']"
            style="
              color: #f26d25;
              font-size: 20px;
              border: 2px solid #f26d25;
              border-radius: 50%;
              padding: 5px;
            "
            @click="toggleInput('customerEmail')"
          />
        </div>
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            ref="customerPhone"
            type="text"
            name="telephone"
            :placeholder="$t('userForm.phone')"
            v-model="customerPhone"
            disabled
          />
          <font-awesome-icon
            :icon="['fas', 'pen']"
            style="
              color: #f26d25;
              font-size: 20px;
              border: 2px solid #f26d25;
              border-radius: 50%;
              padding: 5px;
            "
            @click="toggleInput('customerPhone')"
          />
        </div>
        <div class="container-profile102-form-btn">
          <button class="btn btn-block py-2 btn-profile" @click="updateProfile">
            {{ $t("buttons.update") }}
          </button>
        </div>
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            type="text"
            name="password"
            :placeholder="$t('userForm.password')"
            v-model="password"
          />
        </div>
        <div class="profileInputContentDiv">
          <input
            class="profilePage102"
            type="text"
            name="confirmation password"
            :placeholder="$t('userForm.repeatPassword')"
            v-model="confirmationPassword"
          />
        </div>
        <div class="container-profile102-form-btn">
          <button
            class="btn btn-block py-2 btn-profile"
            @click="changePassword"
          >
            {{ $t("buttons.changePassword") }}
          </button>
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
      profilePicture: null,
      customerFirstName: null,
      customerLastName: null,
      customerEmail: null,
      customerPhone: null,
      password: null,
      confirmationPassword: null,
      api: false,
      google: false,
      facebook: false,
      disableInput: true,
    };
  },
  methods: {
    toggleInput(fieldName) {
      this.$refs[fieldName].disabled = !this.$refs[fieldName].disabled;
    },
    checkLoginMethod() {
      this.api = localStorage.getItem("apiLogged");
      this.google = localStorage.getItem("googleLogged");
      this.facebook = localStorage.getItem("facebookLogged");
    },
    getUserDatas() {
      this.$ajax
        .post("User/GetProfileInformation", {
          username: localStorage.getItem("loggedUserName"),
          email: localStorage.getItem("loggedEmail"),
        })
        .then((snapshot) => {
          console.log(snapshot);
          this.profilePicture = snapshot.data.profilePicture;
          this.customerFirstName = snapshot.data.firstName;
          this.email = snapshot.data.email;
          this.customerLastName = snapshot.data.lastName;
          this.customerEmail = snapshot.data.email;
          this.customerPhone = snapshot.data.phone;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    googleDatas() {},
    facebookDatas() {},
    updateProfile() {
      this.$ajax
        .put("User/UpdateProfile", {
          loggedUsername: localStorage.getItem("loggedUserName"),
          loggedEmail: localStorage.getItem("loggedEmail"),
          firstName: this.customerFirstName,
          lastName: this.customerLastName,
          email: this.customerEmail,
          phone: this.customerPhone,
        })
        .then((snapshot) => {
          if (snapshot.data == "OK")
            toast.success(this.$t("profile.profileUpdated"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProfilePicture() {
      this.$ajax
        .put("User/UpdateProfilePicture", {
          loggedUsername: localStorage.getItem("loggedUserName"),
          loggedEmail: localStorage.getItem("loggedEmail"),
          profilePicture : this.profilePicture
        })
        .then((snapshot) => {
          if (snapshot.data == "OK")
            toast.success(this.$t("profile.pictureUpdated"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePassword() {
      this.$ajax
        .put("User/ChangePassword", {
          loggedUsername: localStorage.getItem("loggedUserName"),
          loggedEmail: localStorage.getItem("loggedEmail"),
          password: this.password,
          confirmationPassword: this.confirmationPassword,
        })
        .then((snapshot) => {
          if (snapshot.data == "OK")
            toast.success(this.$t("profile.passwordUpdated"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.checkLoginMethod();
    if (this.api) this.getUserDatas();
    else if (this.google) this.googleDatas();
    else this.facebookDatas();
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
  padding: 36px;
  width: 100%;
  background-color: #dee2e6;
}

.profileInputDiv {
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

.profileInputContentDiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1192px) {
  .profilePage102 {
    width: 60%;
  }

  .profileInputDiv {
    width: 80%;
  }
}

@media (max-width: 992px) {
  .profilePage102 {
    width: 80%;
  }
}

@media (max-width: 762px) {
  .btn-profile {
    width: 40%;
  }
}

@media (max-width: 576px) {
  .profilePage102 {
    width: 90%;
  }

  .profileInputDiv {
    width: 100%;
  }

  .profile102-form {
    padding: 20px;
  }

  .btn-profile {
    width: 60%;
  }
}
</style>
