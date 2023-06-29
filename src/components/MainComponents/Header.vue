<template>
  <div class="headerDiv">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/">
        <img
          to="/"
          src="@/assets/photos/zyro-image2.webp"
          alt=""
          style="max-height: 8vh"
        />
      </a>
      <button
        class="navbar-toggler"
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
            <a class="nav-link" href="/androidRepair"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active hoverEffect">
            <router-link :to="{
            path: '/repairServices',
            query: { filter: 'brands' },
          }" class="nav-link" href="/repairServices">Repairs</router-link>
          </li>
          <li class="nav-item active hoverEffect">
            <a class="nav-link" href="/pricing">Pricing</a>
          </li>
          <li class="nav-item active hoverEffect">
            <a class="nav-link" href="booking">Booking</a>
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
              Next Steps
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/aboutus">About</a>
              <a class="dropdown-item" href="/contactus">Contact us</a>
              <a class="dropdown-item" href="/login">Login</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <LanguageSwitcher />
      </div>
    </nav>
  </div>
</template>

<style>
.headerDiv {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 9999;
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    margin: 20px 40px;
    margin-top: 20px;
    margin-right: 40px;
    margin-bottom: 20px;
    margin-left: 40px;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
    margin-left: 40px;
    font-weight: 600;
    font-size: 17px;
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
  mounted() {},
};
</script>
