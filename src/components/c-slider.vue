<template>
  <div class="c-slider">
    <div class="c-slider__controls">
      <div class="c-slider__control-arrows">
        <img
          src="../assets/img/icon-back-arrow.svg"
          alt="icon-back-arrow"
          class="c-slider__control__icon-arrow"
          @click="backSlider()"
        />
        <div class="c-slider__section">
          <p class="c-slider__subtitle">{{ data.subtitle }}</p>
          <p class="c-slider__title">{{ data.title }}</p>
          <p class="c-slider__text">{{ data.text }}</p>
          <RouterLink :to="data.buttonLink" class="c-slider__button">{{
            data.buttonText
          }}</RouterLink>
        </div>
        <img
          src="../assets/img/icon-next-arrow.svg"
          alt="icon-next-arrow"
          class="c-slider__control__icon-arrow"
          @click="nextSlider()"
        />
      </div>
      <div class="c-slider__control__dots">
        <div
          class="c-slider__control__dot"
          v-for="slide of calculateSliders"
          :key="slide"
          :class="{ 'c-slider__control__dot-active': slide === this.slider }"
        ></div>
      </div>
    </div>
    <img :src="data.url" alt="" class="c-slider__img" />
  </div>
</template>

<script>
import sliders from '../data/sliders.json'
export default {
  name: 'c-slider',

  data() {
    return {
      slider: 1
    }
  },
  computed: {
    data() {
      return sliders.find((slider) => slider.id === this.slider)
    },
    calculateSliders() {
      return sliders.length
    }
  },
  methods: {
    selectIndicator(val) {
      return val === this.slider
    },
    nextSlider() {
      if (this.slider === this.calculateSliders) {
        this.slider = 0
      }
      return (this.slider += 1)
    },
    backSlider() {
      if (this.slider === 1) {
        this.slider = this.calculateSliders + 1
      }
      return (this.slider -= 1)
    }
  }
}
</script>

<style scoped>
.c-slider {
  height: 100vh;
  /* overflow: hidden; */
}
.c-slider__controls {
  width: 100%;
  height: 100%;
  background-color: var(--gray-opacity);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.c-slider__control-arrows {
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
}

.c-slider__control__icon-arrow {
  cursor: pointer;
}
.c-slider__control__dots {
  height: 15%;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
}
.c-slider__control__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--white);
}
.c-slider__control__dot-active {
  background-color: var(--secondary-color);
}
.c-slider__img {
  width: 100%;
  height: 100%;
}
.c-slider__section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
}
/* .c-slider__content-group {
  height: 100%;
  display: flex;
  align-items: center;
} */
.c-slider__subtitle {
  font-size: 16px;
  color: var(--secondary-color);
  margin: 0;
}
.c-slider__title {
  font-size: 70px;
  font-family: 'Lovera';
  color: var(--white);
  margin: 0;
}
.c-slider__text {
  width: 420px;
  font-size: 16px;
  line-height: 30px;
  color: var(--white);
  margin: 0;
}
.c-slider__button {
  width: 200px;
  height: 60px;
  text-decoration: none;
  color: var(--gray);
  background-color: var(--secondary-color-dark);
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
</style>
