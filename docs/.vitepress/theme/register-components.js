import Home from '../components/home.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
  app.component('Home', Home)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
