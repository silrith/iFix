<template>
  <div style="width: 100%">
    <img
      style="width: 100%; height: 42vh"
      src="@/assets/photos/calendar.webp"
      alt=""
    />
  </div>
  <div>
    <div class="col-md-10 m-2">
      <div class="row">
      <div class="col-lg-6 d-flex flex-row">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Please Select Date</label>
          <VueDatePicker 
          format="dd/MM/yyyy"
          input-class-name="dp-custom-input"
          menu-class-name="dp-custom-menu"
          calendar-class-name="dp-custom-calendar"
          calendar-cell-class-name="dp-custom-cell"
          v-model="selectedDate" 
          :flow="flow"
          placeholder="Select Date"
          show-now-button
          now-button-label="Current"
          required 
          disable-year-select
          locale="de"
          ignore-time-validation
          :min-date="new Date()"
          :cancelText="cancelTexting" selectText="Auswählen"
          :day-names="['1', '2', '3', '4', '5', '6', '7']"
          @update:model-value="printSelectedDate"          
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Select the appropriate time for the appointment</label>
          <select class="form-select dp-custom-input" aria-label="Default select example">
  <option selected>Select Available Time</option>
  <option v-for="item in bookingHours" :value="item">{{ item.availableTime }}</option>
</select>
        </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name and Surname</label>
    <input type="text" class="form-control dp-custom-input" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="tel" class="form-control dp-custom-input" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control dp-custom-input" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Do you have detailed information or something you want to add?</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-secondary dp-custom-input">Submit</button>
</form>
      </div>
      <div class="col-lg-6">
       asdasd
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  data() {
    return {
      bookingHours: [],
      selectedDate : null,
      cancelTexting : "Berko"
    };
  },
  components: {
    VueDatePicker 
  },
  methods: {
    printSelectedDate() {
      alert(this.selectedDate);
    },
    loadBookingHours() {
      this.$ajax
        .get("Booking/GetAllBookingHours")
        .then((response) => {
          if (response.data) {
            this.bookingHours = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
      this.loadBookingHours();
    },
};
</script>

<style lang="scss">
.dp-custom-input {
  box-shadow: 0 0 6px #1976d2;
  color: #f88818;

  &:hover {
    border-color: #1976d2;
  }
}
.dp-custom-menu {
  box-shadow: 0 0 6px #1976d2;
  color: #1976d2;

  &:hover {
    border-color: #1976d2;
  }
}
.dp-custom-calendar {
  .dp__calendar_item {
    border: 1px solid var(--dp-border-color-hover);
    border-radius: 50%;
  }
}
.dp-custom-cell {
  border-radius: 50%;
}

//2. datepicker

.custom-month-year-component {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.select-input {
  margin: 5px 3px;
  padding: 5px;
  width: auto;
  border-radius: 4px;
  border-color: var(--dp-border-color);
  outline: none;
  -webkit-appearance: menulist;
}

.icons {
  display: flex;
  box-sizing: border-box;
}

.custom-icon {
  padding: 5px;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 25px;
  color: var(--dp-icon-color);
  text-align: center;
  border-radius: 50%;

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    background: var(--dp-hover-color);
  }
}

.action-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>