import { createApp } from 'vue'
import Icon from '@x-norpr-ui/components/icon'
import '@x-norpr-ui/theme-chalk/src/index.scss'
import App from './App.vue'

const plugins = [
  Icon
]
const app = createApp(App)
plugins.forEach(plugin=>app.use(plugin))

app.mount('#app')