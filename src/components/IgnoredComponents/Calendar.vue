<template>
  <div>
    <div class="calendar-header">
      <button @click="previousMonth">&lt;</button>
      <h2>{{ currentMonth }} - {{ currentYear }}</h2>
      <button @click="nextMonth">&gt;</button>
    </div>
    <table class="calendar-table">
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in calendar" :key="week">
          <td
            v-for="date in week"
            :key="date.day"
            :class="{ today: isToday(date), selected: isSelected(date) }"
            @click="selectDate(date)"
          >
            {{ date.day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: null,
      currentYear: null,
      selectedDate: null,
    };
  },
  computed: {
    daysOfWeek() {
      const daysOfWeek = {
        monday: this.$t("calendar.daysOfWeek.monday"),
        tuesday: this.$t("calendar.daysOfWeek.tuesday"),
        wednesday: this.$t("calendar.daysOfWeek.wednesday"),
        thursday: this.$t("calendar.daysOfWeek.thursday"),
        friday: this.$t("calendar.daysOfWeek.friday"),
        saturday: this.$t("calendar.daysOfWeek.saturday"),
        sunday: this.$t("calendar.daysOfWeek.sunday"),
      };
      return daysOfWeek;
    },
    calendar() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const lastDayOfWeek = lastDayOfMonth.getDay();
      const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
      const nextMonthDays = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;

      const calendar = [];
      let week = [];

      for (let i = 0; i < prevMonthDays; i++) {
        const day = new Date(year, month, -prevMonthDays + i).getDate();
        week.push({ day, isCurrentMonth: false });
      }

      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const day = new Date(year, month, i).getDate();
        week.push({ day, isCurrentMonth: true });

        if (week.length === 7) {
          calendar.push(week);
          week = [];
        }
      }

      for (let i = 1; i <= nextMonthDays; i++) {
        const day = new Date(year, month + 1, i).getDate();
        week.push({ day, isCurrentMonth: false });
      }

      calendar.push(week);

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;

      let monthName = "";

      switch (currentMonth) {
        case 1:
          monthName = "Ocak";
          break;
        case 2:
          monthName = "Şubat";
          break;
        case 3:
          monthName = "Mart";
          break;
        case 4:
          monthName = "Nisan";
          break;
        case 5:
          monthName = "Mayıs";
          break;
        case 6:
          monthName = "Haziran";
          break;
        case 7:
          monthName = "Temmuz";
          break;
        case 8:
          monthName = "Ağustos";
          break;
        case 9:
          monthName = "Eylül";
          break;
        case 10:
          monthName = "Ekim";
          break;
        case 11:
          monthName = "Kasım";
          break;
        case 12:
          monthName = "Aralık";
          break;
        default:
          monthName = "Bilinmeyen Ay";
      }

      return calendar;
    },
  },
  methods: {
    isToday(date) {
      const today = new Date();
      return date.isCurrentMonth && date.day === today.getDate();
    },
    isSelected(date) {
      return (
        this.selectedDate !== null &&
        date.isCurrentMonth &&
        date.day === this.selectedDate.getDate()
      );
    },
    selectDate(date) {
      this.selectedDate = new Date();
      this.selectedDate.setDate(date.day);
    },
    previousMonth() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() - 1;
      this.selectedDate = null;
      this.currentMonth = this.currentMonth - 1;
    },
    nextMonth() {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      this.selectedDate = null;
      this.currentMonth = new Date(year, month).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
    },
  },
};
</script>

<style scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.calendar-table {
  width: 100%;
  border-collapse: collapse;
}

.calendar-table th {
  padding: 0.5rem;
  text-align: center;
}

.calendar-table td {
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
}

.today {
  background-color: #e3e3e3;
}

.selected {
  background-color: #ddd;
}
</style>
