<template>
  <div class="repairPagePicture">
    <div class="repairPagePictureText col">
      <h1 class="repairPagePictureText">Tablet Repair</h1>
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
          class="card m-2 bg-transparent p-1 opacity-80 text-dark"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            src="@/assets/photos/computer2.jpg"
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
            src="@/assets/photos/computer2.jpg"
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
            src="@/assets/photos/computer2.jpg"
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
            src="@/assets/photos/computer2.jpg"
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
            src="@/assets/photos/computer2.jpg"
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
</template>

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

@media (max-width: 900px) {
  .repairPagePicture {
    background-size: contain;
    height: 100px;
  }
  .repairPagePictureText {
    background-color: rgba(128, 128, 128, 0.5);
    text-shadow: 1px 1px white;
  }
}
</style>
