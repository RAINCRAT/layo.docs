import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  name: 'vuepress-theme-local',
  alias: {
    '@theme/VPPage.vue': path.resolve(__dirname, 'components/VPPage.vue'),
  },
}