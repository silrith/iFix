<template>
  <div class="inStoreDiv">
    <div class="checkOutHeaderInStoreDiv">
      <p class="checkOutHeaderInStore">
        {{ this.$t("checkoutinstore.header1") }}
      </p>
      <p class="checkOutHeaderInStore">
        <span style="color: #f26d25">{{
          this.$t("checkoutinstore.header2")
        }}</span>
        {{ this.$t("checkoutinstore.header3") }}
        <span style="color: #f26d25">{{
          this.$t("checkoutinstore.header4")
        }}</span>
        ?
      </p>
    </div>
    <div class="dateCardsDiv">
      <p class="txt4">{{ this.$t("checkoutinstore.choosedate") }}</p>
      <div class="dateCards">
        <DateCard ref="dateCard" />
      </div>
    </div>
    <div class="dateCardsDiv mt-4">
      <span class="txt4">{{ this.$t("checkoutinstore.choosecheckin") }}</span>
      <span class="txtInStore"
        >{{ this.today }}, {{ this.dayNumber }} {{ this.month }}</span
      >
      <div class="bookTimeDiv">
        <p class="txt2 timeDiv" @click="selectTimeForBooking('1 pm - 2 pm')">
          1 pm - 2 pm
        </p>
        <p class="txt2 timeDiv" @click="selectTimeForBooking('2 pm - 3 pm')">
          2 pm - 3 pm
        </p>
        <p class="txt2 timeDiv" @click="selectTimeForBooking('3 pm - 4 pm')">
          3 pm - 4 pm
        </p>
      </div>
      <div class="bookTimeDiv">
        <p class="txt2 timeDiv" @click="selectTimeForBooking('4 pm - 5 pm')">
          4 pm - 5 pm
        </p>
        <p class="txt2 timeDiv" @click="selectTimeForBooking('5 pm - 6 pm')">
          5 pm - 6 pm
        </p>
        <p class="txt2 timeDiv" @click="selectTimeForBooking('Jederzeit')">
          {{ this.$t("checkoutinstore.comeanytime") }}
        </p>
      </div>
    </div>
    <CustomerInformationForm
      ref="customerInformationForm"
      :buttonTitle="buttonTitle"
      :method="this.method"
    />
    <div class="parallelogram2"></div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import DateCard from "@/components/HelperComponents/DateCard.vue";
import CustomerInformationForm from "@/components/HelperComponents/CustomerInformationForm.vue";

export default {
  data() {
    return {
      today: null,
      dayNumber: null,
      month: null,
      buttonTitle: this.$t("services.bookNow"),
      method: this.goAllSetPage,
      bookingTime: null,
    };
  },
  components: {
    DateCard,
    CustomerInformationForm,
  },
  methods: {
    goAllSetPage() {
      var a = this.$refs.customerInformationForm.firstName;
      var b = this.$refs.customerInformationForm.lastName;
      var c = this.$refs.customerInformationForm.email;
      var d = this.$refs.customerInformationForm.phone;
      var e = this.$refs.dateCard.selectedDate;

      if (e == null || e == undefined) {
        toast.error(this.$t("checkoutinstore.selectDate"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else if (this.bookingTime == null || this.bookingTime == undefined) {
        toast.error(this.$t("checkoutinstore.selectTime"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else if (a == null || a == undefined) {
        toast.error(this.$t("checkoutinstore.fillName"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else if (b == null || b == undefined) {
        toast.error(this.$t("checkoutinstore.fillLastName"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else if (c == null || c == undefined) {
        toast.error(this.$t("checkoutinstore.fillEmail"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else if (d == null || d == undefined) {
        toast.error(this.$t("checkoutinstore.fillPhone"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
        return;
      } else {
        this.$ajax
          .post("Order/CreateBookingOrder", {
            customerFirstName: a,
            customerLastName: b,
            customerEmail: c,
            customerPhone: d,
            customerInformation: localStorage.getItem(
              "informationAboutService"
            ),
            modelId: localStorage.getItem("modelId"),
            visitDate: e,
            timeInfo: this.bookingTime,
            repairTypes: JSON.parse(
              localStorage.getItem("selectedRepairTypes")
            ),
          })
          .then((snapshot) => {
            if (snapshot.data)
              this.$router.push({
                path: "/in-store-all-set",
                query: { filter: a },
              });
            else return;
          })
          .catch((error) => {
            toast.error(this.$t("apiErrors.axiosError"), {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
              toastStyle: {
                fontSize: "12px",
              },
            });
          });
      }
    },
    selectTimeForBooking(time) {
      this.bookingTime = time;
      localStorage.setItem("bookingTime", this.bookingTime);
      toast.warning(this.$t("checkoutinstore.selectedTime") + time, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
        toastStyle: {
          fontSize: "12px",
        },
      });
    },
  },
  mounted() {
    var currentDate = new Date();
    this.today = new Date().toLocaleString("en-us", { weekday: "short" });
    this.dayNumber = String(currentDate.getDate()).padStart(2, "0");
    this.month = currentDate.toLocaleString("en-us", { month: "long" });
  },
};
</script>

<style>
.inStoreDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.checkOutHeaderInStoreDiv {
  padding: 50px 0;
}

.checkOutHeaderInStore {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.dateCardsDiv {
  width: 50%;
  text-align: start;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dateCards {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.txtInStore {
  font-family: Poppins-bold;
  font-size: 25px;
  line-height: 1.5;
  color: #f26d25;
}

.bookTimeDiv {
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.timeDiv {
  border: 2px solid #f26d25;
  padding: 10px;
  border-radius: 15px;
  width: 30%;
  font-weight: 600;
  background-color: white;
}

.timeDiv:hover {
  background-color: aliceblue;
}

@media (max-width: 992px) {
  .dateCardsDiv {
    width: 80%;
  }
}

@media (max-width: 500px) {
  .checkOutHeaderInStore {
    font-size: 30px;
  }

  .dateCardsDiv {
    width: 100%;
    text-align: center;
  }

  .txt4 {
    font-size: 20px;
  }
}

.parallelogram2 {
  width: 60%;
  height: 150%;
  background: #f3efed;
  position: absolute;
  top: 130px;
  z-index: -2;
}

@media (max-width: 992px) {
  .parallelogram2 {
    top: 180px;
    width: 100%;
    height: 150%;
  }
}

@media (max-width: 400px) {
  .parallelogram2 {
    display: none;
  }
}
</style>
