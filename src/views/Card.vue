<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Card</h2>

    <h4 class="mt-9 text-[#111827]">Default</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec faucibus urna.
          Suspendisse elit sem, posuere at auctor vitae, viverra et velit. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dui libero,
          lacinia ut venenatis in, ullamcorper ut justo. Integer sollicitudin lacinia justo, et
          suscipit odio tincidunt eget.
        </Card>
      </div>
      <CodeBlock :code="code" />
    </div>
  </div>
</template>

<script setup>
import { Card } from '@/components/common'
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const code = ref(`
  <Card>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec faucibus urna.
    Suspendisse elit sem, posuere at auctor vitae, viverra et velit. Orci varius natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dui libero,
    lacinia ut venenatis in, ullamcorper ut justo. Integer sollicitudin lacinia justo, et
    suscipit odio tincidunt eget.
  </Card>
  
`)
</script>
