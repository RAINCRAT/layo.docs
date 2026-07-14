export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/blogs/ak-button-group.html", { loader: () => import(/* webpackChunkName: "blogs_ak-button-group.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-button-group.html.js"), meta: {"title":"ak-button-group 按钮组"} }],
  ["/blogs/ak-button.html", { loader: () => import(/* webpackChunkName: "blogs_ak-button.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-button.html.js"), meta: {"title":"ak-button 按钮"} }],
  ["/blogs/ak-card.html", { loader: () => import(/* webpackChunkName: "blogs_ak-card.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-card.html.js"), meta: {"title":"ak-card 卡片"} }],
  ["/blogs/ak-counter.html", { loader: () => import(/* webpackChunkName: "blogs_ak-counter.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-counter.html.js"), meta: {"title":"ak-counter 计数器"} }],
  ["/blogs/ak-divider.html", { loader: () => import(/* webpackChunkName: "blogs_ak-divider.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-divider.html.js"), meta: {"title":"ak-divider 分割线"} }],
  ["/blogs/ak-form.html", { loader: () => import(/* webpackChunkName: "blogs_ak-form.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-form.html.js"), meta: {"title":"ak-form 表单"} }],
  ["/blogs/ak-fx.html", { loader: () => import(/* webpackChunkName: "blogs_ak-fx.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-fx.html.js"), meta: {"title":"ak-fx 效果"} }],
  ["/blogs/ak-helper.html", { loader: () => import(/* webpackChunkName: "blogs_ak-helper.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-helper.html.js"), meta: {"title":"ak-helper"} }],
  ["/blogs/ak-icon.html", { loader: () => import(/* webpackChunkName: "blogs_ak-icon.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-icon.html.js"), meta: {"title":"ak-icon 图标"} }],
  ["/blogs/ak-level.html", { loader: () => import(/* webpackChunkName: "blogs_ak-level.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-level.html.js"), meta: {"title":"ak-level 关卡"} }],
  ["/blogs/ak-loading.html", { loader: () => import(/* webpackChunkName: "blogs_ak-loading.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-loading.html.js"), meta: {"title":"ak-loading 加载"} }],
  ["/blogs/ak-media.html", { loader: () => import(/* webpackChunkName: "blogs_ak-media.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-media.html.js"), meta: {"title":"ak-media 媒体"} }],
  ["/blogs/ak-object.html", { loader: () => import(/* webpackChunkName: "blogs_ak-object.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-object.html.js"), meta: {"title":"ak-object 物体"} }],
  ["/blogs/ak-pagination.html", { loader: () => import(/* webpackChunkName: "blogs_ak-pagination.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-pagination.html.js"), meta: {"title":"ak-pagination 分页"} }],
  ["/blogs/ak-panel.html", { loader: () => import(/* webpackChunkName: "blogs_ak-panel.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-panel.html.js"), meta: {"title":"ak-panel 面板"} }],
  ["/blogs/ak-san.html", { loader: () => import(/* webpackChunkName: "blogs_ak-san.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/ak-san.html.js"), meta: {"title":"ak-san 理智"} }],
  ["/blogs/", { loader: () => import(/* webpackChunkName: "blogs_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/index.html.js"), meta: {"title":"设计规范"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"title":"使用指南"} }],
  ["/docs/style.html", { loader: () => import(/* webpackChunkName: "docs_style.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/docs/style.html.js"), meta: {"title":"风格指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
