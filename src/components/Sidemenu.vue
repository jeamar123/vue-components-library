<template>
  <div
    class="bg-[#f3f4f6] border-r border-gray-200 h-screen shrink-0 transition-delay !duration-200 overflow-hidden font-medium"
    :class="expanded ? 'w-[290px]' : 'w-[80px]'"
  >
    <div class="py-3" :class="expanded ? 'px-7' : 'px-2 text-center'">
      <!-- <router-link :to="{ name: 'Home' }" class=""> -->
        <img alt="Vue logo" class="h-11" src="@/assets/images/logo.svg" />
      <!-- </router-link> -->
    </div>
    <div class="px-7">
      <div v-if="expanded" class="pt-4 pb-2 whitespace-nowrap uppercase">UI Components</div>

      <ul class="mt-2 text-[#4b5563] space-y-1">
        <li>
          <router-link :to="{ name: 'Alert' }" active-class="active" class="menu-item"
            >Alert</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Button' }" active-class="active" class="menu-item"
            >Button</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Card' }" active-class="active" class="menu-item"
            >Card</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Dropdown' }" active-class="active" class="menu-item"
            >Dropdown</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Forms' }" active-class="active" class="menu-item"
            >Forms</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Icon' }" active-class="active" class="menu-item"
            >Icon</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Modal' }" active-class="active" class="menu-item"
            >Modal</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'NotificationAlert' }" active-class="active" class="menu-item"
            >Notification Alert</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  expanded: {
    type: Boolean,
    default: () => true,
  },
})
</script>

<style>
.menu-item {
  @apply px-3 py-3 w-full block rounded-md hover:bg-[#1118271a] hover:text-[#111827];
}
.menu-item.active {
  @apply bg-[#11182713] text-[#111827];
}
</style>
