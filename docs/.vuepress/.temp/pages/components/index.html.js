import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/\",\"title\":\"设计规范\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Color 色彩\",\"slug\":\"color-色彩\",\"link\":\"#color-色彩\",\"children\":[]},{\"level\":2,\"title\":\"Typography 字体\",\"slug\":\"typography-字体\",\"link\":\"#typography-字体\",\"children\":[{\"level\":3,\"title\":\"衬线字体\",\"slug\":\"衬线字体\",\"link\":\"#衬线字体\",\"children\":[]},{\"level\":3,\"title\":\"无衬线字体\",\"slug\":\"无衬线字体\",\"link\":\"#无衬线字体\",\"children\":[]}]}],\"git\":{\"updatedTime\":1784050910000,\"contributors\":[{\"name\":\"13812773784\",\"username\":\"13812773784\",\"email\":\"tc.aibeto@outlook.com\",\"commits\":1,\"url\":\"https://github.com/13812773784\"}],\"changelog\":[{\"hash\":\"f7ea1567d4ba14c119877803dad1070d4240c5e0\",\"time\":1784050910000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 提交项目依赖与文档静态资源\"}]},\"filePathRelative\":\"components/README.md\"}")
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
