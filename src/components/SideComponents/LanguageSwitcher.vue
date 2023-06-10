<template>
  <div class="languageSwitcherdropdown">
    <button
      :class="langClass"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style="width: 5vh; background-color: transparent; padding: 3px"
    ></button>
    <div
      class="dropdown-menu"
      id="languageImageDiv"
      aria-labelledby="dropdownMenuButton"
    >
      <div class="languageImageA">
        <a
          @click.prevent="
            changeLanguage('de', 'btn btn-light dropdown fi fi-de')
          "
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          href="#"
        >
          <span id="languageImage" class="fi fi-de mb-2" alt=""></span>
        </a>
      </div>
      <div class="languageImageA">
        <a
          @click.prevent="
            changeLanguage('en', 'btn btn-light dropdown fi fi-gb')
          "
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          href="#"
        >
          <span id="languageImage" class="fi fi-gb mb-2" alt=""></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: null,
      langClass: "btn btn-light dropdown fi fi-gb",
    };
  },
  methods: {
    changeLanguage(locale, langClass) {
      this.$i18n.locale = locale;
      this.langClass = langClass;
    },
  },
  mounted() {},
};
</script>

<style>
.languageSwitcherdropdown {
  width: 4vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

#languageImage {
  width: 3vh;
  height: 3vh;
  padding: 1px 0px 1px 0px;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
}
#languageImageDiv {
  text-align: -webkit-center;
  --bs-dropdown-min-width: 3vh !important;
  --bs-dropdown-bg: rgba(255, 255, 255, 1) !important;
  left: -8px !important;
  top: 2px !important;
  text-align: center;
}
</style>
