export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/components/ak-button-group.html", { loader: () => import(/* webpackChunkName: "components_ak-button-group.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-button-group.html.js"), meta: {"title":"ak-button-group 按钮组"} }],
  ["/components/ak-button.html", { loader: () => import(/* webpackChunkName: "components_ak-button.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-button.html.js"), meta: {"title":"ak-button 按钮"} }],
  ["/components/ak-card.html", { loader: () => import(/* webpackChunkName: "components_ak-card.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-card.html.js"), meta: {"title":"ak-card 卡片"} }],
  ["/components/ak-counter.html", { loader: () => import(/* webpackChunkName: "components_ak-counter.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-counter.html.js"), meta: {"title":"ak-counter 计数器"} }],
  ["/components/ak-divider.html", { loader: () => import(/* webpackChunkName: "components_ak-divider.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-divider.html.js"), meta: {"title":"ak-divider 分割线"} }],
  ["/components/ak-form.html", { loader: () => import(/* webpackChunkName: "components_ak-form.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-form.html.js"), meta: {"title":"ak-form 表单"} }],
  ["/components/ak-fx.html", { loader: () => import(/* webpackChunkName: "components_ak-fx.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-fx.html.js"), meta: {"title":"ak-fx 效果"} }],
  ["/components/ak-helper.html", { loader: () => import(/* webpackChunkName: "components_ak-helper.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-helper.html.js"), meta: {"title":"ak-helper"} }],
  ["/components/ak-icon.html", { loader: () => import(/* webpackChunkName: "components_ak-icon.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-icon.html.js"), meta: {"title":"ak-icon 图标"} }],
  ["/components/ak-level.html", { loader: () => import(/* webpackChunkName: "components_ak-level.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-level.html.js"), meta: {"title":"ak-level 关卡"} }],
  ["/components/ak-loading.html", { loader: () => import(/* webpackChunkName: "components_ak-loading.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-loading.html.js"), meta: {"title":"ak-loading 加载"} }],
  ["/components/ak-media.html", { loader: () => import(/* webpackChunkName: "components_ak-media.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-media.html.js"), meta: {"title":"ak-media 媒体"} }],
  ["/components/ak-object.html", { loader: () => import(/* webpackChunkName: "components_ak-object.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-object.html.js"), meta: {"title":"ak-object 物体"} }],
  ["/components/ak-pagination.html", { loader: () => import(/* webpackChunkName: "components_ak-pagination.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-pagination.html.js"), meta: {"title":"ak-pagination 分页"} }],
  ["/components/ak-panel.html", { loader: () => import(/* webpackChunkName: "components_ak-panel.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-panel.html.js"), meta: {"title":"ak-panel 面板"} }],
  ["/components/ak-san.html", { loader: () => import(/* webpackChunkName: "components_ak-san.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/ak-san.html.js"), meta: {"title":"ak-san 理智"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"设计规范"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"使用指南"} }],
  ["/guide/style.html", { loader: () => import(/* webpackChunkName: "guide_style.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/guide/style.html.js"), meta: {"title":"风格指南"} }],
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
