<template>
  <div class="categoryCardDiv">
    <div>
      <img :src="cardElement.repairTypePicture" alt="Category Picture" />
    </div>
    <div class="txtCard">
      <p>{{ cardElement.repairTypeCategory }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cardElement: Object,
  },
};
</script>

<style>
.categoryCardDiv {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 25px;
  border: 1px;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
  z-index:3;
}

.categoryCardDiv:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82,
    #ff4305
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.categoryCardDiv img {
  width: 50%;
  margin-top: 10px;
}

.txtCard {
  font-family: Poppins-Regular;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: #ef4e7b;
  margin-top: 20px;
}

@media (max-width: 779px) {
  .categoryCardDiv {
    width: 100px;
    height: 100px;
  }
}
</style>
