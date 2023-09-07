<template>
  <div class="inStoreAllSetDiv">
    <div class="checkOutHeaderDivAllSet">
      <p class="checkOutHeader">
        <span style="color: #f26d25">You're </span>all set, OZGUR.
      </p>
      <p class="checkOutHeader">See you soon!</p>
      <p class="txt2" style="font-size: 15px; color: black; font-weight: 600">
        We sent a confirmation email and text. See you soon!
      </p>
    </div>
    <div class="allSetImg">
      <img src="@/assets/photos/booking.png" alt="Booking Picture" />
    </div>
    <div class="bookTimeDiv2">
      <p class="txt2 timeDiv2">add to calendar</p>
      <p class="txt2 timeDiv2"><u>+43 1 9909777</u></p>
      <p class="txt2 timeDiv2">get directions</p>
    </div>
  </div>
</template>

<style>
.inStoreAllSetDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.checkOutHeaderDivAllSet {
  padding: 50px 0 30px 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.allSetImg {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

.bookTimeDiv2 {
  text-align: center;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 30px 0px 60px 0;
}

.timeDiv2 {
  text-align: center;
  border: 2px solid #f26d25;
  padding: 10px;
  border-radius: 15px;
  width: 30%;
  font-weight: 600;
  background-color: white;
  padding: 20px;
}

.timeDiv2:hover {
  background-color: aliceblue;
}
</style>
