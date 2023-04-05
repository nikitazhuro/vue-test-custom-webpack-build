import { createApp } from "vue";

import router from './router';
import App from './App';
import store from "./store";
import Components from '@/UI';

const app = createApp(App)

Components.forEach((component) => {
  app.component(component.name, component)
})

app
  .use(router)
  .use(store)
  .mount('#root');