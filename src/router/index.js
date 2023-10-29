import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ResetPassword from "../pages/ResetPasswordPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/account-activation",
    name: "Account Activation",
    component: function () {
      return import("../pages/AccountActivationPage.vue");
    },
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword
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
    path: "/shopPrepare",
    name: "Shop Payment Prepare",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-ShopPreparePage.vue");
    },
  },
  {
    path: "/shopSuccess",
    name: "Shop Payment Success",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-ShopPaymentSuccessPage.vue");
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
    path: "/checkOut",
    name: "Check Out",
    component: function () {
      return import("../pages/CheckOutPages/CheckOutPage.vue");
    },
  },
  {
    path: "/inStore",
    name: "Check Out In Store",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-InStorePage.vue");
    },
  },
  {
    path: "/in-store-all-set",
    name: "You're All Set!",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-InStoreAllSetPage.vue");
    },
  },
  {
    path: "/mailIn",
    name: "Check Out Mail In",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-MailInPage.vue");
    },
  },
  {
    path: "/mail-in-time-to-ship",
    name: "All Set - Time To Ship",
    component: function () {
      return import("../pages/CheckOutPages/CheckOut-TimeToShipPage.vue");
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
  
  // if(to.path == "/shop")
  //   loader[0].style.display = "flex";
  next();
});

router.afterEach(() => {
  setTimeout(() => {
  }, 1000);
});

export default router;
