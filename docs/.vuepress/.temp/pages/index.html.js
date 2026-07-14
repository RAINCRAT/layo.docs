import comp from "E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":null,\"heroText\":\"LAYOSERVE 泠域存储\",\"tagline\":\"LAYOSERVE DOCS & BLOGS SITE\",\"footer\":\"<a href=\\\"https://icp.gov.moe/?keyword=20260812\\\" target=\\\"_blank\\\" class=\\\"no-blue\\\">萌ICP备20260812号</a><br>\\nAGPL v3 Licensed | Copyright © RAINCRAT\\n\",\"footerHtml\":true,\"title\":\"主页\"},\"headers\":[],\"git\":{\"updatedTime\":1784057618000,\"contributors\":[{\"name\":\"13812773784\",\"username\":\"13812773784\",\"email\":\"tc.aibeto@outlook.com\",\"commits\":3,\"url\":\"https://github.com/13812773784\"}],\"changelog\":[{\"hash\":\"e1391a858514e02913279782f54b1641d7ad9e6d\",\"time\":1784057618000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 重构博客文档结构并调整站点导航\"},{\"hash\":\"d9b08a0aaf8e5ebc2b59ad40a0005a4df9cb9249\",\"time\":1784054113000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 清理旧组件博客文档并优化站点配置\"},{\"hash\":\"f7ea1567d4ba14c119877803dad1070d4240c5e0\",\"time\":1784050910000,\"email\":\"tc.aibeto@outlook.com\",\"author\":\"13812773784\",\"message\":\"chore: 提交项目依赖与文档静态资源\"}]},\"filePathRelative\":\"README.md\"}")
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
