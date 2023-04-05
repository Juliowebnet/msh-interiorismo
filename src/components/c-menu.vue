<template>
  <div class="c-menu">
    <RouterLink to="/" class="c-menu__nav-item">Inicio</RouterLink>
    <RouterLink to="/about-us" class="c-menu__nav-item">Conócenos</RouterLink>
    <RouterLink to="/portfolio" class="c-menu__nav-item">Portafolio</RouterLink>
    <RouterLink to="/contact-us" class="c-menu__nav-item">Contáctanos</RouterLink>
  </div>
  <font-awesome-icon
    :icon="['fas', 'bars']"
    class="c-menu__icon-menu"
    v-show="!burguerMenu"
    @click="toggleMenu()"
  />
  <div class="c-menu__mobile" v-show="burguerMenu">
    <div class="c-menu__header">
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="c-menu__icon-close"
        @click="toggleMenu()"
      />
    </div>
    <RouterLink to="/" class="c-menu__nav-item">Inicio</RouterLink>
    <RouterLink to="/about-us" class="c-menu__nav-item">Conócenos</RouterLink>
    <RouterLink to="/portfolio" class="c-menu__nav-item">Portafolio</RouterLink>
    <RouterLink to="/contact-us" class="c-menu__nav-item">Contáctanos</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'c-menu',
  components: {
    RouterLink
  },
  data() {
    return {
      burguerMenu: false
    }
  },
  methods: {
    toggleMenu() {
      return (this.burguerMenu = !this.burguerMenu)
    }
  }
}
</script>

<style scoped>
.c-menu {
  display: flex;
  gap: 40px;
  padding: 0 120px;
}
.c-menu__mobile {
  display: none;
}
.c-menu__icon-menu,
.c-menu__icon-close {
  display: none;
  cursor: pointer;
}
.c-menu__nav-item {
  color: var(--white);
  text-decoration: none;
  padding-bottom: 10px;
}
.c-menu__nav-item.router-link-active {
  border-bottom: solid 2px var(--white);
}
@media screen and (max-width: 1080px) {
  .c-menu {
    display: none;
  }
  .c-menu__mobile {
    width: 300px;
    height: 600px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: #fff;
    padding: 0 30px;
  }
  .c-menu__header {
    height: 120px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .c-menu__icon-menu,
  .c-menu__icon-close {
    display: block;
  }
  .c-menu__icon-menu {
    font-size: 24px;
    color: var(--white);
    margin-right: 30px;
  }
  .c-menu__icon-close {
    font-size: 28px;
    color: var(--secondary-color-dark);
  }
  .c-menu__nav-item {
    width: 100%;
    color: var(--secondary-color-dark);
    text-align: center;
  }
  .c-menu__nav-item.router-link-active {
    border-bottom: solid 2px var(--secondary-color-dark);
  }
}

@media screen and (max-width: 480px) {
  .c-menu {
    display: none;
  }
}
</style>
