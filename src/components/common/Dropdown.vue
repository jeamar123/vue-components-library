<template>
  <Menu as="div" class="relative inline-block text-left">
    <div class="relative">
      <MenuButton
        class="inline-flex w-full min-w-[120px] justify-between rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        :class="buttonClass"
      >
        <slot name="button-content">
          <span class="block truncate capitalize">
            {{
              fixedPlaceholder
                ? placeholder || 'Select'
                : selectedValue
                  ? selectedValue
                  : placeholder
            }}
          </span>
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </slot>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          as="div"
          class="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10"
          :class="[
            dropdownDirection === 'bottom' ? 'bottom-10 md:bottom-auto md:top-10' : 'bottom-10',
          ]"
        >
          <div class="px-1 py-1">
            <MenuItem v-for="item in items" :key="item" v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-primary/50 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="
                  () => {
                    selectedValue = item
                    emit('change', selectedValue)
                    emit('update:model-value', selectedValue)
                  }
                "
              >
                {{ item }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </div>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'


interface Props {
  items?: Array<string>;
  modelValue?: string | object | null;
  dropdownDirection?: string;
  placeholder?: string;
  fixedPlaceholder?: false;
  buttonClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  dropdownDirection: 'bottom',
  placeholder: 'Select',
  fixedPlaceholder: false,
  buttonClass: '',
})

const emit = defineEmits(['change', 'update:model-value'])
const selectedValue = ref<string | object | null | undefined>(props.modelValue)
</script>
