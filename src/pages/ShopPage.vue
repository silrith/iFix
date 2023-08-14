<template>
  <div class="shopMainDiv">
    <div class="shopContentDiv">
      <div class="shopComponentsDiv"><SpairPartCard/></div>
      <div class="specialPartsDiv">
        <testCard />
        <testCard />
        <testCard />
        <testCard />
        <testCard />
        <testCard />
      </div>
      <div class="summaryDiv">asd</div>
    </div>
  </div>
</template>

<script>
import SpairPartCard from "@/components/HelperComponents/SpairPartCard";
import testCard from "@/components/HelperComponents/testCard";

export default {
  data() {
    return {};
  },
  components: {
    SpairPartCard,
    testCard
  },
  methods: {},
};
</script>

<style>
.shopMainDiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.shopContentDiv{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.shopComponentsDiv {
  width: 20%;
  padding: 10px;
}

.specialPartsDiv {
  width: 60%;
  height: 60vh;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
}

.summaryDiv{
    width: 20%;
    background-color: brown;
    padding: 10px;
}
</style>
