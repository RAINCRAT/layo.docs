import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"使用指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebarDepth\":2},\"headers\":[{\"level\":2,\"title\":\"如何使用\",\"slug\":\"如何使用\",\"link\":\"#如何使用\",\"children\":[{\"level\":3,\"title\":\"By NPM or YARN\",\"slug\":\"by-npm-or-yarn\",\"link\":\"#by-npm-or-yarn\",\"children\":[]},{\"level\":3,\"title\":\"By CDN\",\"slug\":\"by-cdn\",\"link\":\"#by-cdn\",\"children\":[]},{\"level\":3,\"title\":\"Sample\",\"slug\":\"sample\",\"link\":\"#sample\",\"children\":[]},{\"level\":3,\"title\":\"更多组件\",\"slug\":\"更多组件\",\"link\":\"#更多组件\",\"children\":[]}]}],\"git\":{\"updatedTime\":1784050910000,\"contributors\":[{\"name\":\"13812773784\",\"username\":\"13812773784\",\"email\":\"tc.aibeto@outlook.com\",\"commits\":1,\"url\":\"https://github.com/13812773784\"}],\"changelog\":[{\"hash\":\"f7ea1567d4ba14c119877803dad1070d4240c5e0\",\"time\":1784050910000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 提交项目依赖与文档静态资源\"}]},\"filePathRelative\":\"guide/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
