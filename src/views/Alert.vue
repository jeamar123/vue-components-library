<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Alert</h2>

    <h4 class="mt-9 text-[#111827]">Default</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <div class="flex flex-wrap items-center gap-2">
          <Button variant="primary" @click="showAlert = true">Show Alert</Button>
        </div>
      </div>
      <CodeBlock :code="code" />
    </div>
  </div>

  <Alert
    :show="showAlert"
    title="I am an alert"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero mi."
    @confirm="showAlert = false"
    @close="showAlert = false"
  />
</template>

<script setup>
import { Alert, Button } from '@/components/common'
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const code = ref(`
  <Button variant="primary" @click="showAlert = true">Show Alert</Button>

  <Alert
    :show="showAlert"
    title="I am an alert"
    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut libero mi."
    @confirm="showAlert = false"
    @close="showAlert = false"
  />

  const showAlert = ref(false)
  
`)

const showAlert = ref(false)
</script>
