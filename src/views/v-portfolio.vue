<template>
  <div class="v-portfolio">
    <CHeader background />
    <div class="v-portfolio__section">
      <p class="v-portfolio__title">Portafolio</p>
      <div class="v-portfolio__projects">
        <RouterLink
          :to="`/portfolio/project/${project.projectId}`"
          class="v-portfolio__project"
          v-for="project in projects"
          :key="project.id"
          @mouseover="showProjectName = project.id"
          @mouseleave="showProjectName = 0"
        >
          <Transition name="show-name">
            <div v-if="showProjectName === project.id" class="v-portfolio__project-name">
              <p class="v-portfolio__project-name__text">
                {{ project.name }}
              </p>
            </div>
          </Transition>
          <img :src="project.thumbnail" :alt="project.name" class="v-portfolio__project-img" />
        </RouterLink>
      </div>
    </div>
    <CFooter />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import CHeader from '../components/c-header.vue'
import CFooter from '../components/c-footer.vue'
import data from '../data/projects.json'
export default {
  name: 'v-portfolio',
  components: {
    CHeader,
    CFooter,
    RouterLink
  },

  data() {
    return {
      showProjectName: 0
    }
  },

  computed: {
    projects() {
      return data
    }
  }
}
</script>

<style scoped>
.v-portfolio {
  background-color: var(--secondary-color);
}
.v-portfolio__title {
  font-size: 56px;
  font-family: 'Lovera';
}
.v-portfolio__section {
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.v-portfolio__projects {
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 110px;
}
.v-portfolio__project {
  width: 400px;
  height: 400px;
}
.v-portfolio__project-name {
  width: 400px;
  height: 400px;
  position: absolute;
  background-color: var(--gray-dark-opacity);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.show-name-enter-active,
.show-name-leave-active {
  transition: opacity 0.5s ease;
}

.show-name-enter-from,
.show-name-leave-to {
  opacity: 0;
}
.v-portfolio__project-img {
  width: 100%;
  height: 100%;
}
.v-portfolio__project-name__text {
  width: 250px;
  font-family: 'Lovera';
  font-size: 32px;
  color: var(--white);
  text-decoration: none;
  list-style: none;
  padding: 20px;
}
</style>
