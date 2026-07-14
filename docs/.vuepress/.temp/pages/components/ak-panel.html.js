import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-panel.html.vue"
const data = JSON.parse("{\"path\":\"/components/ak-panel.html\",\"title\":\"ak-panel 面板\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ak-status 状态栏\",\"slug\":\"ak-status-状态栏\",\"link\":\"#ak-status-状态栏\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/ak-panel.md\"}")
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
