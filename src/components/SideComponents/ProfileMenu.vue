<template>
  <div>
    <div class="dropdown">
      <img
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        alt="profilePic"
      />
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <RouterLink
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          to="/profile"
          >My Account</RouterLink
        >
        <RouterLink
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          to="/about"
          >Orders</RouterLink
        >
        <RouterLink
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          to="/about"
          >Settings</RouterLink
        >
        <RouterLink
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          to="/"
          @click="logout"
          >Logout</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    logout() {
      this.isLogged = false;
      this.$emit("isLogged", this.isLogged);
    },
  },
};
</script>

<style>
.dropdown img {
  width: 4vh;
  border-radius: 50%;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.25);
}
</style>
