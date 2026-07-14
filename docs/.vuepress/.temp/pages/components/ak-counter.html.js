import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-counter.html.vue"
const data = JSON.parse("{\"path\":\"/components/ak-counter.html\",\"title\":\"ak-counter 计数器\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"components/ak-counter.md\"}")
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
