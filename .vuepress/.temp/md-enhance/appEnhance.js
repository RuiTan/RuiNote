import { defineClientAppEnhance } from "@vuepress/client";
import ChartJS from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import CodeDemo from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeGroup from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeGroup";
import CodeGroupItem from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeGroupItem";
import FlowChart from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/align.scss";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/Github/ruinote/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientAppEnhance(({ app }) => {
  app.component("ChartJS", ChartJS);
  app.component("CodeDemo", CodeDemo);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);
  app.component("FlowChart", FlowChart);
  app.component("Mermaid", Mermaid);
  app.component("Presentation", Presentation);
  
});