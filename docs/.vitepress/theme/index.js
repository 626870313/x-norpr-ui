import DefaultTheme from 'vitepress/theme'

import ZIcon from '@x-norpr-ui/components/icon'
import '@x-norpr-ui/theme-chalk/src/index.scss'

console.log('iconc--', ZIcon)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon)
  }
}
