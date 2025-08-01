<script setup lang="ts">
import {ref, toRef } from "vue";
import { useInternalValue } from "@/composables/internalValue.js";

const props = defineProps({
  text: { type: String, default: "Content goes here" },
  fontSize: { type: Number, default: 14 },
});
const emit = defineEmits(['update:text'])
const internalText = useInternalValue(toRef(props, 'text'), val => emit('update:text', val));
const clickCount = ref(0);
function handleClick() {
  clickCount.value++;
  internalText.value = internalText.value + clickCount.value;
}
</script>

<template>
  <div :class="$style.container" @click="handleClick">
    <slot :clickCount="clickCount">
      <span>{{ text }}</span>
    </slot>
  </div>
</template>

<style module>
.container {
  display: inline-block;
  font-size: v-bind(fontSize + "px");
  height: 30px;
  color: red;
  background-color: pink;
  padding: 0 8px;
  border-radius: 4px;
}
</style>
