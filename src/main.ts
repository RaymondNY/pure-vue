import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import { setupStore } from './store'
// import './service/axios_demo'
// import hyRequest from './service'

const app = createApp(App)

app.use(store)
setupStore()

app.use(router)
app.use(ElementPlus)

app.mount('#app')

export interface DataType {
  data: any
  returnCode: string
  success: boolean
}
