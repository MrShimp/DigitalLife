<template>
  <div id="map"></div>
</template>

<style>
#map {
  height: 100%;
  width: 100vw;
  padding-bottom: 90%;
  margin-right: 10%;
}
</style>

<script>
import 'leaflet'
import $ from 'jquery'
export default {
  name: 'MyFootprint',
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([30.27, 120.15], 5)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
      const markers = []
      // hongkong
      const marker1 = L.marker([22.3193, 114.1694]).addTo(map)
      // ao men
      const marker2 = L.marker([22.1987, 113.5439]).addTo(map)
      // chang baishan
      const marker3 = L.marker([42.0056, 128.0561]).addTo(map)
      // chengdu
      const marker4 = L.marker([30.5728, 104.0668]).addTo(map)
      // haikou
      const marker5 = L.marker([20.0169, 110.3487]).addTo(map)
      // sanya
      const marker6 = L.marker([18.2528, 109.5119]).addTo(map)
      // beijing
      const marker7 = L.marker([39.9042, 116.4074]).addTo(map)
      // nanjing
      const marker8 = L.marker([32.0603, 118.7969]).addTo(map)
      // suzhou
      const marker9 = L.marker([31.2989, 120.5853]).addTo(map)
      // shanghai
      const marker10 = L.marker([31.2304, 121.4737]).addTo(map)
      // taizhou
      const marker11 = L.marker([28.6561, 121.4206]).addTo(map)
      // chaoshan
      const marker12 = L.marker([23.3541, 116.681]).addTo(map)
      // nan ao island
      const marker13 = L.marker([23.4796, 117.009]).addTo(map)
    }
  }
}
</script>
