<template>
  <div>
    <div :class="wrapperClass">
      <label
        v-if="label"
        class="text-xs block font-semibold mb-1"
        :class="[
          {
            'text-gray-500 cursor-not-allowed': readOnly,
          },
          labelClass,
        ]"
        :for="id"
        >{{ label }}<span v-if="required">*</span></label
      >
    </div>
    <div class="relative">
      <VueDatePicker
        v-model="initialValue"
        :ui="{
          input: `form-element ${inputClass} ${errors.length && 'form-element-error'}`,
        }"
        :auto-apply="true"
        :hide-input-icon="true"
        :clearable="false"
        :enable-time-picker="false"
        :format="dateFormat"
        @update:model-value="formatTextDate"
      />
    </div>
    <template v-if="errors.length">
      <div class="mt-1">
        <p v-for="error in errors" :key="error" class="text-red-500 block text-xs">
          {{ error }}
        </p>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  errors: {
    type: Array,
    default: () => [],
  },
  readOnly: {
    type: Boolean,
    default: () => false,
  },
  wrapperClass: {
    type: [String, Object, Array],
    default: '',
  },
  labelClass: {
    type: [String, Object, Array],
    default: '',
  },
  inputClass: {
    type: [String, Object, Array],
    default: '',
  },
  modelValue: {
    type: [String, Date, null],
    default: null,
  },
  dateFormat: {
    type: String,
    required: false,
    default: 'PP',
  },
})
const emit = defineEmits(['update:model-value'])

const initialValue = ref(props.modelValue)

const formatTextDate = (value) => {
  if (value) {
    initialValue.value = value
  }
  emit('update:model-value', value)
}
</script>
