<template>
  <div class="timeToShipDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">All Set</p>
      <p class="checkOutHeader">
        Time To
        <span style="color: #f26d25"> Ship</span>
      </p>
      <p class="txt2" style="font-size: 15px; font-weight: 600">
        We emailed you a confirmation with your shipping label.
      </p>
    </div>
    <div class="mandatoryDisclosures">
      <div class="mailSelectDiv"> //CSS EKLENECEK.
        <div class="container-login102-form-btn">
          <button class="btn btn-block py-2 btn-login" @click="">
           Print Label
          </button>
        </div>
      </div>
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

.mandatoryDisclosures {
  width: 50%;
  height: 505px;
  overflow-y: scroll;
  background-image: url("@/assets/photos/deliveryTruck.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  background-color: transparent;
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
