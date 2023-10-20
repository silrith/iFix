<template>
  <div class="dateCardMainDiv">
    <div
      class="dateCardMain"
      style="border: 4px solid #f26d25"
      @click="selectDate(this.todayDate)"
    >
      <p style="width: 60%">
        {{ this.$t("dateCard.today") }}
      </p>
      <p>{{ this.firstDayName }}</p>
      <p>{{ this.today }}</p>
    </div>
    <div
      class="dateCardMain"
      style="border: 3px solid #f26d25"
      @click="selectDate(this.tomorrowDate)"
    >
      <p style="width: 60%">{{ this.$t("dateCard.tomorrow") }}</p>
      <p>{{ this.secondDayName }}</p>
      <p>{{ this.tomorrow }}</p>
    </div>
    <div
      class="dateCardMain"
      style="border: 2px solid #f26d25"
      @click="selectDate(this.twoDaysLaterDate)"
    >
      <hr />
      <p>{{ this.thirdDayName }}</p>
      <p>{{ this.twoDaysLater }}</p>
    </div>
    <div
      class="dateCardMain"
      style="border: 1px solid #f26d25"
      @click="selectDate(this.threeDaysLaterDate)"
    >
      <hr />
      <p>{{ this.fourthDayName }}</p>
      <p>{{ this.threeDaysLater }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: null,
      tomorrow: null,
      twoDaysLater: null,
      threeDaysLater: null,
      currentLanguage: null,
      todayDate: null,
      tomorrowDate: null,
      twoDaysLaterDate: null,
      threeDaysLaterDate: null,
      firstDayName: null,
      secondDayName: null,
      thirdDayName: null,
      fourthDayName: null,
      selectedDate: null,
    };
  },
  methods: {
    selectDate(date) {
      this.selectedDate = date;
      localStorage.setItem("inStoreDate", this.selectedDate);
    },
    getCurrentDate() {
      this.todayDate = new Date();
      this.tomorrowDate = new Date(this.todayDate);
      this.tomorrowDate.setDate(this.todayDate.getDate() + 1);
      this.twoDaysLaterDate = new Date(this.todayDate);
      this.twoDaysLaterDate.setDate(this.todayDate.getDate() + 2);
      this.threeDaysLaterDate = new Date(this.todayDate);
      this.threeDaysLaterDate.setDate(this.todayDate.getDate() + 3);

      var firstResult = this.getCardProperties(
        this.todayDate,
        this.today,
        this.firstDayName
      );
      var secondResult = this.getCardProperties(
        this.tomorrowDate,
        this.tomorrow,
        this.secondDayName
      );
      var thirdResult = this.getCardProperties(
        this.twoDaysLaterDate,
        this.twoDaysLater,
        this.thirdDayName
      );
      var fourthResult = this.getCardProperties(
        this.threeDaysLaterDate,
        this.threeDaysLater,
        this.fourthDayName
      );

      this.today = firstResult[0];
      console.log(firstResult[0]);
      this.firstDayName = firstResult[1];

      this.tomorrow = secondResult[0];
      this.secondDayName = secondResult[1];

      this.twoDaysLater = thirdResult[0];
      this.thirdDayName = thirdResult[1];

      this.threeDaysLater = fourthResult[0];
      this.fourthDayName = fourthResult[1];
    },
    getCardProperties(date, whichDay, whichDayName) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getDate() + 1).padStart(2, "0");
      const listed = date.toDateString().split(" ");
      const dayName = listed[0];
      return [
        (whichDay = day.toString()),
        (whichDayName = dayName),
      ];
    },
  },
  mounted() {
    this.getCurrentDate();
  },
};
</script>

<style>
.dateCardMain {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  border-radius: 20px;
  text-align: center;
  aspect-ratio: 16/9;
  padding: 15px 10px 10px 10px;
  font-family: Poppins-Regular;
  font-weight: 600;
  background-color: white;
}

.dateCardMain:hover {
  color: #333333;
  background-color: aliceblue;
  scale: 1.1;
}

.dateCardMainDiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}

@media (max-width: 1576px) {
  .dateCardMainDiv{
    justify-content: space-evenly;
  }
}

@media (max-width: 992px) {
  .dateCardMain {
    width: 160px;
    font-size: 12px;
  }

  .dateCardMainDiv{
    justify-content: space-evenly;
  }
}

@media (max-width: 770px) {
  .dateCardMain {
    width: 140px;
    font-size: 11px;
  }

  .dateCardMainDiv{
    justify-content: space-evenly;
  }
}
</style>
