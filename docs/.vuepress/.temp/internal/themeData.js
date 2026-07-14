export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"文档站首页\",\"link\":\"/\"},{\"text\":\"文档\",\"link\":\"/docs/\"},{\"text\":\"博客\",\"link\":\"/blogs/\"}],\"sidebar\":{\"/docs/\":[\"\",\"style\"],\"/blogs/\":[\"\",\"why_create\"]},\"lastUpdated\":\"上次更新\",\"repo\":\"https://github.com/RAINCRAT/layo.docs\",\"docsDir\":\"docs\",\"editLink\":false,\"editLinkText\":\"帮助改善此页面！( ￣□￣)/\",\"contributors\":false,\"colorMode\":\"dark\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
