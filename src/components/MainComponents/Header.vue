<template>
  <header class="header">
    <div class="header__logo">
      <img class="iFixLogo" src="../../assets/iFix.At_logo.jpg" alt="Logo" />
    </div>
    <div class="header__search">
      <input type="text" placeholder="Search..." v-model="searchQuery" />
      <button class="header__search-button" @click="search">Search</button>
    </div>
    <div class="profilePictureAndProfileName">
      <p>{{ this.UserName }}</p>
      <LanguageSwitcher />
      <RouterLink
        class="btn btn-dark"
        to="/login"
        v-if="!isLogged"
        @click="login"
      >
        Login
      </RouterLink>
      <ProfileMenu v-if="isLogged" @isLogged="isUserLoggedOrLogout" />
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from "../SideComponents/LanguageSwitcher.vue";
import ProfileMenu from "../SideComponents/ProfileMenu.vue";
export default {
  data() {
    return {
      searchQuery: null,
      UserName: "Admin",
      isLogged: false,
      data: {},
    };
  },
  components: {
    LanguageSwitcher,
    ProfileMenu,
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
.profilePictureAndProfileName {
  display: flex;
  align-items: center;
  width: 15vh;
  justify-content: space-evenly;
}
.profilePic {
  width: 30px;
  height: 30px;
}
/* Dropdown Button */
.dropbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 20px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: backdrop-filter 0.5s;
  width: 100%;
  z-index: 1; /* Header'ın diğer elementlerin önünde olmasını sağlar */
}

.header__logo {
  width: 9vh;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

.header__logo img {
  width: 100%;
}

.header__search {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.header__search input[type="text"] {
  padding: 3px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 10px;
  width: 100px;
  margin-right: 10px;
  box-shadow: 5px;
}

.header__search-button {
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 10px;
  cursor: pointer;
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
}
</style>
