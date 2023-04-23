<template>
  <div>
    <div class="dropdown">
      <button
        :class="langClass"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="margin-right: 5px"
      ></button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          @click.prevent="
            changeLanguage('de', 'btn btn-light dropdown fi fi-de')
          "
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          href="#"
        >
          <span class="fi fi-de mb-2" alt=""></span>
        </a>
        <a
          @click.prevent="
            changeLanguage('en', 'btn btn-light dropdown fi fi-gb')
          "
          class="flex items-center px-3 py-3 hover:bg-gray-200"
          href="#"
        >
          <span class="fi fi-gb mb-2" alt=""></span>
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
      langClass: "btn btn-light dropdown fi fi-de",
    };
  },
  methods: {
    changeLanguage(locale, langClass) {
      console.log(locale);
      this.$i18n.locale = locale;
      this.langClass = langClass;
    },
  },
  mounted() {},
};
</script>

<style></style>
