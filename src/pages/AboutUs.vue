<template>
  <div class="aboutDiv">
    <div class="aboutHeader">
      <h1 style="color: #333">{{ this.$t('about.header1') }}</h1>
      <p class="txt1">
        {{ this.$t('about.header2') }}
        <br /> {{ this.$t('about.header3') }}
      </p>
    </div>
    <div class="aboutPicDiv">
      <img
        class="about100-pic"
        src="@/assets/header/about1.png"
        alt="Team Picture 1"
      />
      <div class="information1">
        <p class="txt1">
          {{ this.$t('about.information1') }}
        </p>
      </div>
    </div>
    <div class="aboutPicDiv2">
      <div class="information2">
        <p class="txt1">
          {{ this.$t('about.information2') }}
          <b style="color: #f26d25"
            >{{ this.$t('about.information3') }}</b
          >
        </p>
      </div>
      <img
        class="about101-pic"
        src="@/assets/header/about4.jpg"
        alt="Team Picture 1"
      />
    </div>
  </div>
</template>

<style>
.aboutDiv {
  display: flex;
  flex-direction: column;
  min-height: 86vh;
  font-family: Poppins-Regular;
  padding: 50px 0 0 0;
  align-items: center;
}

.aboutDiv h1 {
  font-family: Poppins-Bold;
  padding: 0 0 30px 0;
}

.aboutHeader {
  width: 80%;
  text-align: center;
  padding: 10px 10px 10px 10px;
}

.aboutPicDiv {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.aboutPicDiv2 {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.about100-pic {
  width: 615px;
  padding-bottom: 15px;
}

.about100-pic img {
  max-width: 100%;
}

.about101-pic {
  width: 615px;
  padding: 0 37px 10px 0;
}

.about101-pic img {
  max-width: 34%;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
}

.txt3 {
  font-family: Poppins-bold;
  font-size: 15px;
  line-height: 1.5;
  color: #f26d25;
}

.information1 p {
  line-height: 30px;
  padding: 20px;
  text-align: justify;
}

.information2 p {
  line-height: 30px;
  padding: 20px;
  text-align: justify;
}

@media (max-width: 1840px) {
  .information1 {
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutPicDiv {
    justify-content: center;
    align-items: center;
    text-align: start !important;
  }

  .aboutPicDiv2 {
    justify-content: center;
  }

  .aboutPicDiv img {
    width: 615px;
    padding: 0;
  }

  .aboutPicDiv2 img {
    width: 615px;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .aboutPicDiv img {
    width: 100%;
    padding: 0;
  }

  .aboutPicDiv2 img {
    width: 100%;
    padding: 0;
  }
}
</style>
