export const themeData = {
  "blog": {
    "description": "退堂鼓演奏家",
    "intro": "/intro.html",
    "medias": {
      "Email": "mailto:1063932362@qq.com",
      "GitHub": "https://github.com/RuiTan",
      "QQ": "1063932362",
      "Steam": "223353042",
      "Wechat": "13155648176"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$CjmvHSdOTlfqSSLxWBdiluQIteskCQqmJ2dYqp64KJkYsp6XmuQH6"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "author": "作者",
        "date": "写作日期",
        "origin": "原创",
        "views": "访问量",
        "category": "分类",
        "tag": "标签",
        "readingTime": "阅读时间",
        "words": "字数",
        "toc": "此页内容",
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "paginationLocales": {
        "prev": "上一页",
        "next": "下一页",
        "navigate": "跳转到",
        "action": "前往",
        "errorText": "请输入 1 到 $page 之前的页码！"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "文章已加密",
        "placeholder": "输入密码",
        "remember": "记住密码",
        "errorHint": "请输入正确的密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家",
        "openInNewWindow": "Open in new window"
      },
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        {
          "text": "Java",
          "icon": "java",
          "prefix": "/guide/java/",
          "collapsable": true,
          "children": [
            {
              "text": "基础知识",
              "icon": "overflow",
              "collapsable": true,
              "prefix": "basic/",
              "children": [
                {
                  "text": "面向对象",
                  "link": "面向对象"
                },
                {
                  "text": "数据类型",
                  "link": "数据类型"
                },
                {
                  "text": "反射机制",
                  "link": "反射机制"
                },
                {
                  "text": "异常和错误",
                  "link": "异常和错误"
                }
              ]
            },
            {
              "text": "容器",
              "icon": "structure",
              "collapsable": true,
              "prefix": "collections/",
              "children": [
                {
                  "text": "List",
                  "link": "List"
                },
                {
                  "text": "Queue",
                  "link": "Queue"
                },
                {
                  "text": "Map",
                  "link": "Map"
                },
                {
                  "text": "Set",
                  "link": "Set"
                }
              ]
            },
            {
              "text": "并发编程",
              "icon": "asynchronous",
              "collapsable": true,
              "prefix": "concurrent/",
              "children": [
                {
                  "text": "线程基础",
                  "link": "线程基础"
                },
                {
                  "text": "锁",
                  "link": "锁"
                },
                {
                  "text": "并发容器",
                  "link": "并发容器"
                },
                {
                  "text": "线程池",
                  "link": "线程池"
                }
              ]
            }
          ]
        },
        {
          "text": "数据库",
          "icon": "storage",
          "prefix": "/guide/db/",
          "collapsable": true,
          "children": [
            {
              "text": "理论基础",
              "icon": "read",
              "link": "理论基础"
            },
            {
              "text": "索引",
              "icon": "tree",
              "link": "索引"
            },
            {
              "text": "锁",
              "icon": "lock",
              "link": "锁"
            },
            {
              "text": "底层存储",
              "icon": "window",
              "link": "底层存储"
            }
          ]
        },
        {
          "text": "操作系统",
          "icon": "linux",
          "prefix": "/guide/os/",
          "collapsable": true,
          "children": [
            {
              "text": "中断和异常",
              "icon": "extend",
              "link": "中断和异常"
            },
            {
              "text": "进程管理",
              "icon": "material",
              "link": "进程管理"
            },
            {
              "text": "内存管理",
              "icon": "footer",
              "link": "内存管理"
            },
            {
              "text": "文件管理",
              "icon": "file",
              "link": "文件管理"
            },
            {
              "text": "I/O管理",
              "icon": "change",
              "link": "IO管理"
            }
          ]
        },
        {
          "text": "计算机网络",
          "icon": "network",
          "prefix": "/guide/network/",
          "collapsable": true,
          "children": [
            {
              "text": "网络分层模型",
              "icon": "sort",
              "link": "网络分层模型"
            },
            {
              "text": "TCP协议",
              "icon": "remote",
              "link": "TCP协议"
            },
            {
              "text": "HTTP协议",
              "icon": "http",
              "link": "HTTP协议"
            },
            {
              "text": "幻灯片",
              "icon": "page",
              "link": "slide"
            }
          ]
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "RuiTan",
        "url": "https://ruinote.site"
      },
      "logo": "/logo.svg",
      "repo": "RuiTan/ruinote",
      "docsDir": "demo/src",
      "navbar": [
        {
          "text": "笔记整理",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "文档源码",
          "icon": "github",
          "link": "https://github.com/RuiTan/RuiNote"
        }
      ],
      "footer": "默认页脚",
      "displayFooter": true,
      "pageInfo": [
        "Date",
        "Category",
        "Tag",
        "Word",
        "ReadingTime"
      ]
    }
  }
}

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
