import { defaultTheme } from '@vuepress/theme-default'
import themeObj from './theme/index.js'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * 自动扫描目录下的 markdown 文件，生成 sidebar 数组
 * @param {string} subPath - 相对于 docs 目录的子路径，如 'docs'、'blogs'
 * @returns {string[]} sidebar 配置数组
 */
function scanSidebar(subPath) {
  const fullPath = join(process.cwd(), 'docs', subPath)
  return readdirSync(fullPath)
    .filter(file => {
      const filePath = join(fullPath, file)
      return statSync(filePath).isFile() && file.endsWith('.md')
    })
    .map(file => (file.replace(/\.md$/, '') === 'README' ? '' : file.replace(/\.md$/, '')))
    .sort((a, b) => {
      // README 始终排在最前面
      if (a === '') return -1
      if (b === '') return 1
      return a.localeCompare(b)
    })
}

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
        '/docs/': scanSidebar('docs'),
        '/blogs/': scanSidebar('blogs'),
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
