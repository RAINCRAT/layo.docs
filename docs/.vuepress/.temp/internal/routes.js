export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/blogs/about.html", { loader: () => import(/* webpackChunkName: "blogs_about.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/about.html.js"), meta: {"title":"关于 LAYOSERVE泠域存储blogs"} }],
  ["/blogs/info.html", { loader: () => import(/* webpackChunkName: "blogs_info.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/info.html.js"), meta: {"title":"真的只有存储吗"} }],
  ["/blogs/why_create.html", { loader: () => import(/* webpackChunkName: "blogs_why_create.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/why_create.html.js"), meta: {"title":"为什么创建泠域存储"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"title":"使用指南"} }],
  ["/docs/style.html", { loader: () => import(/* webpackChunkName: "docs_style.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/docs/style.html.js"), meta: {"title":"风格指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blogs/", { loader: () => import(/* webpackChunkName: "blogs_index.html" */"E:/raincrat/layo.docs/docs/.vuepress/.temp/pages/blogs/index.html.js"), meta: {"title":""} }],
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
