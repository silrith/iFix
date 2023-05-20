<template>
  <body class="mainBody">
    <div class="row col-12 guaranteeDiv">
      <div
        class="col-sm-3 mt-5 mb-5 animate__animated animate__bounceInDown animate__slow guaranteeDescription"
      >
        <h3 class="text-center mb-6 mt-4">
          <span class="inline-block p-4 h-20 w-20">
            <font-awesome-icon :icon="['fass', 'hand-holding-dollar']"
          /></span>
        </h3>
        <h5 class="text-center font-semibold mb-3 mt-5">
          Lowest Price Guarantee
        </h5>
        <p class="text-center text-sm">
          We're so confident that we'll meet your requirements at the lowest
          price possible without compromising the quality of work.
        </p>
      </div>
      <div
        class="col-sm-3 mt-5 mb-5 animate__animated animate__bounceInDown animate__slower guaranteeDescription"
      >
        <h3 class="text-center mb-6 mt-4">
          <span class="inline-block p-4 h-20 w-20">
            <font-awesome-icon :icon="['fas', 'users-gear']"
          /></span>
        </h3>
        <h3 class="text-center font-semibold mb-3 mt-5">
          Free &amp; fast Diagnosis
        </h3>
        <p class="text-center">
          Our technicians are fully skilled and professional in handling complex
          errors. However, if we fail to repair your device, we don’t charge you
          anything.
        </p>
      </div>
      <div
        class="col-sm-3 mt-5 mb-5 animate__animated animate__bounceInDown animate__slow guaranteeDescription"
      >
        <h2 class="text-center mb-6 mt-4">
          <span class="inline-block p-4 h-20 w-20">
            <font-awesome-icon :icon="['fas', 'shield-halved']"
          /></span>
        </h2>
        <h5 class="text-center font-semibold mb-3 mt-5">Full Coverage</h5>
        <p class="text-center text-sm">
          We're so confident that we'll meet your requirements at the lowest
          price possible without compromising the quality of work.
        </p>
      </div>
    </div>
    <section class="serviceSelectDiv mb-2 mt-3">
      <div class="container">
        <h2 class="main-heading">
          Let us know which device you need <strong>repaired.</strong>
        </h2>
        <div class="heading-block bottommargin-sm center"></div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5 mb-1">
            <a href="#">
              <div class="card repairCards mt-2">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-7 col-md-7">
                      <h3>Mobile Phone</h3>
                      <p>We can repair your broken mobile phone in no time!</p>
                    </div>
                    <div class="col-5 col-md-5">
                      <div class="device-bg">
                        <img
                          width="164"
                          class="img-fluid"
                          src="@/assets/photos/smartphonesnobg.png"
                          alt="Mobile Phone"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-5 mb-1">
            <a href="https://mastermobile.co.uk/product-category/c-tablet">
              <div class="card repairCards mt-2">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-7 col-md-7 mb-1">
                      <h3>Tablet</h3>
                      <p>
                        We can repair your broken Tablet quickly and
                        easily.&nbsp;
                      </p>
                    </div>
                    <div class="col-5 col-md-5">
                      <div class="device-bg">
                        <img
                          width="200"
                          class="img-fluid"
                          src="@/assets/tabletsnobg.png"
                          alt="Tablet"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-5">
            <a href="#">
              <div class="card repairCards mt-2">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-7 col-md-7">
                      <h3>Wearable Stuff</h3>
                      <p>
                        We can repair your broken wearable accesories in a short
                        time.
                      </p>
                    </div>
                    <div class="col-5 col-md-5">
                      <div class="device-bg">
                        <img
                          width="200"
                          class="img-fluid"
                          src="@/assets/photos/iwatchnobg.png"
                          alt="Mobile Phone"
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
    <section class="white-bg pb-md-0 pt-2 mt-1" id="section-about">
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="row align-items-end">
            <div class="col-md-12 mt-4">
              <h2 class="main-heading">Choose A Repair Option.</h2>
            </div>

            <div class="col-md-12 col-lg-5">
              <img
                class="img-fluid d-lg-block"
                src="@/assets/photos/manShowsRight2.png"
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
                          src="@/assets/shop.png"
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
                          src="@/assets/booking.png"
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
  </body>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

export default {
  name: "Home Page",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  components: {},
  created() {},
  methods: {},
};
</script>

<style>
.mainBody {
  display: flex;
  width: 100%;
  height: 50%;
  position: inherit;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  z-index: 0;
  overflow: hidden;
}

.guaranteeDiv {
  justify-content: space-around;
  background-image: url(@/assets/photos/orangeBackGround.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
}

.guaranteeDescription {
  background-color: rgb(255, 255, 250, 0.3);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  background-image: url("@/assets/photos/orangeBackGround.jpg");
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
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

  .guaranteeDiv {
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }

  #section-about {
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
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
