<template>
  <div class="inStoreDiv">
    <div class="checkOutHeaderInStoreDiv">
      <p class="checkOutHeaderInStore">When should</p>
      <p class="checkOutHeaderInStore">
        <span style="color: #f26d25">WE</span> expect
        <span style="color: #f26d25">YOU</span> ?
      </p>
    </div>
    <div class="dateCardsDiv">
      <p class="txt4">Choose date</p>
      <div class="dateCards">
        <DateCard />
      </div>
    </div>
    <div class="dateCardsDiv mt-4">
      <span class="txt4">Choose a check-in time on</span>
      <span class="txtInStore"
        >{{ this.today }}, {{ this.dayNumber }} {{ this.month }}</span
      >
      <div class="bookTimeDiv">
        <p class="txt2 timeDiv">1 pm - 2 pm</p>
        <p class="txt2 timeDiv">2 pm - 3 pm</p>
        <p class="txt2 timeDiv">3 pm - 4 pm</p>
      </div>
      <div class="bookTimeDiv">
        <p class="txt2 timeDiv">4 pm - 5 pm</p>
        <p class="txt2 timeDiv">5 pm - 6 pm</p>
        <p class="txt2 timeDiv">Come in anytime</p>
      </div>
    </div>
    <CustomerInformationForm :buttonTitle="buttonTitle" :method="this.method" />
    <div class="parallelogram2"></div>
  </div>
</template>

<script>
import DateCard from "@/components/HelperComponents/DateCard.vue";
import CustomerInformationForm from "../../components/HelperComponents/CustomerInformationForm.vue";

export default {
  data() {
    return {
      today: null,
      dayNumber: null,
      month: null,
      buttonTitle: this.$t("services.bookNow"),
      method: this.goAllSetPage
    };
  },
  components: {
    DateCard,
    CustomerInformationForm,
  },
  methods: {
    goAllSetPage(){
        this.$router.push({ 
          path: '/in-store-all-set'
        });
    }
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
