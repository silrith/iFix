<template>
  <h1>Profile Page</h1>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {};
  },
  components: {},
  method: {
    checkPermission() {
      this.$ajax
        .checkPermission(() => {})
        .then((snapshot) => {
          store.state.token = snapshot.token;
        });
    },
  },
};
</script>
