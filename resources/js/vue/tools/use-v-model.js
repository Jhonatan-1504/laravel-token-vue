import { computed, ref, watch } from "vue"

export const KEY_EMIT_UPDATE = "update:modelValue"

/**
 * 
 * @param {()=>any} callbackProp 
 * @param {()=>void} emit 
 * @returns 
 */
export const useVModel = (callbackProp, emits) => {
  if (callbackProp && typeof (callbackProp) !== "function") throw new Error("callbackProp no defined")

  const model = ref(callbackProp() ?? "")
  const modelComputed = computed(() => callbackProp())

  watch(modelComputed, newValue => { model.value = newValue })

  function onInput(ev) { emits(KEY_EMIT_UPDATE, ev.target.value) }
  function onChange(ev) { emits(KEY_EMIT_UPDATE, ev.target.value) }
  function setModel(newValue) { emits(KEY_EMIT_UPDATE, newValue) }

  return {
    model,
    onInput,
    onChange,
    setModel
  }
}