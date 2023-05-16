import { createApp } from 'vue'
import './styles/tailwind.css'
import App from './App.vue'

const app = createApp(App)

Object.values(import.meta.globEager('./modules/*.ts')).map((i: any) =>
  i.install?.(app),
)

app.mount(document.body)
