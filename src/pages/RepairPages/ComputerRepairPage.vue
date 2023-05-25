<template>
  <div class="repairPagePicture">
    <div class="repairPagePictureText col">
      <h1 class="repairPagePictureText">Computer Repair</h1>
      <h2 class="repairPagePictureText">
        Select a device to schedule your appointment for repair
      </h2>
    </div>
    <div class="col"></div>
  </div>
  <div class="RepairPage">
    <div class="container">
      <div class="row repairPageContext">
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/orangeBackGround.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/orangeBackGround.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/orangeBackGround.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/orangeBackGround.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/orangeBackGround.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="col-11" />
  <div class="column text-dark-emphasis mx-auto">
    <h2>Your Device is not on the list ?</h2>
    <p>No problem ! Just send us a message.</p>

    <div class="row">
      <form>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">First and Last name</span>
          </div>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
          />
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=".....@ifixat.com"
            value=".....@ifixat.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Brand</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option value="1">Iphone</option>
            <option value="2">Samsung</option>
            <option value="3">Huawei</option>
            <option value="4">Motorola</option>
            <option value="" selected disabled hidden>
              Choose your device brand
            </option>
            <option value="5">Xaomi</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <small
            >If you are using computer, you can use CTRL button for multiple
            select.</small
          >
        </div>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Reason for repair</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <button type="submit" class="button-17" style="margin-bottom: 3px">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.repairPage {
  width: 100%;
  min-height: 450px;
}

.repairPageContext {
  display: flex;
  justify-content: space-around;
}

.repairPagePicture {
  background-image: url("@/assets/photos/repairImage.jpg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  max-height: 300px;
  height: 300px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  box-shadow: 1px 1px 5px black;
}

.repairPagePictureText {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  text-shadow: 1px 1px rgb(255, 0, 0);
}

.repairFormDiv {
  display: flex;
}

@media (max-width: 900px) {
  .repairPagePicture {
    background-size: contain;
    height: 100px;
  }
  .repairPagePictureText {
    text-shadow: 1px 1px white;
    font-size: 15px;
  }
}
</style>
