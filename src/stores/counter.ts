import { ref, computed, type Ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count: Ref<number> = ref<number>(0)
  const doubleCount: ComputedRef<number> = computed<number>(() => count.value * 2)
  
  function increment(): void {
    count.value++
  }

  return { count, doubleCount, increment }
})
