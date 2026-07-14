import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"使用指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebarDepth\":2},\"headers\":[{\"level\":2,\"title\":\"如何使用\",\"slug\":\"如何使用\",\"link\":\"#如何使用\",\"children\":[{\"level\":3,\"title\":\"By NPM or YARN\",\"slug\":\"by-npm-or-yarn\",\"link\":\"#by-npm-or-yarn\",\"children\":[]},{\"level\":3,\"title\":\"By CDN\",\"slug\":\"by-cdn\",\"link\":\"#by-cdn\",\"children\":[]},{\"level\":3,\"title\":\"Sample\",\"slug\":\"sample\",\"link\":\"#sample\",\"children\":[]},{\"level\":3,\"title\":\"更多组件\",\"slug\":\"更多组件\",\"link\":\"#更多组件\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"guide/README.md\"}")
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
