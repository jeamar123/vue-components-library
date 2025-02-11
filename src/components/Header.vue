<template>
  <header class="sticky top-0 bg-white">
    <div class="px-4 h-16 border-b border-gray-200 flex items-center justify-between">
      <div>
        <!-- <h4 class="text-[#111827]">{{ $route.name }}</h4> -->
        <button class="" @click="toggleSidemenu">
          <NavToggleExpand class="w-6 h-6" :class="{ hidden: !isSidemenuExpanded }" />
          <NavToggleCollapsed class="w-6 h-6" :class="{ hidden: isSidemenuExpanded }" />
        </button>
      </div>
      <!-- <nav>
        <router-link to="/">Home</router-link>
      </nav> -->
    </div>
  </header>
</template>

<script setup>
import { NavToggleCollapsed, NavToggleExpand } from '@/components/svg'
import { ref } from 'vue'

const emit = defineEmits(['toggle-sidemenu'])

const isSidemenuExpanded = ref(true)

const toggleSidemenu = () => {
  isSidemenuExpanded.value = !isSidemenuExpanded.value
  emit('toggle-sidemenu', isSidemenuExpanded.value)
}
</script>
