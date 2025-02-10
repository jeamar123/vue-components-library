

<template>
  <button :class="getClasses">
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary' , // primary, secondary
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

</style>
