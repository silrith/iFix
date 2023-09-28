<template>
  <div class="profilePageMainDiv">
    <div class="profilePageContent">
      <div class="profilePageImageDiv">
        <img
          class="profilePagePicture"
          :src="profilePicture"
          alt="Profile Picture"
        />
      </div>
      <div
        style="
          padding-top: 60px;
          text-align: center;
          width: 40%;
          border-bottom: 2px solid #999;
          border-left: 2px solid #999;
          border-right: 2px solid #999;
        "
      >
        <p class="txt2">User Name : {{ this.name }}</p>
        <p class="txt2">User Last Name : {{ this.name }}</p>
        <p class="txt2">Email : {{ this.name }}</p>
        <p class="txt2">Telephone : {{ this.name }}</p>
        <p class="txt2">Adress : {{ this.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: null,
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    getUserDatas() {
      this.profilePicture = localStorage.getItem("profilePictureGoogle");
      console.log(this.profilePicture);
      this.name = localStorage.getItem("userName");
      this.email = null;
      this.password = null;
    },
  },
  mounted() {
    this.getUserDatas();
  },
};
</script>

<style>
.profilePageMainDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.profilePageContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 400px;
}

.profilePageImageDiv {
  border-radius: 2px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #f25d26;
  border: 2px solid #666;
}

.profilePagePicture {
  position: relative;
  top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #999999;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 2;
  background-color: #f25d26;
}

.profilePageHeaderText {
  position: relative;
  top: 50px;
  font-size: 25px;
  font-weight: 600;
  color: #666;
}
</style>
