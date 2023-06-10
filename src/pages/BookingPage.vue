<template>
  <div style="width: 100%">
    <img
      style="width: 100%; height: 42vh"
      src="@/assets/photos/calendar.webp"
      alt=""
    />
  </div>
  <div>
    <div class="col-12 row">
      <div class="col-sm-6">
        <Calendar />
      </div>
      <div class="col-sm-6">a</div>
    </div>
  </div>
</template>
<script>
import Calendar from "@/components/MainComponents/Calendar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Calendar,
  },
};
</script>
<style></style>
