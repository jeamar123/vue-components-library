<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Notification Alert</h2>

    <h4 class="mt-9 text-[#111827]">Default</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <div class="flex flex-wrap items-center gap-2">
          <Button variant="primary" @click="showNotificationAlert = true"
            >Show Notification Alert</Button
          >
        </div>
      </div>
      <CodeBlock :code="code" />
    </div>
  </div>

  <NotificationAlert
    title="Lorem Ipsum"
    message="Lorem ipsum dolor sit amet dolor set amit"
    :show="showNotificationAlert"
    @hide="showNotificationAlert = false"
  />
</template>

<script setup>
import { Button, NotificationAlert } from '@/components/common'
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const code = ref(`
  <Button variant="primary" @click="showNotificationAlert = true">Show Notification Alert</Button>

  <NotificationAlert
    title="Lorem Ipsum"
    message="Lorem ipsum dolor sit amet dolor set amit"
    :show="showNotificationAlert"
    @hide="showNotificationAlert = false"
  />

  const showNotificationAlert = ref(false)
`)

const showNotificationAlert = ref(false)
</script>
