<template>
  <div class="h-full">
    <div class="p-10 text-center max-w-xl mx-auto">
      <p class="mb-10 font-bold text-green">
        Vue3(composition) + TS + Vite + Pinia + Tailwind(windicss)
      </p>

      <div class="mb-10">
        {{ counterState }}
      </div>

      <div class="flex justify-between gap-4">
        <button
          class="
            rounded-xl
            border border-green
            px-5
            py-3
            font-bold
            hover:bg-green hover:text-white
            transition
            duration-300
          "
          @click="increaseCounterHandler"
        >
          Increase Counter
        </button>

        <button
          class="
            rounded-xl
            border border-green
            px-5
            py-3
            font-bold
            hover:bg-green hover:text-white
            transition
            duration-300
          "
          @click="decreaseCounterHandler"
        >
          Decrease Counter
        </button>

        <button
          class="
            rounded-xl
            border border-green
            px-5
            py-3
            font-bold
            hover:bg-green hover:text-white
            transition
            duration-300
          "
          @click="clearCounterHandler"
        >
          Clear Counter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()
const counterState = computed(() => counterStore.getCounterValue)

const increaseCounterHandler = () => {
  counterStore.increaseCounter(4)
}

const decreaseCounterHandler = () => {
  counterStore.decreaseCounter(4)
}

const clearCounterHandler = () => {
  counterStore.clearCounter()
}
</script>


