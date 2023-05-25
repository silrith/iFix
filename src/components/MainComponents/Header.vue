<template>
  <header class="header">
    <div
      class="header__logo animate__animated animate__fadeInLeft animate__slower"
    >
      <router-link to="/">
        <img class="iFixLogo" src="../../assets/ifixnobg.png" alt="Logo" />
      </router-link>
    </div>
    <div class="headerDropdownMenuContainer">
      <RepairNavMenu />
      <router-link to="/login">
        <button class="bookOnlineButton animate__animated animate__fadeInRight">
          {{ $t("header.bookOnline") }}
        </button>
      </router-link>
      <router-link to="/contactUs">
        <button class="contactUsButton animate__animated animate__fadeInRight">
          {{ $t("header.contactUs") }}
        </button>
      </router-link>
      <router-link to="/login">
        <button
          class="loginButton animate__animated animate__fadeInRight"
          to="/login"
        >
          {{ $t("header.login") }}
        </button>
      </router-link>
      <LanguageSwitcher />
    </div>
  </header>
</template>

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

<style>
.dropbtn {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  border: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 20%;
  padding: 20px;
  background: #ff8c00;
  transition: backdrop-filter 0.5s;
  width: 100%;
  z-index: 99;
}

.header__logo {
  max-width: 100%;
}

.header__logo img {
  width: 100%;
}

.headerDropdownMenuContainer {
  display: flex;
  --animate-duration: 3s;
}

.bookOnlineButton {
  color: rgb(0, 0, 0);
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.contactUsButton {
  color: rgb(0, 0, 0);
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.loginButton {
  color: rgb(0, 0, 0);
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

@media (max-width: 768px) {
  .header__search {
    display: none;
  }

  @media (max-width: 768px) {
    .header__search {
      display: block;
    }

    .header__menu {
      display: block;
    }

    .header__nav {
      display: none;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      z-index: 99;
    }

    .header__nav li {
      display: block;
      margin: 10px 20px;
    }

    .header__nav a {
      font-size: 18px;
    }

    .header__nav.open {
      display: flex;
      flex-direction: column;
    }

    .header--blurred .header__nav {
      backdrop-filter: blur(10px);
    }

    .header__profile-dropdown {
      top: 80px;
      right: -20px;
    }

    .header__profile-dropdown li {
      padding: 20px;
      text-align: center;
    }

    .header__profile-dropdown i.fa-angle-up {
      display: block;
    }

    .header__profile-dropdown i.fa-angle-down {
      display: none;
    }

    .header__profile-dropdown.open {
      display: block;
    }
  }

  /* @media (max-width: 900px) {
    //header ayarlamaları yapılacak.
  } */
}
</style>
