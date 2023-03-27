<template>
  <div class="v-project">
    <div></div>
    <CHeader background />
    <div class="v-project__section">
      <div class="v-project__project-description">
        <div class="v-project__text-group">
          <p class="v-project__title">{{ projectData.name }}</p>
          <div class="v-project__features">
            <p>{{ projectData.sector }}</p>
            <p>{{ projectData.year }} año</p>
          </div>
        </div>
      </div>
      <div class="v-project__gallery">
        <transition name="gallery">
          <CGallery :projectData="projectData" />
        </transition>
      </div>
    </div>
    <CFooter />
  </div>
</template>

<script>
import CHeader from '../components/c-header.vue'
import CFooter from '../components/c-footer.vue'
import CGallery from '../components/c-gallery.vue'
import projects from '../data/projects.json'
export default {
  name: 'v-project',
  components: {
    CHeader,
    CFooter,
    CGallery
  },
  computed: {
    projectData() {
      return projects.find((project) => project.projectId === this.$route.params.id)
    }
  }
}
</script>

<style scoped>
/* .v-project__section {
  min-height: 600px;
} */
.v-project__project-description {
  padding: 0 80px;
  margin: 40px 0;
}
.v-project__text-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: solid 1px var(--black);
}
.v-project__title {
  font-size: 56px;
  font-family: 'Lovera';
  color: var(--black);
  margin: 0;
}
.v-project__features {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: var(--gray-light);
}
.v-project__gallery {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 60px 0;
}
.v-project__page-selector-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.v-project__page-selector {
  height: 4px;
  width: 100px;
  background-color: var(--gray-light);
  cursor: pointer;
}
.v-project__page-selector-active {
  background-color: var(--secondary-color);
}
.gallery-enter-active {
  animation: slide 0.5s ease-in-out;
}

@keyframes slide {
  from {
    transform: translatex(0);
  }
  to {
    transform: translatex(-700px);
  }
}

.gallery-leave-active {
  animation: slide 0.5s ease-in-out;
}

@keyframes slide {
  from {
    transform: translatex(-700px);
  }
  to {
    transform: translatex(0);
  }
}
</style>
