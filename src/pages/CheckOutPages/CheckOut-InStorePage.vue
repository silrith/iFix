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
  </div>
</template>

<script>
import DateCard from "@/components/HelperComponents/DateCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    DateCard,
  },
  methods: {},
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
}

.dateCards{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

  .txt4{
    font-size: 20px;
  }
}
</style>
