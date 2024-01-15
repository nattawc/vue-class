<template>
  <div class="gallery">
    <div class="image-item" v-for="image in images" :key="image.id">
      <img :src="image.url" class="image" />

      <div class="image-title">{{ image.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    // Fetch dummy JSON data
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        this.images = data;
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  width: 200px;
  margin: 10px;
}

.image {
  width: 100%;
  height: auto;
}

.image-title {
  text-align: center;
  margin-top: 5px;
}
</style>
