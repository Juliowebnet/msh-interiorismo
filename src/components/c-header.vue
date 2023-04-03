<template>
  <header
    class="c-header"
    :class="{ 'c-header-background': background, 'c-header-position-absolute': positionAbsolute }"
  >
    <img src="../assets/img/Logo.svg" alt="" class="c-header__img" />
    <CMenu />
  </header>
</template>

<script>
import CMenu from '../components/c-menu.vue'
export default {
  name: 'c-header',

  props: {
    background: { type: Boolean },
    positionAbsolute: { type: Boolean }
  },

  components: {
    CMenu
  }
}
</script>

<style scoped>
.c-header {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
}
.c-header-background {
  background-color: var(--primary-color);
}
.c-header-position-absolute {
  position: absolute;
  top: 0;
}
.c-header__img {
  width: 150px;
  height: 100px;
  padding: 0 120px;
}
@media screen and (max-width: 1080px) {
  .c-header__img {
    width: 100px;
    height: 150px;
    padding: 0 120px;
  }
}
@media screen and (max-width: 780px) {
  .c-header__img {
    width: 100px;
    height: 150px;
    padding: 0 80px;
  }
}
@media screen and (max-width: 480px) {
  .c-header__img {
    width: 100px;
    height: 150px;
    padding: 0 40px;
  }
}
</style>
