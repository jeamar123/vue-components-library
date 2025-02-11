<template>
  <main class="h-screen text-[#6b7280] text-sm bg-[#f5f5f5]">
    <div class="flex">
      <Sidemenu :expanded="isSidemenuExpanded" />

      <div class="flex-1 overflow-y-auto h-screen">
        <Header @toggle-sidemenu="toggleSidemenu" />

        <div>
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Sidemenu from '@/components/Sidemenu.vue'
import { ref } from 'vue'

const isSidemenuExpanded = ref(true)

const toggleSidemenu = (value: boolean) => (isSidemenuExpanded.value = value)
</script>

<style scoped>
</style>
