<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade w-100 bg-black"
    data-bs-ride="carousel"
  >
    <div
      style="width: 100%"
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" style="height: 100vh">
        <div class="carousel-item active">
          <img
            src="@/assets/photos/phone2.webp"
            class="d-block w-100"
            alt="Lowest Price Guarantee"
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fass', 'hand-holding-dollar']"
              /></span>
            </h3>
            <h5>Lowest Price Guarantee</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
              Elektronik cihazlarınızda meydana gelen arızalar için uzman
              çözümler sunan firmamız, en yüksek kalite standartlarında tamir
              hizmeti vermektedir. Deneyimli ve eğitimli teknisyenlerimiz, her
              marka ve modeldeki cihazların sorunlarını hızlı ve etkili bir
              şekilde çözmektedir. Elektronik cihaz tamiri konusunda sektörde
              öncü olan firmamız, müşterilerimize düşük bütçe garantisi
              sunmaktadır.Siz de profesyonel ve ekonomik elektronik cihaz tamiri
              için bize başvurabilirsiniz.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/photos/tablet2.webp"
            class="d-block w-100"
            alt="..."
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fas', 'users-gear']"
              /></span>
            </h3>
            <h5>Free & Fast Diagnosis</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
              Ücretsiz ve hızlı teşhis imkanı sunan firmamız, elektronik
              cihazlarınızın tamiratını en kısa sürede gerçekleştirmektedir.
              Deneyimli teknisyenlerimiz, sorunları doğru ve hızlı bir şekilde
              teşhis ederek etkili çözümler sunmaktadır. Müşteri memnuniyetini
              ön planda tutan firmamız, tamirat sürecinde şeffaf iletişim ve
              uygun fiyat politikasıyla öne çıkmaktadır. Size en kaliteli
              hizmeti sunmak için hazırız, hemen bize başvurun ve elektronik
              cihazlarınızı sorunsuz bir şekilde onarıp size geri teslim edelim.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/photos/headphone3.webp"
            class="d-block w-100"
            alt="..."
            style="height: 100vh"
          />
          <div class="carousel-caption d-md-block">
            <h3 class="text-center mb-6 mt-4">
              <span class="inline-block p-4 h-20 w-20">
                <font-awesome-icon :icon="['fas', 'shield-halved']"
              /></span>
            </h3>
            <h5>Full Coverage</h5>
            <p
              style="
                text-align: justify;
                text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
              "
            >
              Her müşterinin beklentilerini tam anlamıyla karşılamak için geniş
              bir yelpazede hizmetler sunmaktadır. İşimizi tutkuyla yapıyor ve
              kalitemizi kanıtlamak için sürekli olarak kendimizi
              geliştiriyoruz. Bizi tercih ettiğinizde, en iyi tam kapsamlı
              hizmetleri alacağınızdan emin olabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
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
</style>
