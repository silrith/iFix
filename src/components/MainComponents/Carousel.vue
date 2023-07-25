<template>
  <div
    id="carouselForHomePageFade"
    class="carousel slide carousel-fade w-100 bg-white"
    data-bs-ride="carousel"
  >
    <div
      style="width: 100%"
      id="carouselForHomePage"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselForHomePage"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselForHomePage"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselForHomePage"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" style="height: 100vh">
        <div class="carousel-item active">
          <img
            src="@/assets/photos/tablet2.webp"
            class="d-block w-100 carouselImg"
            alt="Lowest Price Guarantee"
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fass', 'hand-holding-dollar']"
              /></span>
            </h3>
            <h5>{{ $t('homePage.lowestPriceGuarantee') }}</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
              {{ $t('homePage.lowestPriceGuaranteeDescription') }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/photos/phone2.webp"
            class="d-block w-100 carouselImg"
            alt="..."
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fas', 'users-gear']"
              /></span>
            </h3>
            <h5>{{ $t('homePage.free&FastDiagnosis') }}</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
            {{ $t('homePage.free&FastDiagnosisDescription') }}
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/photos/headphone3.webp"
            class="d-block w-100 carouselImg"
            alt="..."
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fas', 'shield-halved']"
              /></span>
            </h3>
            <h5>{{ $t('homePage.fullCoverage') }}</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
            {{ $t('homePage.fullCoverageDescription') }}
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselForHomePage"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselForHomePage"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script></script>

<style>
.carousel-item {
  object-fit: cover;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carouselImg{
  /* clip-path: polygon(5% 100%, 100% 0, 100% 100%); */
}
</style>
