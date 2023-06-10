<template>
  <div class="animate__animated animate__fadeInRight">
    <div class="repairMenudropdown">
      <button class="repairMenuButton">
        {{ this.$t("header.repairServices") }}
      </button>
      <div class="repairMenudropdown-content">
        <router-link to="/androidRepair">
          {{ this.$t("header.androidRepair") }}
        </router-link>
        <router-link to="/iphoneRepair">
          {{ this.$t("header.iphoneRepair") }}
        </router-link>
        <router-link to="/tabletRepair">
          {{ this.$t("header.tabletRepair") }}
        </router-link>
        <router-link to="/computerRepair">
          {{ this.$t("header.computerRepair") }}
        </router-link>
        <router-link to="/wearableRepair">
          {{ this.$t("header.wearableRepair") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<!-- <script src="../../assets/js/repairdropdown.js"></script> -->

<style>
.repairMenuButton {
  color: rgb(0, 0, 0);
  padding: 16px;
  font-size: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.repairMenudropdown {
  position: relative;
  display: inline-block;
}

.repairMenudropdown-content {
  display: none;
  width: max-content;
  position: absolute;
  z-index: 1;
  background-color: white;
  font-size: 12px;
}

.repairMenudropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.repairMenudropdown-content a:hover {
  background-color: #f1f1f1;
}

.repairMenudropdown:hover .repairMenudropdown-content {
  display: block;
}

.repairMenudropdown .repairMenuButton:focus + .repairMenudropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .repairMenudropdown-content {
    position: static;
    display: none;
    overflow: hidden;
  }

  .repairMenudropdown-content a {
    display: none;
  }

  .repairMenudropdown-content a:first-child {
    display: block;
  }

  .repairMenudropdown:focus-within .repairMenuButton {
    background-color: #3e8e41;
  }

  .repairMenudropdown:focus-within .repairMenudropdown-content a {
    display: block;
  }
}
</style>
