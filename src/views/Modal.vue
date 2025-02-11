<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Modal</h2>

    <h4 class="mt-9 text-[#111827]">Default</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <div class="flex flex-wrap items-center gap-2">
          <Button variant="primary" @click="showModal = true">Show Modal</Button>
        </div>
      </div>
      <CodeBlock :code="code" />
    </div>
  </div>

  <Modal :show="showModal" :width="500" @close="showModal = false">
    <div>I am a modal</div>
  </Modal>
</template>

<script setup>
import { Button, Modal } from '@/components/common'
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const code = ref(`
  <Button variant="primary" @click="showModal = true">Show Modal</Button>

  <Modal
    :show="showModal"
    :width="500"
    @close="showModal = false"
  >
    <div>
      I am a modal
    </div>
  </Modal>

  const showModal = ref(false)
`)

const showModal = ref(false)
</script>
