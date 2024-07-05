<script setup>
import TheMap from '../components/MapItem.vue'
</script>

<template>
  <div class="wrap-mapper">
    <TheMap />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .wrap-mapper {
    place-items: center;
    place-content: center;
    height: 100px;
    width: 100px;
  }
}
</style>
