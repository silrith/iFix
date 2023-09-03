import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
var loader = document.getElementsByClassName("loadingScreen")
const routes = [
  {
    path: "/",
    name: "Home",
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
    path: "/serviceResult",
    name: "Service Result",
    component: function () {
      return import("../pages/ServiceResultPage.vue");
    },
  },
  {
    path: "/servicefilter",
    name: "Service Filter",
    component: function () {
      return import("../pages/ServiceFilterPage.vue");
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

router.beforeEach((to, from, next) => {
  document.title = to.name ?? 'Default Title'
  
  if(to.path == "/shop")
    loader[0].style.display = "flex";
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loader[0].style.display = "none";
  }, 1000);
});

export default router;
