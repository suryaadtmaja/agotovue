import { createApp } from 'vue'
import '@/shared/styles/tailwind.css'
import App from './App.vue'
import store from '@/shared/stores'
import router from '@/shared/routers/index.route'
import 'preline/preline'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount(document.body)
