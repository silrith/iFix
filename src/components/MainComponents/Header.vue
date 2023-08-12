<template>
  <div class="column col-lg-12 justify-content-center headerDiv">
    <div
      class="d-flex headerContainer"
      style="display: flex; justify-content: center;"
    >
      <div
        class="headerContent col-lg-11"
        style="display: flex; justify-content: space-between; margin-top: 30px;"
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
            <router-link to="/" style="color: black; text-decoration: none"
              >{{ $t("header.home") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'about' }">
            <router-link to="/aboutus" style="color: black; text-decoration: none"
              >{{ $t("header.about") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'service' }">
            <router-link to="/services" style="color: black; text-decoration: none"
              >{{ $t("header.service") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'shop' }">
            <router-link to="/" style="color: black; text-decoration: none"
              >{{ $t("header.shop") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'contact' }">
            <router-link to="/contactUs" style="color: black; text-decoration: none"
              >{{ $t("header.contact") }}</router-link
            >
          </p>
          <p :class="{ active: this.selectedTab === 'sign in' }">
            <router-link to="/login" style="color: black; text-decoration: none"
              >{{ $t("header.sign") }}</router-link
            >
          </p>
          <LanguageSwitcher style="margin-bottom: 15px;"/>
        </div>
      </div>
    </div>
    
    <!-- <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/">
        <img
          to="/"
          src="@/assets/photos/ifixnobg.webp"
          alt=""
          style="max-height: 8vh"
        />
      </a>
      <button
        class="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active hoverEffect">
            <a class="nav-link" href="/"
              >{{ $t("header.home") }}<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active hoverEffect">
            <router-link
              :to="{
                path: '/repairServices',
                query: { filter: 'brands' },
              }"
              class="nav-link"
              href="/repairServices"
              >{{ $t("header.repairs") }}</router-link
            >
          </li>
          <li class="nav-item active hoverEffect">
            <a class="nav-link" href="/pricing">{{ $t("header.pricing") }}</a>
          </li>
          <li class="nav-item active hoverEffect">
            <a class="nav-link" href="/booking">{{ $t("header.booking") }}</a>
          </li>
          <li class="nav-item active dropdown hoverEffect">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("header.nextSteps") }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/aboutus">{{ $t("header.about") }}</a>
              <a class="dropdown-item" href="/contactus">{{ $t("header.contactUs") }}</a>
              <a class="dropdown-item" href="/login">{{ $t("header.login") }}</a>
            </div>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0 p-1">
          <input
            class="form-control mr-sm-2"
            type="search"
            :placeholder='$t("header.searchBox")'
            aria-label="Search"
          />
        </form>

       
      </div>
    </nav> -->
  </div>
</template>

<style>
.headerDiv {
  color: black;
  font-family: Poppins-Bold;
  padding-bottom: 30px;
  box-shadow: rgb(38, 57, 77) 0px 10px 10px -10px;
}

.headerContent {
  display: flex;
  flex-wrap: wrap;
}

.headerPic{
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

@media (max-width: 949px) {
  .navbar p {
    font-size: 12px !important;
    margin: 5px;
  }
}
</style>

<script>
import LanguageSwitcher from "../SideComponents/LanguageSwitcher.vue";
import ProfileMenu from "../SideComponents/ProfileMenu.vue";
import RepairNavMenu from "../SideComponents/RepairNavMenu.vue";
export default {
  data() {
    return {
      selectedTab: null,
      image: "@/assets/header/2.png",
      reload: false,
      searchQuery: null,
      isLogged: false,
      data: {},
    };
  },
  components: {
    LanguageSwitcher,
    ProfileMenu,
    RepairNavMenu,
  },
  methods: {
    search() {
      console.log(this.searchQuery);
    },
    login() {
      this.isLogged = true;
    },
    isUserLoggedOrLogout($event) {
      this.data = $event;
      this.isLogged = this.data.isLogged;
    },
  },
  mounted() {
    this.selectedTab = localStorage.getItem("cursorPointer");
  },
};
</script>
