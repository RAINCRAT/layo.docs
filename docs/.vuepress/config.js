import { defaultTheme } from '@vuepress/theme-default'
import themeObj from './theme/index.js'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '泠域存储',
  description: 'LAYOSERVE 泠域存储',

  head: [
    // ['link', { rel: 'icon', href: '/ak.png' }],
    // [
    //   'script',
    //   {
    //     async: true,
    //     src: '//at.alicdn.com/t/font_1623879_1wzsjomrpmm.js',
    //   },
    // ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700,900|Noto+Serif+SC:400,500,700,900|Syncopate:700&display=swap',
      },
    ],
  ],

  theme: {
    ...themeObj,
    extends: defaultTheme({
      // logo: '/ak.svg',

      navbar: [
        { text: '文档站首页', link: '/' },
        { text: '文档', link: '/docs/' },
        { text: '博客', link: '/blogs/' },
      ],

      sidebar: {
        '/docs/': ['', 'style'],
        '/blogs/': [
          '',
          'ak-button',
          'ak-button-group',
          'ak-card',
          'ak-counter',
          'ak-divider',
          'ak-fx',
          'ak-form',
          'ak-icon',
          'ak-level',
          'ak-loading',
          'ak-media',
          'ak-object',
          'ak-panel',
          'ak-pagination',
          'ak-san',
        ],
      },

      lastUpdated: '上次更新',
      repo: 'https://github.com/RAINCRAT/layo.docs',
      docsDir: 'docs',
      editLink: false,
      editLinkText: '帮助改善此页面！( ￣□￣)/',
      contributors: false,
      colorMode: 'dark',
    }),
  },

  bundler: viteBundler(),
})
