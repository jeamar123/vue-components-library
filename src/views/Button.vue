<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827] text-3xl font-semibold">Button</h2>

    <h4 class="mt-9 text-[#111827] text-lg font-medium">Variants</h4>
    <div class="mt-2 border border-[#e5e7eb] rounded-lg bg-white">
      <div class="p-5">
        <div class="flex flex-wrap items-center gap-2">
          <!-- <Button variant="default">Default</Button> -->
          <Button variant="primary">Primary</Button>
          <!-- <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button> -->
        </div>
      </div>
      <!-- <CodeBlock :code="btnVariantCode" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { Button } from '@/components/common'
import { Button } from '@jeamar1234/vue-components-library'
import { HomeIcon } from '@heroicons/vue/24/solid'
import CodeBlock from '@/components/CodeBlock.vue'

const btnVariantCode = ref(
  `<div class="flex flex-wrap items-center gap-2">
    <Button variant="default">Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
</div>`,
)
</script>
