<script setup>
defineProps({
  text: { type: String, default: "Content goes here" }
});
</script>

<template>
  <div :class="$style.container">
    <span>{{ text }}</span>
  </div>
</template>

<style module>
.container {
  display: inline-block;
  font-size: 12px;
  height: 24px;
  color: blue;
  background-color: lightblue;
  padding: 0 4px;
}
</style>
