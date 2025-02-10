

<template>
  <button :class="[getClasses]" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: string;
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary' , // primary, secondary
  disabled: false
})

const getClasses = computed(() => {
  let defaultClasses = 'btn'
  let classes = ''

  switch (props.variant) {
    case 'secondary':
      classes = 'btn-secondary'
      break
    case 'outline':
      classes = 'btn-outline'
      break
    case 'disabled':
      classes = 'btn-disabled'
      break
    case 'default':
      classes = 'btn-default'
      break
    case 'blank':
      classes = 'btn-blank'
      break
    case 'primary':
    default:
      classes = 'btn-primary'
      break
  }

  return `${defaultClasses} ${classes}`
})
</script>

<style scoped>
.btn {
  white-space: nowrap;
  border-radius: 0.375rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  border: 1px solid transparent;
}

.btn:disabled {
  @apply opacity-50 pointer-events-none;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-[#6366f1];
}

.btn-secondary {
  @apply bg-secondary text-[#4f46e5] hover:bg-[#e0e7ff];
}

.btn-outline {
  @apply bg-white text-primary border-primary hover:opacity-80;
}

.btn-default {
  @apply bg-white text-[#4b5563] border-[#d1d5db] hover:bg-[#f9fafb];
}
</style>
