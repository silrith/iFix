import { createRouter, createWebHistory } from "vue-router";
import Shop from "@/pages/ShopPage.vue";
import Login from "@/pages/LoginPage.vue";
import AboutUs from "../pages/AboutUs.vue";
import SignUp from "@/pages/SignupPage.vue";
import HomePage from "../pages/HomePage.vue";
import Profile from "@/pages/ProfilePage.vue";
import Service from "@/pages/ServicePage.vue";
import ContactUs from "@/pages/ContactUsPage.vue";
import RepairTypes from "@/pages/RepairTypesPage.vue";
import ServiceResult from "@/pages/ServiceResultPage.vue";
import ServiceFilter from "@/pages/ServiceFilterPage.vue";
import ResetPassword from "../pages/ResetPasswordPage.vue";
import NewPasswordField from "../pages/NewPasswordFieldPage.vue";
import CheckOutPage from "@/pages/CheckOutPages/CheckOutPage.vue";
import Accountactivation from "../pages/AccountActivationPage.vue";
import MailIn from "@/pages/CheckOutPages/CheckOut-MailInPage.vue";
import InStore from "@/pages/CheckOutPages/CheckOut-InStorePage.vue";
import TimeToShip from "@/pages/CheckOutPages/CheckOut-TimeToShipPage.vue";
import ShopPrepare from "@/pages/CheckOutPages/CheckOut-ShopPreparePage.vue";
import InStoreAllSet from "@/pages/CheckOutPages/CheckOut-InStoreAllSetPage.vue";
import ShopPaymentSuccess from "@/pages/CheckOutPages/CheckOut-ShopPaymentSuccessPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/account-activation",
    name: "Account Activation",
    component: Accountactivation
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword
  },
  {
    path: "/new-password-field",
    name: "New Password Fields",
    component: NewPasswordField
  },
  {
    path: "/aboutus",
    name: "about",
    component: AboutUs
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs
  },
  {
    path: "/services",
    name: "Services",
    component: Service
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/shopPrepare",
    name: "Shop Payment Prepare",
    component: ShopPrepare
  },
  {
    path: "/shopSuccess",
    name: "Shop Payment Success",
    component: ShopPaymentSuccess
  },
  {
    path: "/repairTypes",
    name: "Repair Types",
    component: RepairTypes
  },
  {
    path: "/serviceResult",
    name: "Service Result",
    component: ServiceResult
  },
  {
    path: "/servicefilter",
    name: "Service Filter",
    component: ServiceFilter
  },
  {
    path: "/checkOut",
    name: "Check Out",
    component: CheckOutPage
  },
  {
    path: "/inStore",
    name: "Check Out In Store",
    component: InStore
  },
  {
    path: "/in-store-all-set",
    name: "You're All Set!",
    component: InStoreAllSet
  },
  {
    path: "/mailIn",
    name: "Check Out Mail In",
    component: MailIn
  },
  {
    path: "/mail-in-time-to-ship",
    name: "All Set - Time To Ship",
    component: TimeToShip
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
