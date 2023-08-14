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
    path: "/signup",
    name: "Sign Up",
    component: function () {
      return import("../pages/SignupPage.vue");
    },
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: function () {
      return import("../pages/ContactUsPage.vue");
    },
  },
  {
    path: "/services",
    name: "Services",
    component: function () {
      return import("../pages/ServicePage.vue");
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: function () {
      return import("../pages/ShopPage.vue");
    },
  },
  {
    path: "/repairTypes",
    name: "Repair Types",
    component: function () {
      return import("../pages/RepairTypesPage.vue");
    },
  },
  {
    path: "/payments",
    name: "Payment",
    component: function () {
      return import("../pages/PaymentPage.vue");
    },
  },
  {
    path: "/paymentResult",
    name: "Payment Result",
    component: function () {
      return import("../pages/PaymentResultPage.vue");
    },
  },
  {
    path: "/models",
    name: "Models",
    component: function () {
      return import("../pages/ModelsPage.vue");
    },
  },
  {
    path: "/booking",
    name: "Booking",
    component: function () {
      return import("../pages/BookingPage.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
