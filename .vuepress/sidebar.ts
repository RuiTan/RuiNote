import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "Java",
    icon: "java",
    prefix: "/guide/java/",
    collapsable: true,
    children: [
      {
        text: "基础知识",
        icon: "overflow",
        collapsable: true,
        prefix: "basic/",
        children: [
          {
            text: "面向对象",
            link: "面向对象"
          },{
            text: "数据类型",
            link: "数据类型"
          },{
            text: "反射机制",
            link: "反射机制"
          },{
            text: "异常和错误",
            link: "异常和错误"
          }
        ],
      },
      {
        text: "容器",
        icon: "structure",
        collapsable: true,
        prefix: "collections/",
        children: [
          {
            text: "List",
            link: "List"
          },
          {
            text: "Queue",
            link: "Queue"
          },
          {
            text: "Map",
            link: "Map"
          },
          {
            text: "Set",
            link: "Set"
          },
        ],
      },
      {
        text: "并发编程",
        icon: "asynchronous",
        collapsable: true,
        prefix: "concurrent/",
        children: [
          {
            text: "线程基础",
            link: "线程基础"
          },{
            text: "锁",
            link: "锁"
          },{
            text: "并发容器",
            link: "并发容器"
          },{
            text: "线程池",
            link: "线程池"
          },
        ]
      }
    ],
  },
  {
    text: "数据库",
    icon: "storage",
    prefix: "/guide/db/",
    collapsable: true,
    children: [
      {
        text: "理论基础",
        icon: "read",
        link: "理论基础",
      },{
        text: "索引",
        icon: "tree",
        link: "索引",
      },{
        text: "锁",
        icon: "lock",
        link: "锁",
      },{
        text: "底层存储",
        icon: "window",
        link: "底层存储",
      },
    ]
  },
  {
    text: "操作系统",
    icon: "linux",
    prefix: "/guide/os/",
    collapsable: true,
    children: [
      {
        text: "中断和异常",
        icon: "extend",
        link: "中断和异常",
      },{
        text: "进程管理",
        icon: "material",
        link: "进程管理",
      },{
        text: "内存管理",
        icon: "footer",
        link: "内存管理",
      },{
        text: "文件管理",
        icon: "file",
        link: "文件管理",
      },{
        text: "I/O管理",
        icon: "change",
        link: "IO管理",
      },
    ]
  },
  {
    text: "计算机网络",
    icon: "network",
    prefix: "/guide/network/",
    collapsable: true,
    children: [
      {
        text: "网络分层模型",
        icon: "sort",
        link: "网络分层模型",
      },{
        text: "TCP协议",
        icon: "remote",
        link: "TCP协议",
      },{
        text: "HTTP协议",
        icon: "http",
        link: "HTTP协议",
      },{
        text: "幻灯片",
        icon: "page",
        link: "slide",
      }
    ]
  }
]);
