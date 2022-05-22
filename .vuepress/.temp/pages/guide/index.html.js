export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "笔记说明",
  "lang": "zh-CN",
  "frontmatter": {
    "index": false,
    "icon": "creative",
    "category": [
      "笔记说明"
    ],
    "summary": "笔记说明",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ruinote.site/guide/"
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
          "content": "笔记说明"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
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
    "minutes": 0.01,
    "words": 4
  },
  "filePathRelative": "guide/README.md"
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
