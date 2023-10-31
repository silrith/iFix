<template>
  <div class="column col-lg-12 justify-content-center headerDiv">
    <div
      class="d-flex headerContainer"
      style="display: flex; justify-content: center"
    >
      <div
        class="headerContent col-lg-11"
        style="display: flex; justify-content: space-between; margin: 30px 0 20px 0"
      >
        <div
          class="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-lg-start justify-content-md-center justify-content-center justify-content-sm-center headerPic"
        >
          <router-link to="/">
            <img
              src="@/assets/photos/ifixnobg.webp"
              alt="I Fix Main Logo"
              style="height: 50px;"
              loading="eager"
            />
          </router-link>
        </div>
        <div
          class="navbar col-lg-7 col-md-12 col-sm-12 d-flex justify-content-evenly mt-3"
          style="display: flex"
        >
          <p>
            <router-link to="/" style="color: black; text-decoration: none">{{
              $t("header.home")
            }}</router-link>
          </p>
          <p>
            <router-link
              to="/aboutus"
              style="color: black; text-decoration: none"
              >{{ $t("header.about") }}</router-link
            >
          </p>
          <p>
            <router-link
              to="/services"
              style="color: black; text-decoration: none"
              >{{ $t("header.service") }}</router-link
            >
          </p>
          <p>
            <router-link
              to="/shop"
              style="color: black; text-decoration: none"
              >{{ $t("header.shop") }}</router-link
            >
          </p>
          <p>
            <router-link
              to="/contactUs"
              style="color: black; text-decoration: none"
              >{{ $t("header.contact") }}</router-link
            >
          </p>
          <p
            v-show="!isLogged"
          >
            <router-link
              to="/login"
              style="color: black; text-decoration: none"
              >{{ $t("header.sign") }}</router-link
            >
          </p>
          <div
            class="dropdown show"
            v-show="isLogged"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;"
          >
            <img
              class="profile-picture"
              :src="$store.getters.getProfilePicture"
              alt="Profile Picture"
            />
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/profile" class="dropdown-item"
                >{{ $t("header.profile") }}</router-link
              >
              <!-- <router-link to="/profile" class="dropdown-item"
                >My Orders</router-link
              > -->
              <router-link to="/" @click="toggleLogout" class="dropdown-item"
                >{{ $t("header.logout") }}</router-link
              >
            </div>
          </div>
          <LanguageSwitcher style="margin-bottom: 12px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LanguageSwitcher from "@/components/SideComponents/LanguageSwitcher.vue";
import RepairNavMenu from "@/components/SideComponents/RepairNavMenu.vue";
export default {
  data() {
    return {
      selectedTab: null,
      reload: false,
      searchQuery: null,
      data: {},
      profilePicture: null,
      google: false,
      api: false,
      facebook: false
    };
  },
  components: {
    LanguageSwitcher,
    RepairNavMenu,
  },
  methods: {
    ...mapActions(['login', 'logout']),
    toggleLogout() {
      localStorage.removeItem("googleProfilePicture");
      localStorage.removeItem("googleUserName");
      localStorage.removeItem("googleToken");
      localStorage.removeItem("isLogged");
      localStorage.setItem("googleLogged", false);
      localStorage.removeItem("loggedUserName");
      localStorage.removeItem("loggedEmail");
      localStorage.setItem("apiLogged", false);
      localStorage.setItem("facebookLogged", false);
      this.logout();
    },
  },
  mounted() {
    this.selectedTab = localStorage.getItem("cursorPointer");
    this.google = localStorage.getItem("googleLogged");
    this.facebook = localStorage.getItem("facebookLogged");
    this.api = localStorage.getItem("apiLogged");
    if(this.google == 'true')
      this.profilePicture = localStorage.getItem("profilePictureGoogle");
    else if(this.api == 'true')
      this.profilePicture = localStorage.getItem("loggedProfilePicture");
    else
      this.profilePicture = localStorage.getItem("facebookProfilePicture");
  },
  computed: {
    ...mapGetters(['isLogged']),
  },
};
</script>

<style>
.headerDiv {
  color: black;
  font-family: Poppins-Bold;
  padding-bottom: 15px;
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
  z-index: 9999;
}

.headerContent {
  display: flex;
  flex-wrap: wrap;
}

.headerPic {
  top: 13px;
}

.navbar p {
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: black;
  font-family: Poppins-Bold;
}

.navbar p.active {
  border-bottom-color: rgba(242, 109, 37, 0.95);
}

.profile-picture {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  padding: 1px;
  width: 40px !important;
  height: 40px !important;
  margin-top: 5px;
}

@media (max-width: 949px) {
  .navbar p {
    font-size: 12px !important;
    margin: 5px;
  }
}
</style>
