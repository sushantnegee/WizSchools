<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  errorMessage: String
});

const emit = defineEmits(['updateToasterClose']);

watch(() => props.show, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      emit('updateToasterClose', false);
    }, 5000);
  }
});
</script>

<template>
  <div
    v-if="props.show"
    class="error-toaster"
    :class="{'error-toaster-show': props.show}"
    role="alert"
  >
        <svg class="error-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g></svg>
    {{ props.errorMessage }}
  </div>
</template>

<style scoped>
.error-svg{
    width: 20px;
    height: 20px;
    fill: white;
}
.error-toaster {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 14px;
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.error-toaster-show {
  opacity: 1;
}
</style>
