import { createApp } from 'vue'
import './shared/styles/tailwind.css'
import App from './App.vue'
import router from '@/shared/routers/index.route'

const app = createApp(App)

app.use(router)
app.mount(document.body)
