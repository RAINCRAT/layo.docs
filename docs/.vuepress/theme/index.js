import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default (options) => {
  const theme = defaultTheme(options)
  return {
    ...theme,
    name: 'vuepress-theme-local',
    alias: {
      ...theme.alias,
      '@theme/VPPage.vue': path.resolve(__dirname, 'components/VPPage.vue'),
    },
  }
}