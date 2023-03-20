<template>
  <div v-for="(img, index) in data" :key="index" class="c-gallery__item">
    <img :src="img" alt="gallery-item" />
  </div>
</template>

<script>
export default {
  name: 'c-gallery',
  props: {
    data: { type: Array }
  }
}
</script>

<style scoped>
.c-allery__item {
  width: 328px;
  height: 185px;
}
</style>
