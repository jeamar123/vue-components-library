import MyButton from './components/Button.vue'

export default {
  install: (app: any) => {
    app.component('b-upload-files-modal', MyButton)
  },
}

export { MyButton }