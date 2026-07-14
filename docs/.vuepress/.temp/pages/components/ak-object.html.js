import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-object.html.vue"
const data = JSON.parse("{\"path\":\"/components/ak-object.html\",\"title\":\"ak-object 物体\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Cube 立方体\",\"slug\":\"cube-立方体\",\"link\":\"#cube-立方体\",\"children\":[{\"level\":3,\"title\":\"Todo\",\"slug\":\"todo\",\"link\":\"#todo\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"components/ak-object.md\"}")
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
