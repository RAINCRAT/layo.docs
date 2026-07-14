import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/style.html.vue"
const data = JSON.parse("{\"path\":\"/guide/style.html\",\"title\":\"风格指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BEM 命名规范\",\"slug\":\"bem-命名规范\",\"link\":\"#bem-命名规范\",\"children\":[]},{\"level\":2,\"title\":\"Ref\",\"slug\":\"ref\",\"link\":\"#ref\",\"children\":[]}],\"git\":{\"updatedTime\":1784050910000,\"contributors\":[{\"name\":\"13812773784\",\"username\":\"13812773784\",\"email\":\"tc.aibeto@outlook.com\",\"commits\":1,\"url\":\"https://github.com/13812773784\"}],\"changelog\":[{\"hash\":\"f7ea1567d4ba14c119877803dad1070d4240c5e0\",\"time\":1784050910000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 提交项目依赖与文档静态资源\"}]},\"filePathRelative\":\"guide/style.md\"}")
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
