---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
home: true

title: cxl的博客
titleTemplate: 欢迎来到我的世界
editLink: true
lastUpdated: true

hero:
  name: cxl
  text: 安放一些浅薄的知识
  tagline: 锦鲤
  image:
    src: /avatar.png
    alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/

features:
  - icon: 🇨🇳
    title: 杂
    details: 内容不固定
  - icon: 🇨🇳
    title: 乱
    details: 形式不统一
  - icon: 🇨🇳
    title: 糅
    details: 啥都往里放
---

<script setup>
  import home from '/.vitepress/components/home.vue'
</script> 

<home />

