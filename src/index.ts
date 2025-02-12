import type { App } from 'vue'
import Button from '@/components/common/Button.vue'
import Alert from '@/components/common/Alert.vue'
import "./style.css";

type Options = {
  primaryColor?: string;
};

export default {
  install: (app: App, options: Options = {}) => {
    // Default configuration
    const config = {
      primaryColor: '#4f46e5', // Default color
      ...options,
    };

    // Inject the configuration globally
    app.provide('libraryConfig', config);

    // Register components globally
    app.component('Alert', Alert);
    app.component('Button', Button);

    // Add Tailwind-compatible CSS variables for dynamic primary color
    document.documentElement.style.setProperty('--primary-color', config.primaryColor);
  },
};

export { Button, Alert }