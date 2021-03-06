export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "RuiNote",
  "description": "Rui的学习笔记",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest",
        "crossorigin": "use-credentials"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#46bd87"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
