import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-media.html.vue"
const data = JSON.parse("{\"path\":\"/components/ak-media.html\",\"title\":\"ak-media 媒体\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"album 相册\",\"slug\":\"album-相册\",\"link\":\"#album-相册\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/ak-media.md\"}")
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
