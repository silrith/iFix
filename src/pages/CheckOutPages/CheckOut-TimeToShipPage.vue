<template>
  <div class="timeToShipDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">All Set</p>
      <p class="checkOutHeader">Time To
        <span style="color: #f26d25"> Ship</span>
      </p>
      <p class="txt2" style="font-size: 15px; font-weight: 600">
        We emailed you a confirmation with your shipping label.
      </p>
    </div>
  </div>
</template>

<style>
.timeToShipDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.checkOutHeaderDiv {
  padding: 50px 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

@media (max-width: 772px) {
  .checkOutHeaderDiv {
    text-align: center;
  }

  .checkOutHeader {
    font-size: 30px;
  }
}
</style>
