<template>
  <TransitionRoot appear :show="show">
    <Dialog
      as="div"
      open
      class="fixed top-0 -left-[2px] z-50 h-screen w-full overflow-y-auto tracking-[0.2px] subpixel-antialiased"
      @close="emit('close')"
    >
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50" />
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="h-screen overflow-y-auto">
          <div
            :class="[
              'flex min-h-screen justify-center py-2 md:py-10',
              verticalPosition === 'top' ? 'items-start' : 'items-center',
              containerClass,
            ]"
          >
            <div
              :class="[
                'relative ml-1 md:ml-0 max-w-[98%] lg:max-w-[1380px] rounded-[10px] bg-[#fff] shadow-[0px_6px_19px_0px_rgb(182,182,182,0.35)]',
                wrapperClass,
              ]"
              :style="{
                width: !width ? 'auto' : typeof width !== 'number' ? width : width + 'px',
              }"
            >
              <slot v-if="showHeader" name="header">
                <div
                  :class="[
                    'flex items-center rounded-tl-[10px] rounded-tr-[10px] bg-[#f6f7f8] px-4 py-3 md:p-[15px_30px]',
                    headerClass,
                  ]"
                >
                  <h1 class="flex-1 text-left text-[15px] font-normal uppercase text-[#9C63FF]">
                    {{ title || '' }}
                  </h1>
                  <a class="cursor-pointer" @click="emit('close')">
                    <!-- <FontAwesomeIcon :icon="['fal', 'times']" class="text-[#3d4146]" /> -->
                    x
                  </a>
                </div>
              </slot>

              <div :class="['p-4 md:p-[15px_30px]', bodyClass]">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue'

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: [String, null],
    default: null,
  },
  width: {
    type: [Number, String, null],
    default: 600,
  },
  bodyClass: {
    type: String,
    default: '',
  },
  headerClass: {
    type: String,
    default: '',
  },
  containerClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  verticalPosition: {
    type: String,
    default: 'center',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['close'])
</script>
