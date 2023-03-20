<template>
  <div class="v-contact-us">
    <CHeader background />
    <div class="v-contact-us__section">
      <div class="v-contact-us__content">
        <p class="v-contact-us__title">
          Déjanos un mensaje y estaremos felices de conversar sobre tu proyecto
        </p>
        <form action="" class="v-contact-us__form">
          <div class="v-contact-us__form__input-group">
            <input type="text" class="v-contact-us__form__input" placeholder="NOMBRE" />
            <input type="text" class="v-contact-us__form__input" placeholder="+829 356 7688" />
          </div>
          <input type="text-area" class="v-contact-us__form__text-area" placeholder="MENSAJE" />

          <button class="v-contact-us__form__button">ENVIAR</button>
        </form>
      </div>
    </div>
    <div class="v-contact-us__rrss">
      <a class="v-contact-us__rrss-group" href="mailto:michelle@mshinteriorismo.com">
        <img
          src="../assets/img/icon-mail-lineas.svg"
          alt="icono-email"
          class="v-contact-us__rrss__img"
        />
        <p class="v-contact-us__rrss__text">michelle@mshinteriorismo.com</p>
      </a>
      <a class="v-contact-us__rrss-group" href="https://www.instagram.com/msh.interiorismo/">
        <img
          src="../assets/img/icon-ig-lineas.svg"
          alt="icon-instagram"
          class="v-contact-us__rrss__img"
        />
        <p class="v-contact-us__rrss__text">msh.interiorismo</p>
      </a>
    </div>
    <CFooter />
  </div>
</template>

<script>
import CHeader from '../components/c-header.vue'
import CFooter from '../components/c-footer.vue'
export default {
  name: 'v-contact-us',
  components: {
    CHeader,
    CFooter
  }
}
</script>

<style scoped>
.v-contact-us {
  background-color: var(--secondary-color);
}
.v-contact-us__section {
  min-height: 600px;
  display: flex;
  justify-content: center;
}
.v-contact-us__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 120px;
}
.v-contact-us__title {
  width: 1000px;
  font-size: 54px;
  font-family: 'Lovera';
  color: var(--primary-color);
  margin: 0;
}
.v-contact-us__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.v-contact-us__form__input-group {
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 50px;
}
.v-contact-us__form__input {
  width: 50%;
  height: 60px;
  border: none;
  border-bottom: solid 1px var(--primary-color);
  background: none;
  color: var(--black);
  font-size: 20px;
}
.v-contact-us__form__input:focus,
.v-contact-us__form__text-area:focus {
  border: none;
  border-bottom: solid 1px var(--primary-color);
  outline: none;
}
.v-contact-us__form__text-area {
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: solid 1px var(--primary-color);
  background: none;
  color: var(--black);
  font-size: 20px;
}
.v-contact-us__form__button {
  width: 150px;
  height: 45px;
  border-radius: 30px;
  border: none;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 16px;
  margin-top: 40px;
}
.v-contact-us__rrss {
  width: 100%;
  height: 200px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
}
.v-contact-us__rrss-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.v-contact-us__rrss__text {
  font-size: 34px;
  color: var(--primary-color);
  text-decoration: none;
}
</style>
