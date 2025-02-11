import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Alert from '@/views/Alert.vue'
import Button from '@/views/Button.vue'
import Card from '@/views/Card.vue'
import Dropdown from '@/views/Dropdown.vue'
import Forms from '@/views/Forms.vue'
import Icon from '@/views/Icon.vue'
import Modal from '@/views/Modal.vue'
import NotificationAlert from '@/views/NotificationAlert.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'Home',
      // component: Home,
      redirect: '/button',
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert,
    },
    {
      path: '/button',
      name: 'Button',
      component: Button,
    },
    {
      path: '/card',
      name: 'Card',
      component: Card,
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: Dropdown,
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms,
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon,
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/notification-alert',
      name: 'NotificationAlert',
      component: NotificationAlert,
    },
  ],
})

export default router
