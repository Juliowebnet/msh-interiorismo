<template>
  <div class="c-menu">
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
  }
}
</script>

<style scoped>
.c-menu {
  display: flex;
  gap: 40px;
  padding: 0 120px;
}
.c-menu__nav-item {
  color: var(--white);
  text-decoration: none;
  padding-bottom: 10px;
}
.c-menu__nav-item.router-link-active {
  border-bottom: solid 2px var(--white);
}
</style>
