export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"泠域存储\",\"description\":\"LAYOSERVE 泠域存储\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/ak.png\"}],[\"script\",{\"async\":true,\"src\":\"//at.alicdn.com/t/font_1623879_1wzsjomrpmm.js\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700,900|Noto+Serif+SC:400,500,700,900|Syncopate:700&display=swap\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
