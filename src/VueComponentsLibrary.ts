import Button from '@/components/common/Button.vue'
import "./style.css";

export default {
  install: (app: any) => {
    app.component('Button', Button)
  },
}

export { Button }