import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/aboutus",
    name: "about",
    component: function () {
      return import("../pages/AboutUs.vue");
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
