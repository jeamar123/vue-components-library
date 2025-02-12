import './assets/scss/_tailwind.scss'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueComponentsLibrary from '@jeamar1234/vue-components-library'

const app = createApp(App)

// // Default configuration
const config = {
  primaryColor: '#10b981',
  primaryColorHover: '#10b981',
  secondaryColor: '#10b981',
  secondaryColorHover: '#10b981',
};

// // Inject the configuration globally
// app.provide('libraryConfig', config);

app
  .use(VueComponentsLibrary, config)
  .use(router)
  .mount('#app')