<script lang="ts" setup>
import type { UseOverlayScrollbarsParams } from "overlayscrollbars-vue";
import { useOverlayScrollbars } from "overlayscrollbars-vue";
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";
import { IconClose } from "../../icons/icons";

const props = withDefaults(
  defineProps<{
    visible?: boolean;
    title?: string;
    width?: number;
    height?: string;
    fullscreen?: boolean;
    bodyClass?: string[];
    mountToBody?: boolean;
    centered?: boolean;
    layerClosable?: boolean;
  }>(),
  {
    visible: undefined,
    title: undefined,
    width: 500,
    height: undefined,
    fullscreen: false,
    bodyClass: undefined,
    mountToBody: false,
    centered: true,
    layerClosable: false,
  }
);

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
  (event: "close"): void;
}>();

const internalVisible = ref<boolean | undefined>(false);
const rootVisible = ref(false);
const modelWrapper = ref<HTMLElement>();

watch(
  () => props.visible,
  () => {
    internalVisible.value = props.visible;
  }
);

onMounted(() => {
  if (props.visible === undefined) {
    internalVisible.value = true;
  }
});

const wrapperClasses = computed(() => {
  return {
    "modal-wrapper-fullscreen": props.fullscreen,
    "modal-wrapper-centered": props.centered,
  };
});

const contentStyles = computed(() => {
  return {
    maxWidth: props.width + "px",
    height: props.height,
  };
});

function handleClose() {
  internalVisible.value = false;
  setTimeout(() => {
    emit("update:visible", false);
    emit("close");
  }, 200);
}

defineExpose({
  close: handleClose,
});

const focus = ref(false);

function handleClickLayer() {
  if (props.layerClosable) {
    handleClose();
    return;
  }
  focus.value = true;
  setTimeout(() => {
    focus.value = false;
  }, 300);
}

// body scroll
const modalBody = ref(null);
const reactiveParams = reactive<UseOverlayScrollbarsParams>({
  options: {
    scrollbars: {
      autoHide: "scroll",
      autoHideDelay: 600,
    },
  },
  defer: true,
});
const [initialize, instance] = useOverlayScrollbars(reactiveParams);
watch(
  () => internalVisible.value,
  (value) => {
    if (value) {
      if (modalBody.value) initialize({ target: modalBody.value });
      nextTick(() => {
        modelWrapper.value?.focus();
      });
    } else {
      instance()?.destroy();
    }
  }
);
</script>
<template>
  <Teleport :disabled="!mountToBody" to="body">
    <div
      v-show="rootVisible"
      ref="modelWrapper"
      :class="wrapperClasses"
      aria-modal="true"
      class="modal-wrapper"
      role="dialog"
      tabindex="0"
      v-bind="$attrs"
      @keyup.esc.stop="handleClose()"
    >
      <transition
        enter-active-class="ease-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        @before-enter="rootVisible = true"
        @after-leave="rootVisible = false"
      >
        <div
          v-show="internalVisible"
          class="modal-layer"
          @click.stop="handleClickLayer()"
        />
      </transition>
      <transition
        enter-active-class="ease-out duration-200"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-100"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="internalVisible"
          :style="contentStyles"
          class="modal-content transition-all duration-300"
          :class="{ 'modal-focus': focus }"
        >
          <div v-if="$slots.header || title" class="modal-header group">
            <slot name="header">
              <div class="modal-header-title">{{ title }}</div>
              <div v-if="$slots.center" class="modal-header-center">
                <slot name="center"></slot>
              </div>
              <div class="modal-header-actions">
                <slot name="actions"></slot>
                <span class="bg-gray-50" @click="handleClose()">
                  <IconClose />
                </span>
              </div>
            </slot>
          </div>
          <div ref="modalBody" :class="bodyClass" class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<style lang="scss">
.modal-wrapper {
  @apply fixed left-0 top-0 flex h-full w-full flex-row items-start justify-center py-10;
  z-index: 2000;

  .modal-layer {
    @apply absolute left-0 top-0 h-full w-full flex-none bg-gray-500 bg-opacity-75 transition-opacity;
  }

  .modal-content {
    @apply relative flex flex-col items-stretch rounded-base bg-white shadow-xl;
    width: calc(100vw - 20px);
    max-height: calc(100vh - 5rem);

    &.modal-focus {
      @apply scale-[1.02];
    }

    .modal-header {
      @apply flex select-none items-center justify-between border-b;
      padding: 10px 16px;

      .modal-header-title {
        @apply truncate text-base font-medium;
      }

      .modal-header-actions {
        @apply flex flex-row gap-2;
        span {
          @apply inline-flex h-7 w-7 cursor-pointer select-none items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 group-hover:hidden;
        }
      }
    }

    .modal-body {
      @apply flex-1 overflow-x-hidden overflow-y-hidden;
      word-wrap: break-word;
      padding: 12px 16px;
    }

    .modal-footer {
      @apply border-t;
      padding: 12px 16px;
    }
  }

  &.modal-wrapper-centered {
    @apply items-center py-0;
    .modal-content {
      max-height: calc(100vh - 20px) !important;
    }
  }

  &.modal-wrapper-fullscreen {
    .modal-content {
      width: 100vw !important;
      max-width: 100vw !important;
      height: 100vh !important;
      max-height: 100vh !important;
      border-radius: 0;
    }
  }
}
</style>
