<template>
  <div class="py-2 px-5 border-t border-[#e5e7eb]">
    <VCodeBlock :code="code" highlightjs lang="html" theme="nord" />
  </div>
</template>

<script setup>
import VCodeBlock from '@wdns/vue-code-block'

defineProps({
  code: {
    type: String,
    required: true,
  },
})
</script>
