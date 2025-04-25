import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "九万里风",
    pageTitleSuffix: " 🍀",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: {
          name: "Tagesschrift",
          weights: [400],
        },
        body: "LXGW WenKai TC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
            light: "#f2f7f2", // 类似森林中晴朗天空下的草地背景色
            lightgray: "#a9b3a9", // 像是森林中石头边缘的淡灰色
            gray: "#7d877d", // 树木的灰色树皮
            darkgray: "#3c473c", // 较深的森林土壤颜色
            dark: "#232b23", // 深绿色的树木阴影
            secondary: "#3d6b3d", // 森林中较深的绿色植物
            tertiary: "#6ca36c", // 森林中明亮的绿色枝叶
            highlight: "rgba(108, 163, 108, 0.15)", // 明亮绿色枝叶的轻微高亮
            textHighlight: "#FFD700", // 浅绿的文本高亮
        },
        darkMode: {
            light: "#003329", // 夜晚森林的深背景色
            lightgray: "#354235", // 夜晚石头的灰绿色
            gray: "#556b55", // 夜晚树木的灰色调
            darkgray: "#b3c2b3", // 夜晚月光下的明亮区域
            dark: "#e0f7e0", // 月光下的树木颜色
            secondary: "#66bb6a", // 夜间森林中较亮的绿色
            tertiary: "#81c784", // 夜间森林中更明亮的绿色
            highlight: "rgba(129, 199, 132, 0.15)", // 明亮绿色的高亮效果
            textHighlight: "#4caf5088", // 深绿的文本高亮
        },
    }
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Poetry(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        parseTags: false,
        mermaid: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
