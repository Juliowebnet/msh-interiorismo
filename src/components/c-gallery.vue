<template>
  <div class="c-gallery__main-img-container">
    <div class="c-gallery__main-img-controller">
      <div class="c-gallery__icon-controller" @click="backImg()">
        <img src="../assets/img/icon-back-arrow-gray.svg" alt="back-arrow" />
      </div>
      <div class="c-gallery__icon-controller" @click="nextImg()">
        <img src="../assets/img/icon-next-arrow-gray.svg" alt="next-arrow" />
      </div>
    </div>
    <img :src="mainImageGroup[imgId]" :alt="projectData.name" class="c-gallery__main-img" />
  </div>
  <div
    v-for="(img, index) in miniatureGroup"
    :key="index"
    class="c-gallery__item"
    :class="{ 'c-gallery__item--selected': this.imgId === index }"
    @click="setImage(index)"
  >
    <img :src="img" alt="gallery-item" />
  </div>
  <div class="c-gallery__page-selector-group">
    <div
      v-for="page of calculatePages"
      :key="page"
      class="c-gallery__page-selector"
      @click="setPage(page * 10)"
      :class="{ 'c-gallery__page-selector-active': selectIndicator(page * 10) }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'c-gallery',
  props: {
    projectData: { type: Array }
  },
  data() {
    return {
      page: 1,
      start: 0,
      end: 10,
      imgId: 0
    }
  },
  computed: {
    calculatePages() {
      return Math.ceil(this.projectData.gallery.length / 10)
    },
    miniatureGroup() {
      // return console.log(this.projectData.gallery)
      return this.projectData.gallery.slice(this.start, this.end)
    },
    mainImageGroup() {
      // return console.log(this.projectData.gallery)
      return this.projectData.gallery800.slice(this.start, this.end)
    }
  },
  methods: {
    setPage(val) {
      this.end = val
      this.start = val - 10
    },
    selectIndicator(val) {
      return val === this.end
    },
    setImage(i) {
      return (this.imgId = i)
    },
    nextImg() {
      if (this.imgId === this.mainImageGroup.length - 1 && this.page < this.calculatePages) {
        return (this.page += 1), this.setPage(this.page * 10), (this.imgId = 0)
      }
      if (this.imgId === this.mainImageGroup.length - 1 && this.page === this.calculatePages) {
        return (this.page = 1), this.setPage(this.page * 10), (this.imgId = 0)
      }
      return (this.imgId += 1)
    },
    backImg() {
      if (this.imgId === 0 && this.page > 1) {
        return (
          (this.page -= 1),
          this.setPage(this.page * 10),
          (this.imgId = this.mainImageGroup.length - 1)
        )
      }
      if (this.imgId === 0 && this.page === 1) {
        return (
          (this.page = this.calculatePages),
          this.setPage(this.page * 10),
          (this.imgId = this.mainImageGroup.length - 1)
        )
      }
      return (this.imgId -= 1)
    }
  }
}
</script>

<style scoped>
.c-gallery__main-img-container {
  width: 100%;
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-gallery__main-img-controller {
  width: 100%;
  height: 800px;
  position: absolute;
  top: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-gallery__icon-controller {
  cursor: pointer;
  margin: 0 20px;
}
.c-gallery__main-img {
  height: 100%;
}
.c-gallery__item {
  width: 328px;
  height: 185px;
  cursor: pointer;
}
.c-gallery__item--selected {
  border: solid 4px var(--secondary-color);
  padding: 2px;
  /* transition: 0.8s; */
}
.c-gallery__page-selector-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.c-gallery__page-selector {
  height: 4px;
  width: 100px;
  background-color: var(--gray-light);
  cursor: pointer;
}
.c-gallery__page-selector-active {
  background-color: var(--secondary-color);
}
</style>
