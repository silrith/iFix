<template>
  <footer class="col-lg-12 d-block justify-content-center align-content-center mt-5">
    <div
      class="col-lg-12 d-flex justify-content-center align-content-center text-center text-light"
    >
      <div class="col-lg-8 d-flex justify-content-between mt-3">
        <div class="col-lg-6 text-start mt-5 mb-3">
          <h2 style="font-size: 1.5rem; color: rgb(255, 103, 0)">
            {{ $t("footer.doYouWannaContactWithUs") }}
          </h2>
          <p>
            {{ $t("footer.contactUsWithPhoneOrMail") }}
          </p>
        </div>
        <div
          class="col-lg-6 row d-flex justify-content-evenly align-items-center"
        >
          <div
            class="col-lg-6 d-flex justify-content-center align-content-center align-items-center"
            style="
              background-color: #3c4954
              border-radius: 10px;
            "
          >
            <font-awesome-icon class="mr-2"
              :icon="['fas', 'phone-volume']"
              style="color: rgb(255, 103, 0); font-size: 45px"
            />
            <p style="font-size: 25px">+43 (0) 1 123 12 1</p>
          </div>
          <div
            class="col-lg-6 d-flex justify-content-center align-content-center align-items-center"
            style="
              /* background-color: #3c4954; */
              border-radius: 10px;
            "
          >
          <font-awesome-icon class="mr-2"
              :icon="['fas', 'envelope']"
              style="color: rgb(255, 103, 0); font-size: 55px"
            />
            <p style="font-size: 25px">info@ifix.at</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 d-flex justify-content-center">
      <div class="col-lg-8 col-md-12 col-sm-12 text-light">
        <hr />
      </div>
    </div>
    <div
      class="col-lg-12 d-flex justify-content-center align-content-center text-center text-light"
    >
      <div class="col-lg-8 col-md-12 col-sm-12 m-3">
        <div class="col-lg-12 row mt-4">
          <div class="col text-lg-start text-md-start text-sm-center">
            <h4 style="color: rgb(255, 103, 0); margin-bottom: 15px">
              {{ $t("footer.information") }}
            </h4>
            <div class="d-flex mb-1">
              <div class="mr-2">
                <font-awesome-icon
                  :icon="['fas', 'map']"
                  style="color: rgb(255, 103, 0); font-size: 21px"
                />
              </div>
              <div class="">
                <p style="font-size: 13px">49 / Haus 1, 1230 Wien</p>
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="mr-2">
                <font-awesome-icon
                  :icon="['fas', 'phone-volume']"
                  style="color: rgb(255, 103, 0); font-size: 19px"
                />
              </div>
              <div class="">
                <p style="font-size: 13px">+43 (0) 1 123 12 1</p>
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="mr-2">
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  style="color: rgb(255, 103, 0); font-size: 21px"
                />
              </div>
              <div class="text-light">
                <p style="font-size: 13px">info@ifix.at</p>
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="mr-2">
                <font-awesome-icon
                  :icon="['fas', 'clock']"
                  style="color: rgb(255, 103, 0); font-size: 20px"
                />
              </div>
              <div class="mb-1">
                <p style="font-size: 13px">{{ $t("footer.mon-fri") }} : 09:00 - 17:00</p>
                <p style="font-size: 13px">{{ $t("footer.sat-sun") }} : 10:00 - 15:00</p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-content-center">
            <div class="text-start">
              <h4 style="color: rgb(255, 103, 0)">{{ $t("footer.menu") }}</h4>
              <ul class="navbar-nav mr-auto" style="font-size: 13px">
                <li class="nav-item active hoverEffect">
                  <a class="nav-link" href="/"
                    >{{ $t("header.about") }}<span class="sr-only">(current)</span></a
                  >
                </li>
                <li class="nav-item active hoverEffect">
                  <router-link
                    :to="{
                      path: '/repairServices',
                      query: { filter: 'brands' },
                    }"
                    class="nav-link"
                    href="/repairServices"
                    >{{ $t("footer.services") }}</router-link
                  >
                </li>
                <li class="nav-item active hoverEffect">
                  <a class="nav-link" href="/pricing">{{ $t("header.pricing") }}</a>
                </li>
                <li class="nav-item active hoverEffect">
                  <a class="nav-link" href="/booking">{{ $t("header.booking") }}</a>
                </li>
                <li>
                  <a class="nav-link" href="/cargo">{{ $t("footer.cargoTracking") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col text-lg-end text-sm-center text-md-center">
            <h4 style="color: rgb(255, 103, 0); margin-bottom: 15px">
              {{ $t("header.repairServices") }}
            </h4>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active hoverEffect">
                <a class="nav-link" href="/" style="font-size: 13px"
                  >{{ $t("footer.smartPhone") }}<span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item active hoverEffect">
                <router-link style="font-size: 13px"
                  :to="{
                    path: '/repairServices',
                    query: { filter: 'brands' },
                  }"
                  class="nav-link"
                  href="/repairServices"
                  >{{ $t("footer.tablet") }}</router-link
                >
              </li>
              <li class="nav-item active hoverEffect">
                <a class="nav-link" href="/pricing" style="font-size: 13px">{{ $t("footer.computer") }}</a>
              </li>
              <li class="nav-item active hoverEffect">
                <a class="nav-link" href="booking" style="font-size: 13px">{{ $t("footer.wearableAccessories") }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12 d-flex justify-content-center">
      <div class="col-lg-8 col-md-12 col-sm-12 text-light">
        <hr />
      </div>
    </div>
    <div class="col-lg-12 d-flex justify-content-center">
      <p class="text-center py-3" style="font-size: 15px; color: #3c4954">
        I Fix At © {{ new Date().getFullYear() }} | {{ $t("footer.allRightsReserved") }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem("language"),
    };
  },
};
</script>

<style>
footer {
  background: #092030;
}
</style>
