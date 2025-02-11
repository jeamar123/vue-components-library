<template>
  <div class="pt-6 pb-20 px-8">
    <h2 class="text-[#111827]">Icon</h2>

    <div class="mt-6 border border-[#e5e7eb] rounded-lg">
      <div class="p-5">
        <div class="flex flex-wrap items-center gap-2">
          <Icon name="HomeIcon" class="w-20" />
          <Icon name="HomeIcon" class="w-10" />
          <Icon name="HomeIcon" class="w-8" />
          <Icon name="HomeIcon" class="w-6" />
        </div>
      </div>
      <CodeBlock :code="code" />
    </div>

    <h4 class="mt-9 text-[#111827]">List of Icons</h4>

    <div class="mt-6 border border-[#e5e7eb] rounded-lg p-5">
      <ul class="space-y-1 text-black">
        <li>HomeIcon</li>
        <li>PencilSquareIconOutline</li>
        <li>PhotoIconOutline</li>
        <li>Bars3IconOutline</li>
        <li>XMarkIconOutline</li>
        <li>UserIcon</li>
        <li>UserIconOutline</li>
        <li>UserCircleIcon</li>
        <li>UserCircleIconOutline</li>
        <li>EnvelopeIconOutline</li>
        <li>PhoneIconOutline</li>
        <li>EnvelopeIcon</li>
        <li>PhoneArrowDownLeftIcon</li>
        <li>CalendarDaysIcon</li>
        <li>CalendarDaysIconOutline</li>
        <li>CalendarIcon</li>
        <li>UserPlusIcon</li>
        <li>UserPlusIconOutline</li>
        <li>MagnifyingGlassIconOutline</li>
        <li>EyeIconOutline</li>
        <li>TrashIcon</li>
        <li>TrashIconOutline</li>
        <li>Cog6ToothIconOutline</li>
        <li>Cog8ToothIconOutline</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/components/common'
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const code = ref(`
  <div class="flex flex-wrap items-center gap-2">
    <Icon name="HomeIcon" class="w-20" />
    <Icon name="HomeIcon" class="w-10" />
    <Icon name="HomeIcon" class="w-8" />
    <Icon name="HomeIcon" class="w-6" />
  </div>
  
`)
</script>
