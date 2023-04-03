<template>
  <div class="v-home">
    <CHeader positionAbsolute />
    <CSlider />
    <div class="v-home__content">
      <p class="v-home__content-text">INSPIRACIÓN</p>
      <h1 class="v-home__content-title">Sigue nuestros proyectos</h1>
      <a
        class="v-home__content__instagram-title-group"
        href="https://www.instagram.com/msh.interiorismo/"
      >
        <img
          src="../assets/img/icon-ig-lineas.svg"
          alt="icono-instagram"
          class="v-home__content__instagram-icon"
        />
        <p class="v-home__content__instagram-name">msh.interiorismo</p>
      </a>
      <div class="v-home__content__instagram-feed">
        <InstagramFeed :count="5" accessToken="" />
      </div>
    </div>
    <CFooter />
  </div>
</template>

<script>
import CHeader from '../components/c-header.vue'
import CFooter from '../components/c-footer.vue'
import CSlider from '../components/c-slider.vue'
export default {
  name: 'v-home',
  components: {
    CHeader,
    CFooter,
    CSlider
  }
}
</script>

<style scoped>
.v-home {
  width: 100%;
  background-color: var(--secondary-color);
}
.v-home__content {
  min-height: 450px;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 90px;
}
.v-home__content-text {
  font-size: 16px;
  margin: 0;
}
.v-home__content-title {
  font-family: 'Lovera';
  font-size: 64px;
  margin: 0;
}
.v-home__content__instagram-title-group {
  display: flex;
  align-items: center;
  gap: 20px;
}
.v-home__content__instagram-icon {
  width: 35px;
  height: 35px;
}
.v-home__content__instagram-name {
  font-size: 28px;
  color: var(--primary-color);
  margin: 0;
}
.v-home__content__instagram-feed {
  margin-top: 30px;
}

@media screen and (max-width: 1080px) {
  .v-home__content {
    padding: 0;
  }
  .v-home__content-title {
    font-size: 54px;
  }
}
@media screen and (max-width: 780px) {
  .v-home__content {
    padding: 0;
  }
  .v-home__content-title {
    font-size: 44px;
  }
}
@media screen and (max-width: 480px) {
  .v-home__content {
    padding: 0;
  }
  .v-home__content-title {
    font-size: 34px;
  }
}
</style>
