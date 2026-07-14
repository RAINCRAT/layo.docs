import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-card.html.vue"
const data = JSON.parse("{\"path\":\"/components/ak-card.html\",\"title\":\"ak-card 卡片\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"outline 描边卡片\",\"slug\":\"outline-描边卡片\",\"link\":\"#outline-描边卡片\",\"children\":[]},{\"level\":2,\"title\":\"stripe 条纹卡片\",\"slug\":\"stripe-条纹卡片\",\"link\":\"#stripe-条纹卡片\",\"children\":[]},{\"level\":2,\"title\":\"place 人物放置卡片\",\"slug\":\"place-人物放置卡片\",\"link\":\"#place-人物放置卡片\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/ak-card.md\"}")
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
