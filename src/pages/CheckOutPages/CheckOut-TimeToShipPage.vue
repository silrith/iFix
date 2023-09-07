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
      <div class="shippingButtonDiv">
        <div class="container-login102-form-btnShip">
          <button class="btn btn-block py-2 btn-loginShip" @click="">
            Print Label
          </button>
        </div>
      </div>
      <div class="orderedListDiv">
        <p class="txt2" style="color: black; font-weight: 600">
          Shipping instructions
        </p>
        <ol>
          <li class="txt2">
            Print your shipping label - it's valid for 3 days.
          </li>
          <li class="txt2">
            Pack your device with bubble wrap in a small box.
          </li>
          <li class="txt2">Place the label on the outside of the box.</li>
          <li class="txt2">Place the label on the outside of the box.</li>
        </ol>
      </div>
      <div class="checkOutHeaderDivShip">
        <p class="txt2" style="color: black; font-weight: 600">
          Before you ship your device
        </p>
        <ul>
          <li class="txt2">
            If your device has a passcode please turn it off—this is required so
            we can run tests.
          </li>
          <li class="txt2">
            If you have an Apple device, turn off the Find My™ setting.
          </li>
          <li class="txt2">
            If you have an Android device, turn off Factory Reset Protection.
            This is required so we can run tests.
          </li>
          <li class="txt2">
            Back up your data—we're not responsible for lost files.
          </li>
          <li class="txt2">
            If you have a SIM card or any accessories please remove them—we’re
            not responsible if they’re lost.
          </li>
        </ul>
      </div>
      <div class="shipArrive">
        <p class="txt2" style="color: black; font-weight: 600">
          After your ship
        </p>
        <p class="txt2">
          We'll call you with a quote once we get your device, then send it back
          in less than a week.
        </p>
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
  font-family: Poppins-medium;
}

.checkOutHeaderDiv {
  padding: 53px 0 0 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.mandatoryDisclosures {
  width: 50%;
  height: 550px;
  overflow-y: scroll;
  background-image: url("@/assets/photos/cargo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 25%;
}

.orderedListDiv {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

.shippingButtonDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: white;
}

.container-login102-form-btnShip {
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
  padding: 15px;
}

.btn-loginShip {
  background-color: #f26d25;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
}

.btn-loginShip:hover {
  background-color: #333333;
  color: #fff;
}

.checkOutHeaderDivShip {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

.shipArrive {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

@media(max-width: 1378px){
  .container-login102-form-btnShip{
    width: 50%;
  }
}

@media(max-width: 992px){
  .mandatoryDisclosures{
    width: 80%;
  }
}

@media (max-width: 772px) {
  .checkOutHeaderDiv {
    text-align: center;
  }

  .checkOutHeader {
    font-size: 30px;
  }

  .container-login102-form-btnShip{
    width: 60%;
  }
}
</style>
