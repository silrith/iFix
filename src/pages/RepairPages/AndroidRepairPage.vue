<template>
  <div
    class="repairPagePicture animate__animated animate__backInLeft animate__slower"
  >
    <div class="repairPagePictureText col">
      <h1 class="repairPagePictureText">Android Repair</h1>
      <h3 class="repairPagePictureText">
        Select a device to schedule your appointment for repair
      </h3>
    </div>
    <div class="col"></div>
  </div>
  <div class="RepairPage">
    <div class="container">
      <div class="row repairPageContext">
        <div
          class="card m-2 bg-transparent p-1 opacity-80 text-dark repairPageCard"
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
          class="card m-2 bg-transparent p-1 opacity-80 text-dark repairPageCard"
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
          class="card m-2 bg-transparent p-1 opacity-80 text-dark repairPageCard"
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
          class="card m-2 bg-transparent p-1 opacity-80 text-dark repairPageCard"
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
          class="card m-2 bg-transparent p-1 opacity-80 text-dark repairPageCard"
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
  <div class="column text-dark-emphasis mt-3 repairFormDiv">
    <h2 class="mt-3">Your Device is not on the list ?</h2>
    <p>No problem ! Just send us a message.</p>

    <div class="row col-12">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Full name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            value=""
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=".....@ifixat.com"
            value=""
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
            >If you are using a computer, you can make multiple selections by
            pressing the 'CTRL' key.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Full name</label>
          <textarea
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Repair reason"
            value=""
          ></textarea>
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
    return {
      users: [],
    };
  },
  created() {},
  methods: {},
  mounted() {},
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
  box-shadow: rgba(0, 0, 0, 0.17) 0px 0px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.repairPageCard {
  width: 18rem;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
  border-radius: 9%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.repairPageCard img {
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  align-items: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 0px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  .repairPageCard {
    width: 95%;
    font-size: 12px;
  }
}
</style>
