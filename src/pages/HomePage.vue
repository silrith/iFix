<template>
  <div class="mainBody">
    <!-- <input id="file" type="file" @input="uploadImage($event)" /> -->
    <Carousel />
    <section class="serviceSelectDiv">
      <div class="col-md-10">
        <h2 class="main-heading">
          Let us know which device you need <strong>repaired.</strong>
        </h2>
        <div class="row justify-content-center">
          <div v-for="category in categoryList" class="col-md-8 col-lg-6 mb-1">
            <a href="#">
              <div class="card repairCards mt-2">
                <div class="card-body" width="200">
                  <div class="row align-items-center">
                    <div class="col-7 col-md-7">
                      <h3>{{ category.categoryName }}</h3>
                      <p>{{ category.categoryDescription }}</p>
                    </div>
                    <div class="col-5 col-md-5">
                      <div class="device-bg">
                        <img
                          width="110"
                          class="img-fluid"
                          :src="category.categoryPicture"
                          alt="Repair Service"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="white-bg pb-md-0 pt-2" id="section-about">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="row align-items-end">
            <div class="col-md-12 mt-4">
              <h2 class="main-heading">Choose A Repair Option.</h2>
            </div>

            <div class="col-md-12 col-lg-5">
              <img
                class="img-fluid d-lg-block"
                src="@/assets/photos/manShowsRight2.webp"
                alt="repair"
              />
            </div>

            <div class="col-md-12 col-lg-7 mb-4">
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/shop.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">Visit A Store.</h5>
                          <p>
                            Book your broken device into one of our stores or
                            approved partners. Most repairs are completed in
                            under 30 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/booking.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">Book A Service Vehicle..</h5>
                          <p>
                            Book a mobile workshop to your home or workplace,
                            carry on with your day whilst your repair is
                            completed at the roadside.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-11 mb-2">
                  <div class="card chooseOptionCard">
                    <div class="card-body">
                      <div class="media align-items-center">
                        <img
                          class="control mr-4"
                          style="max-width: 90px"
                          src="@/assets/icons/smartPhoneNoBg.png"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">Post Your Device.</h5>
                          <p>
                            For simplicity, post your device to our repair HQ.
                            Most devices are repaired and dispatched on the same
                            day as we receive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="video-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 offset-md-6 col-lg-6 offset-lg-6">
            <h2>
              <strong
                >Our on demand call out services mean your phone is repaired at
                the roadside quickly and easily.
              </strong>
            </h2>

            <p>Your service vehicle could arrive in under an hour!</p>

            <a class="btn btn-primary" href="/mobile-phone-repair"
              >Book A Repair</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="award-section white-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <h3 class="main-heading">
              Trust Our Award Winning Service And Quality
            </h3>
          </div>

          <div class="col-md-12 col-lg-5">
            <div class="award-bg">
              <div class="card text-center">
                <div class="card-body py-3">
                  <p>We Are Endorsed As A</p>

                  <h6>
                    <a href="javascript:void(0)" class="text-danger">Which</a>?
                    Trusted trader
                  </h6>

                  <a href="javascript:void(0)"
                    ><img
                      class="img-fluid certi"
                      src="assets/images/facebook-review.png"
                      alt="facebook"
                  /></a>

                  <a href="javascript:void(0)"
                    ><img
                      class="img-fluid certi"
                      src="assets/images/google.png"
                      alt="google"
                  /></a>

                  <a href="javascript:void(0)"
                    ><img
                      class="img-fluid certi"
                      src="assets/images/trustpilot.png"
                      alt="trustpilot"
                  /></a>

                  <p class="mt-2">By 100's of 5 Star Reviews</p>

                  <img
                    class="img-fluid star"
                    src="assets/images/star.png"
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-lg-7">
            <div class="row align-items-center">
              <div class="col-md-1 text-right">
                <h2><strong>1.</strong></h2>
              </div>

              <div class="col-md-11">
                <div class="card">
                  <div class="card-body">
                    <div class="media">
                      <img
                        class="control"
                        src="images/section/220220105070156.png"
                      />
                      <div class="media-body">
                        <h5 class="mt-0">Automated Booking</h5>

                        <p>
                          Booking online is simple, Automated Email &amp; SMS
                          updates keep you in the loop so you never miss a
                          trick!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-md-1 text-right">
                <h2><strong>2.</strong></h2>
              </div>

              <div class="col-md-11">
                <div class="card">
                  <div class="card-body">
                    <div class="media">
                      <img
                        class="control"
                        src="images/section/320220105070156.png"
                      />
                      <div class="media-body">
                        <h5 class="mt-0">Trusted Techs &amp; Aftercare</h5>

                        <p>
                          With 150 years combined experience, your device is
                          safe with us. DBS &amp; GDPR compliance means your
                          data is safe too!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-md-1 text-right">
                <h2><strong>3.</strong></h2>
              </div>

              <div class="col-md-11">
                <div class="card">
                  <div class="card-body">
                    <div class="media">
                      <img
                        class="control"
                        src="images/section/120220105070156.png"
                      />
                      <div class="media-body">
                        <h5 class="mt-0">You're In Control</h5>

                        <p>
                          Our dedicated customer service team, mobile
                          application and online portal allows you to stay in
                          control every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq-section white-bg" id="faq">
      <div class="container">
        <div class="row">
          <div class="col-md-12 order-md-1">
            <div class="accordion" id="faq">
              <h3 class="mb-md-4">
                <strong>Most people ask us these questions . . .</strong>
              </h3>

              <div class="card">
                <div class="card-header" id="faqhead8">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq8"
                    aria-expanded="false"
                    aria-controls="faq8"
                    >How long will i be without my device?</a
                  >
                </div>

                <div
                  id="faq8"
                  class="collapse"
                  aria-labelledby="faqhead8"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p class="MsoNormal">
                      <span style="font-size: 10pt; line-height: 107%"
                        >With an in-store appointment or roadside repair
                        service, we always aim to repair your device within 30
                        minutes whilst you wait. For mail order we always aim to
                        receive, repair and dispatch your device back to you on
                        the same day as we receive.&nbsp;<o:p></o:p
                      ></span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead9">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq9"
                    aria-expanded="false"
                    aria-controls="faq9"
                    >Will I be updated throughout the repair process?</a
                  >
                </div>

                <div
                  id="faq9"
                  class="collapse"
                  aria-labelledby="faqhead9"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p class="MsoNormal">
                      <span style="font-size: 10pt; line-height: 107%"
                        >Our bespoke booking system sends automated SMS and
                        email notifications at every step of the repair process,
                        you’ll always be kept up to date and informed. If at
                        anytime you would like to know anything else we are
                        always on hand to help via any form of social media
                        platform, email, and telephone.&nbsp;<o:p></o:p
                      ></span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead11">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq11"
                    aria-expanded="false"
                    aria-controls="faq11"
                    >I have a busy schedule, can you accommodate?</a
                  >
                </div>

                <div
                  id="faq11"
                  class="collapse"
                  aria-labelledby="faqhead11"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p class="MsoNormal">
                      <span style="font-size: 10pt; line-height: 107%"
                        >We operate from 6AM – Midnight 7 days a week, this is
                        for both pre booked appointments and roadside repairs
                        via our mobile service vehicles. Our customer care lines
                        are always available during these hours too.
                        <b>&nbsp;</b><o:p></o:p
                      ></span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead12">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq12"
                    aria-expanded="false"
                    aria-controls="faq12"
                    >Is Your Repair Work Guaranteed?</a
                  >
                </div>

                <div
                  id="faq12"
                  class="collapse"
                  aria-labelledby="faqhead12"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p class="MsoNormal">
                      <span style="font-size: 10pt; line-height: 107%"
                        >Each repair comes with a full 90-day warranty as
                        standard. Liquid Damage repairs are exempt from our
                        normal warranty offerings. Please see more information
                        in our Terms and Conditions.&nbsp;<o:p></o:p
                      ></span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead13">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq13"
                    aria-expanded="false"
                    aria-controls="faq13"
                    >Can I only book online?</a
                  >
                </div>

                <div
                  id="faq13"
                  class="collapse"
                  aria-labelledby="faqhead13"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p class="MsoNormal">
                      <span style="font-size: 10pt; line-height: 107%"
                        >Whilst our website is probably the quickest and most
                        informative way of booking, we also have a mobile
                        application to book and manage your repair services, If
                        you would prefer a more personal service you can call
                        our dedicated customer care team ready to assist you
                        anytime between 6AM – Midnight 7 Days A Week.&nbsp;<o:p
                        ></o:p
                      ></span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead14">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq14"
                    aria-expanded="false"
                    aria-controls="faq14"
                    >Will You Wipe My Device?</a
                  >
                </div>

                <div
                  id="faq14"
                  class="collapse"
                  aria-labelledby="faqhead14"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p></p>
                    <p>
                      We always recommend that you back up and erase your
                      personal data before shipping the device to us. However
                      this is not always possible, maybe you do not want the
                      extra hassle of completing this task and that's perfectly
                      understandable.&nbsp;
                    </p>
                    <p>
                      We will leave the device data exactly how we find it and
                      none of this will be erased or changed in any way. Should
                      we need to complete a software flash we will only go ahead
                      and do this once we have contacted you and obtained your
                      full permission to do so.
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead21">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#faq21"
                    aria-expanded="false"
                    aria-controls="faq21"
                    >Is my data safe?</a
                  >
                </div>

                <div
                  id="faq21"
                  class="collapse"
                  aria-labelledby="faqhead21"
                  data-parent="#faq"
                  style=""
                >
                  <div class="card-body">
                    <p>
                      DBS Checks and GDPR Compliance Training is mandatory
                      during our employee on boarding process. Meaning we only
                      employ the most honest and reliable people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="heading-block nobottomborder d-flex justify-content-center center my-2"
            >
              <a href="https://mastermobile.co.uk/faqs" class="button-17"
                >View All Faq(s) <i class="icon-circle-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from "@/components/MainComponents/Carousel.vue";

export default {
  name: "Home Page",
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    loadData() {
      this.$ajax
        .get("category/getallcategories")
        .then((response) => {
          if (response.data) {
            window.asd = response;
            this.categoryList = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    imageToString(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataURL = reader.result;
          resolve(imageDataURL);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    uploadImage(event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        this.$ajax
          .put("category/uploadimage", {
            CategoryPicture: reader.result,
            Id: 5,
          })
          .then((snapshot) => {
            window.qwe = reader.result;
            this.loadData();
          })
          .catch((error) => {});
      };
    },
  },
  mounted() {
    this.loadData();
  },
  computed: {},
  components: {
    Carousel,
  },
  created() {},
};
</script>

<style>
.mainBody {
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 0;
  overflow: hidden;
}

.serviceSelectDiv {
  display: flex;
  width: 100%;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

.main-heading {
  text-align: center;
  font-weight: 700;
  color: var(--text-black);
  font-size: 28px;
  margin-bottom: 40px;
  font-family: "Montserrat", sans-serif;
}

#section-about {
  width: 100%;
}

.chooseOptionCard {
  background-color: rgb(255, 255, 250, 0.3) !important;
}

.repairCards {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.faq-section {
  padding: 60px 0 80px;
  display: block;
}

@media (max-width: 767px) {
  .main-heading {
    font-size: 20px;
  }

  .faq-section {
    padding: 60px 0 80px;
    display: block;
    width: 100%;
    height: 570px;
  }

  .faq-section strong {
    font-size: large;
    text-align: start;
  }

  .faq-section a {
    font-size: 90%;
    text-align: start;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .faq-section span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
}
</style>
