<template>
  <div class="serviceResultPageDiv">
    <div class="serviceResultPageContent">
      <div class="repairTypesForModel">
        <div class="serviceResultDiv">
          <p class="serviceFilterText">
            <span style="color: #f26d25">What's</span> wrong with if ?
          </p>
          <p class="serviceFilterText2">Things happen-we've seen it all.</p>
        </div>
        <div class="serviceFilterGradients">
            <div class="repairTypesDiv">asd</div>
            <div class="repairTypesDiv2">asd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.serviceResultPageDiv {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
}

.serviceResultPageContent {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
}

.repairTypesForModel {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.repairTypeCart {
  background-color: #ff4800;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.serviceFilterText {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
  text-align: start !important;
  padding: 0 0 0 13px;
}

.serviceFilterText2 {
  font-family: Poppins-Regular;
  width: 100%;
  font-weight: 600;
  text-align: start !important;
  color: #666666;
  padding: 0 0 0 13px;
}

.serviceResultDiv {
  width: 100%;
}

.repairTypesDiv {
  display: flex;
  flex-direction: column;
  width: 75%;
  width: 75%;
  height: 500px;
  background-color: white;
  border-radius: 25px;
  border: 1px;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
}

.repairTypesDiv:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #ff4800,
    #ff5400,
    #ff6000,
    #ff6d00,
    #ff7900,
    #ff8500,
    #ff9100,
    #ff9e00,
    #ffb600
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

.repairTypesDiv2 {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 500px;
  background-color: white;
  border-radius: 25px;
  border: 1px;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
}

.repairTypesDiv2:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #ff4800,
    #ff5400,
    #ff6000,
    #ff6d00,
    #ff7900,
    #ff8500,
    #ff9100,
    #ff9e00,
    #ffb600
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

.serviceFilterGradients{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>
