import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'leaflet/dist/leaflet.css'
import 'element-plus/theme-chalk/display.css'
import * as echarts from 'echarts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(jQuery)
app.use(echarts)
app.mount('#app')
