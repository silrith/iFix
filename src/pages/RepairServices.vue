<template>
  <p>RepairServices</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loadData() {
      this.$ajax
        .get("user/getallusers")
        .then((response) => {
          if (response.data) {
            this.categoryList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // alert(this.$route.query.filter);
    this.loadData();
  },
};
</script>
