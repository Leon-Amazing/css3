import Theme from 'vitepress/dist/client/theme-default';
import { registerComponents } from './register-components.js';
import Home from '../components/home.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app), app.component('home', Home);
  }
};
