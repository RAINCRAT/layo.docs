import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/style.html.vue"
const data = JSON.parse("{\"path\":\"/guide/style.html\",\"title\":\"风格指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BEM 命名规范\",\"slug\":\"bem-命名规范\",\"link\":\"#bem-命名规范\",\"children\":[]},{\"level\":2,\"title\":\"Ref\",\"slug\":\"ref\",\"link\":\"#ref\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/style.md\"}")
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
