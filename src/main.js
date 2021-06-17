import { createApp } from 'vue'
import App from './App.vue'
import UIKit from 'uikit'
import 'uikit/dist/css/uikit.min.css'

const app = createApp(App)

app.config.globalProperties.$uikit = UIKit // 自定义添加$uikit

app.mount('#app')
