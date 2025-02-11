<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Forms</h2>

    <h4 class="mt-9 text-[#111827]">Text Input</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <TextInput v-model="form.text" />
      </div>
      <CodeBlock :code="textInputCode" />
    </div>

    <h4 class="mt-9 text-[#111827]">Number Input</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <TextInput type="number" v-model="form.text" />
      </div>
      <CodeBlock :code="numberInputCode" />
    </div>

    <h4 class="mt-9 text-[#111827]">Select Input</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <SelectInput
          v-model="form.select"
          :items="['Apples', 'Banana', 'Corn', 'Dairy']"
          class="w-[200px]"
        />
      </div>
      <CodeBlock :code="selectInputCode" />
    </div>

    <h4 class="mt-9 text-[#111827]">Datepicker Input</h4>
    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <DatepickerInput v-model="form.date" class="w-[200px]" />
      </div>
      <CodeBlock :code="datepickerInputCode" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TextInput, DatepickerInput, SelectInput } from '@/components/form'
import CodeBlock from '@/components/CodeBlock.vue'

const textInputCode = ref(`
  <TextInput v-model="form.text" />
  
`)

const numberInputCode = ref(`
  <TextInput type="number" v-model="form.number" />

`)

const selectInputCode = ref(`
  <SelectInput
    v-model="form.select"
    :items="['Apples', 'Banana', 'Corn', 'Dairy']"
    class="w-[200px]"
  />

`)

const datepickerInputCode = ref(`
  <DatepickerInput v-model="form.date" class="w-[200px]" />

`)

const form = ref({
  text: '',
  number: null,
  select: null,
  date: new Date(),
})
</script>
