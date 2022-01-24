module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "Ridd 的博客",
  description: "Ridd 的博客",
  markdown: {
    anchor: true,
    lineNumbers: true,
  },
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      {
        text: "foo",
        link: "/foo/",
      },
      {
        text: "group",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      "/bar/README.md",
    ],
  },
};
