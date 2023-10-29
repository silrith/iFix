<template>
  <div class="accountActivationDiv">
    <img
      src="@/assets/photos/ifixnobg.webp"
      alt="I Fix At Main Logo"
      width="300"
      class="p-5"
    />
    <p class="txt2">
      <b>{{ this.$t("signin.activationSuccess") }}</b>
    </p>
    <p class="txt2" style="line-height: 3">
      <b
        >{{ this.$t("signin.subtitle4") }}
        <span style="color: #f26d25; font-size: 20px"
          ><b>{{ this.countDown }}</b></span
        >
        {{ this.$t("signin.subtitle5") }}</b
      >
    </p>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      countDown: 10,
      email: null,
      userName: null,
      activationSuccess: false,
    };
  },
  methods: {
    redirectToHomePage() {
      this.$router.push({ path: "/" });
    },
    activateAccount() {
      this.$ajax
        .put("Auth/ActivateAccount", {
          username: this.$route.query.username,
          email: this.$route.query.email,
        })
        .then((snapshot) => {
          if (snapshot.data) {
            this.activationSuccess = true;
            toast.success(this.$t("signin.toast1"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
            const interval = setInterval(() => {
              if (this.countDown > 0) {
                this.countDown--;
              } else {
                clearInterval(interval);
                this.redirectToHomePage();
              }
            }, 1000);
          }
        })
        .catch((err) =>
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          })
        );
    },
  },
  mounted() {
    this.activateAccount();
  },
};
</script>

<style>
.accountActivationDiv {
  width: 100%;
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 578px) {
  .accountActivationDiv {
    font-size: 10px;
  }

  .txt2 {
    font-size: 10px;
  }
}
</style>
