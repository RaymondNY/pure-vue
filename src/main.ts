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

app.use(router)
app.use(store)
app.use(ElementPlus)

setupStore()
app.mount('#app')

// console.log(VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       config.headers = { token: '123' }
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

// hyRequest.get()
export interface DataType {
  data: any
  returnCode: string
  success: boolean
}
