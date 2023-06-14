import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cxl-blog",//标题
  description: "A VitePress Site",
  base: '/vitepress-demo-cxl/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav: nav, //将导航栏信息传递进来
    i18nRouting: true, //兼容中英文

    sidebar: sidebar, //侧边栏
    outline: { //分级目录导航
      level:[2, 6],
      label: '目录'
    },
    search: { //本地搜索
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
