export const data = {
  "key": "v-79fdd481",
  "path": "/home.html",
  "title": "RuiNote",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "RuiNote",
    "heroImage": "/logo.svg",
    "heroText": "RuiNote",
    "tagline": "Rui的学习笔记",
    "actions": [
      {
        "text": "开始游戏 💡",
        "link": "/guide/"
      },
      {
        "text": "博客主页 🏠",
        "link": "/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Markdown 增强",
        "icon": "markdown",
        "details": "新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持",
        "link": "https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/"
      },
      {
        "title": "幻灯片页面",
        "icon": "slides",
        "details": "添加幻灯片页面以显示你喜欢的内容",
        "link": "https://vuepress-theme-hope.github.io/v2/zh/guide/layout/slides"
      },
      {
        "title": "布局增强",
        "icon": "layout",
        "details": "添加路径导航、页脚、改进的导航栏、改进的页面导航等。",
        "link": "https://vuepress-theme-hope.github.io/v2/zh/guide/layout/"
      },
      {
        "title": "浏览量与评论",
        "icon": "comment",
        "details": "配合 Waline 来开启阅读量统计与评论支持",
        "link": "https://vuepress-theme-hope.github.io/v2/zh/guide/feature/comment.html"
      }
    ],
    "copyright": false,
    "footer": "Copyright © 2022-present RuiTan",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ruinote.site/home.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "RuiNote"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "RuiNote"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": "home.md"
}

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
