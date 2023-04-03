<template>
  <footer class="c-footer">
    <div class="c-footer__content">
      <img src="../assets/img/Logo.svg" alt="MSH INTERIORISMO" class="c-footer__logo" />
      <p class="c-footer__content__text">
        Brindamos soluciones innovadoras, vanguardistas y específicas de acuerdo a las necesidades
        de nuestros clientes, creando lugares soñados que provocan emociones e invitan a crear
        historias.
      </p>
      <div class="c-footer__rrss">
        <a href="https://www.facebook.com/msh.interiorismo/">
          <img src="../assets/img/icon-face-blanco.svg" alt="" class="c-footer__rrss-icon" />
        </a>
        <a href="https://www.instagram.com/msh.interiorismo/">
          <img src="../assets/img/icon-ig-blanco.svg" alt="" class="c-footer__rrss-icon" />
        </a>
      </div>
    </div>
    <div class="c-footer__rights">
      <p>&#169; 2023 MSH INTERIORISMO All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'c-footer'
}
</script>

<style scoped>
.c-footer {
  width: 100%;
  min-height: 500px;
  background-color: var(--primary-color);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.c-footer__content {
  padding-top: 40px;
  padding-left: 120px;
}
.c-footer__logo {
  width: 200px;
  height: 150px;
}
.c-footer__content__text {
  max-width: 600px;
  line-height: 40px;
}
.c-footer__rrss {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
.c-footer__rrss-icon {
  width: 34px;
  height: 34px;
}
.c-footer__rights {
  width: 100%;
  border-top: solid 1px var(--footer-border);
  font-size: 14px;
  text-align: center;
  padding: 5px 0;
}
</style>
