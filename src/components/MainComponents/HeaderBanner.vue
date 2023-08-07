<template>
  <div class="col-lg-12 d-flex justify-content-center headerBanner" style=" margin-top: 30px">
    <div
      class="col-lg-5 col-md-12 col-sm-12 row justify-content-start"
      style="height: max-content;"
    >
      <div class="col-lg-12 d-flex mb-3">
        <p><b>IFIX. DEINE REPARATURWERKSTATT</b></p>
      </div>
      <div class="col-lg-12 mb-4 headerBannerH" style="height: max-content">
        <p>
          <b>Express Reparatur in Wien - vor Ort oder</b><br /><b>per Post!</b>
        </p>
      </div>
      <div class="col-lg-12 mb-3">
        <p>
          We are business consultant is company with a wide array of
          <br />skills who assists business owners with their endeavors.
          <br />Consultants are knowledgeable because of their education and
          previous experience.
        </p>
      </div>
      <div class="col-lg-10 d-flex justify-content-between">
        <input
          class="col-lg-6 col-md-6 col-sm-6 col-6 headerSearch"
          type="text"
          placeholder="Search your telephone model"
        />
        <button class="headerButton">Go To Shop</button>
      </div>
    </div>
    <div
      class="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center" style="margin-top: 30px;"
    >
      <div class="col-lg-4 col-md-4 col-sm-4">
        <img
          to="/"
          src="@/assets/header/3.png"
          alt=""
          style="width: fit-content; max-width: 100%"
        />
      </div>
      <div class="bgDiv col-lg-4 col-md-4 col-sm-4">
        <img
          class="mb-3"
          to="/"
          src="@/assets/header/1.png"
          alt=""
          style="width: max-content; max-width: 100%"
        />
      </div>
      <div class="mb-5 col-lg-4 col-md-4 col-sm-4">
        <img
          to="/"
          src="@/assets/header/4.png"
          alt=""
          style="width: fit-content; max-width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<style>
.headerSearch {
  border-radius: 20px;
  height: 2.5rem;
  border-color: transparent;
  background-color: rgb(255, 103, 0, 1);
  text-align: center;
  outline: none;
  caret-color: white;
  caret-shape: bar;
  color: white;
}

.headerBannerH {
  font-size: 40px;
  line-height: 40px;
  flex-wrap: wrap;
}

.headerSearch::placeholder {
  color: rgb(255, 255, 255, 0.5);
  font-size: 12px;
}

.headerButton {
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  font-weight: 600;
  height: 2.5rem;
  border-color: #ff6700;
  text-align: center;
  background-color: white;
}

.headerBanner {
  flex-wrap: wrap;
}

@media (max-width: 1299) {
  .headerBanner p {
    font-size: 5px;
    padding: 10px;
  }

  .headerButton {
    font-size: 2px !important;
  }
}
</style>
