<template>
    <Banner :img-src="imageSrc" />
</template>

<script>
import Banner from "@/components/MainComponents/Banner";
import stripeBanner from "@/assets/banners/stripeBanner.webp";

export default {
  data() {
    return {
      imageSrc: stripeBanner,
    };
  },
  components: {
    Banner,
  },
};
</script>
