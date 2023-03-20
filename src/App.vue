<script setup>
import { RouterView } from 'vue-router'
import './assets/css/base.css'
</script>

<template>
  <transition name="fade">
    <RouterView />
  </transition>
</template>

<style scoped>
.fade-enter-active {
  animation: slide 0.4s ease-in-out;
}

@keyframes slide {
  from {
    transform: translatey(0);
  }
  to {
    transform: translatey(-600px);
  }
}

.fade-leave-active {
  animation: slide 0.4s ease-in-out;
}

@keyframes slide {
  from {
    transform: translatey(-600px);
  }
  to {
    transform: translatey(0);
  }
}
</style>
