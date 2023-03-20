<template>
  <div class="v-about-us">
    <CHeader background />
    <div class="v-about-us__section">
      <div class="v-about-us__img-group">
        <img src="/about-us-01.jpg" alt="about-us-01" class="v-about-us__img" />
        <img src="/about-us-02.jpg" alt="about-us-02" class="v-about-us__img" />
      </div>
      <div class="v-about-us__text-group">
        <p class="v-about-us__subtitle">INTERIORISTA</p>
        <p class="v-about-us__title">
          Michelle <br />
          Saint-Hilaire
        </p>
        <p class="v-about-us__text">
          Michelle Saint-Hilaire, licenciada en Diseño Arquitectónico de Interiores, egresada de
          Unibe, especializada en el área residencial. El uso de líneas limpias, luz natural en
          contraste con el diseño de iluminación, incorporación de madera natural y cuidado por los
          detalles son algunas de las características que me identifican y marcan la línea a seguir
          de mi equipo.
        </p>
        <p class="v-about-us__text">
          MSH Interiorismo surge como un estudio boutique orientado a elevar la calidad de vida y
          contribuir con el bienestar de nuestros usuarios a través de sus espacios. Brindamos
          soluciones innovadoras, vanguardistas y específicas de acuerdo a las necesidades de
          nuestros clientes, creando lugares soñados que provocan emociones e invitan a crear
          historias. Caracterizado por valores como responsabilidad, puntualidad, excelencia,
          creatividad, pasión y cercanía.
        </p>
        <img src="../assets/img/firma.svg" alt="firma" />
      </div>
    </div>
    <CFooter />
  </div>
</template>

<script>
import CHeader from '../components/c-header.vue'
import CFooter from '../components/c-footer.vue'
export default {
  name: 'v-about-us',
  components: {
    CHeader,
    CFooter
  }
}
</script>

<style scoped>
.v-about-us__section {
  min-height: 700px;
  background-color: var(--gray-super-light);
  display: flex;
  gap: 90px;
  padding: 80px 0 50px 0;
}
.v-about-us__img-group {
  width: 50%;
  height: 100%;
  display: flex;
  gap: 40px;
}
.v-about-us__img {
  width: 50%;
}
.v-about-us__text-group {
  width: 50%;
  height: 100%;
  padding-top: 50px;
}
.v-about-us__subtitle {
  font-size: 16px;
  color: var(--secondary-color-dark);
  margin: 10px 0;
}
.v-about-us__title {
  font-family: 'Lovera';
  font-size: 46px;
  color: var(--gray);
  padding: 0;
  margin: 0;
}
.v-about-us__text {
  max-width: 500px;
  font-size: 16px;
  line-height: 28px;
  margin: 30px 0;
}
</style>
