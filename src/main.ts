import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import { globalRegister } from './global'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import { setupStore } from './store'
// import './service/axios_demo'
// import hyRequest from './service'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
setupStore()

app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')

export interface DataType {
  data: any
  returnCode: string
  success: boolean
}
