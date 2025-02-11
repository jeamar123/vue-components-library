<template>
  <TransitionRoot appear :show="show">
    <Dialog
      as="div"
      open
      class="fixed top-0 -left-[2px] z-50 h-screen w-full overflow-y-auto text-[#6b7280] text-sm"
      @close="emit('close')"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you an email with all of
                  the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <Button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogOverlay,
} from '@headlessui/vue'
import Button from './Button.vue'

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: [String, null],
    default: 'Alert Title',
  },
  message: {
    type: [String, null],
    default: '',
  },
  wrapperWidth: {
    type: String,
    default: 'w-[500px]',
  },
  bodyClass: {
    type: String,
    default: '',
  },
  contentClass: {
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
  confirmText: {
    type: String,
    required: false,
    default: 'Confirm',
  },
  cancelText: {
    type: String,
    required: false,
    default: 'Cancel',
  },
  showCancelButton: {
    type: Boolean,
    default: true,
  },
  iconColor: {
    type: String,
    default: 'text-gray-600',
  },
})

const emit = defineEmits(['close', 'confirm'])
</script>
