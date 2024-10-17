<template>
  <button class="icon-button">
    <div v-if="showLeadingContent" class="leading-content">
      <slot name="leading-icon" />
    </div>
    <span v-if="content">{{ content }}</span>
    <div v-if="showTrailingContent" class="leading-content">
      <slot name="trailing-icon" />
    </div>
  </button>
</template>
<script setup>
const props = defineProps({
  showLeadingContent: {
    type: Boolean,
    default: false,
  },
  showTrailingContent: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
  },
});
</script>
<style scoped>
.icon-button {
  background: #e2e8f0;
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  height: 2rem;
  cursor: pointer;
  color: #334155;
  transition: background 175ms, scale 75ms;
  &:hover {
    background: #94a3b8;
    color: #0f172a;
  }
  &:active {
    scale: 0.95;
  }
}
</style>
