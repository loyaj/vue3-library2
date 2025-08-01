import { ref, watch } from "vue";

export function useInternalValue(propRef, onUpdate) {
  const internalValue = ref(propRef.value);

  if (onUpdate !== undefined) {
    watch(internalValue, onUpdate);
  }
  watch(propRef, newVal => {
    internalValue.value = newVal;
  });

  return internalValue;
}
