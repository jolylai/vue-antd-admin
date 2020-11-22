import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import installAntDesign from '@/plugins/ant-design'

const app = createApp(App).use(router)

installAntDesign(app)

app.mount('#app')
