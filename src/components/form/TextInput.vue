<template>
  <div>
    <div :class="wrapperClass">
      <label
        v-if="label"
        class="text-xs block font-semibold mb-1"
        :class="[{ 'text-gray-500 cursor-not-allowed': readOnly }, labelClass]"
        :style="labelStyle"
        :for="id"
        >{{ label }}<span v-if="required">*</span></label
      >
      <component
        :is="as"
        :id="id"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="[
          !readOnly ? 'form-control-focus' : '',
          errors.length ? 'form-control-error' : '',
          inputClass,
        ]"
        :style="inputStyle"
        :readonly="readOnly"
        @input="(e) => emit('update:model-value', e.target.value)"
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
defineProps({
  as: {
    type: String,
    default: 'input', // input, textarea
  },
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelStyle: {
    type: Object,
    default: () => {},
  },
  type: {
    type: String,
    default: 'text', // text, number, date, password
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  readOnly: {
    type: Boolean,
    default: () => false,
  },
  required: {
    type: Boolean,
    default: () => false,
  },
  errors: {
    type: Array,
    default: () => [],
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
  inputStyle: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['update:model-value'])
</script>
