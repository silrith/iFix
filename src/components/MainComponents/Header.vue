<template>
  <div class="column col-lg-12 justify-content-center headerDiv">
    <div
      class="d-flex headerContainer"
      style="display: flex; justify-content: center"
    >
      <div
        class="headerContent col-lg-11"
        style="display: flex; justify-content: space-between; margin-top: 30px"
      >
        <div
          class="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-lg-start justify-content-md-center justify-content-center justify-content-sm-center headerPic"
        >
          <router-link to="/">
            <img
              src="@/assets/photos/ifixnobg.webp"
              alt="I Fix Main Logo"
              style="height: 50px"
            />
          </router-link>
        </div>
        <div
          class="navbar col-lg-7 col-md-12 col-sm-12 d-flex justify-content-evenly mt-3"
          style="display: flex"
        >
          <p :class="{ active: this.selectedTab === 'home' }">
            <router-link to="/" style="color: black; text-decoration: none">{{
              $t("header.home")
            }}</router-link>
          </p>
          <p :class="{ active: this.selectedTab === 'about' }">
            <router-link
              to="/aboutus"
              style="color: black; text-decoration: none"
              >{{ $t("header.about") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'service' }">
            <router-link
              to="/services"
              style="color: black; text-decoration: none"
              >{{ $t("header.service") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'shop' }">
            <router-link
              to="/shop"
              style="color: black; text-decoration: none"
              >{{ $t("header.shop") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'contact' }">
            <router-link
              to="/contactUs"
              style="color: black; text-decoration: none"
              >{{ $t("header.contact") }}</router-link
            >
          </p>
          <p
            v-show="!isLogged"
            :class="{ active: this.selectedTab === 'sign in' }"
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
            style="display: flex; justify-content: center; align-items: center; padding-bottom: 20px;"
          >
            <img
              class="profile-picture"
              :src="profilePicture"
              alt="Profile Picture"
            />
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link to="/profile" class="dropdown-item"
                >Profile</router-link
              >
              <router-link to="/profile" class="dropdown-item"
                >My Orders</router-link
              >
              <router-link to="/" @click="toggleLogout" class="dropdown-item"
                >Log Out</router-link
              >
            </div>
          </div>
          <LanguageSwitcher style="margin-bottom: 15px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LanguageSwitcher from "@/components/SideComponents/LanguageSwitcher.vue";
import ProfileMenu from "@/components/SideComponents/ProfileMenu.vue";
import RepairNavMenu from "@/components/SideComponents/RepairNavMenu.vue";
export default {
  data() {
    return {
      selectedTab: null,
      image: "@/assets/header/2.png",
      reload: false,
      searchQuery: null,
      data: {},
      profilePicture: null,
    };
  },
  components: {
    LanguageSwitcher,
    ProfileMenu,
    RepairNavMenu,
  },
  methods: {
    ...mapActions(['login', 'logout']),
    toggleLogout() {
      this.logout();
    },
  },
  mounted() {
    this.selectedTab = localStorage.getItem("cursorPointer");
    this.profilePicture = localStorage.getItem("profilePictureGoogle");
    if (
      this.profilePicture != undefined ||
      this.profilePicture != null
    )
      this.profilePicture = localStorage.getItem("profilePictureGoogle");
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
}

@media (max-width: 949px) {
  .navbar p {
    font-size: 12px !important;
    margin: 5px;
  }
}
</style>
