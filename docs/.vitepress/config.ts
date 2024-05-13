import nav from "./config/nav";
import sidebar from './config/sidebar';

const config = {
  base: '/css3/',
  lang: 'zh-CN',
  title: 'CSS3 Reference',
  description: "Leon's library",
  head: [['link', { rel: 'icon', href: '/css3/logo.png' }]],
  themeConfig: {
    nav,
    sidebar,
    logo: '/logo.png'
  },
  markdown: {
    config: md => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
};

export default config;
