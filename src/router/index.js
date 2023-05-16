import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../pages/WhoAreWe.vue");
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: function () {
      return import("../pages/Dashboard.vue");
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: function () {
      return import("../pages/ProfilePage.vue");
    },
  },
  {
    path: "/login",
    name: "login",
    component: function () {
      return import("../pages/LoginPage.vue");
    },
  },
  {
    path: "/androidRepair",
    name: "androidRepair",
    component: function () {
      return import("../pages/RepairPages/AndroidRepairPage.vue");
    },
  },
  {
    path: "/iphoneRepair",
    name: "iphoneRepair",
    component: function () {
      return import("../pages/RepairPages/IPhoneRepairPage.vue");
    },
  },
  {
    path: "/tabletRepair",
    name: "tabletRepair",
    component: function () {
      return import("../pages/RepairPages/TabletRepairPage.vue");
    },
  },
  {
    path: "/computerRepair",
    name: "computerRepair",
    component: function () {
      return import("../pages/RepairPages/ComputerRepairPage.vue");
    },
  },
  {
    path: "/wearableRepair",
    name: "wearableRepair",
    component: function () {
      return import("../pages/RepairPages/WearableRepairPage.vue");
    },
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: function () {
      return import("../pages/ContactUsPage.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
