<template>
  <div class="mb-2" style="width: 100%">
    <img :src="imgSrc" alt="Resim" style="width: 100%; height: 40vh;">
  </div>
</template>

<script>
export default {
  props: ['imgSrc'],
};
</script>