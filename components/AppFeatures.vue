<template>
  <div class="py-[60px] xl:py-[90px]">
    <div
        class="container grid-cols-2 grid gap-x-[30px] xl:gap-x-[60px] xl:gap-y-[60px] gap-y-[40px]"
         :class="class"
    >
      <div class="feature flex flex-col items-center gap-y-[15px]" v-for="item in data" :key="item.id">
        <div class="flex items-center justify-center border border-custom-red rounded-full w-[80px] h-[80px]">
          <component :is="item.icon" class="w-[42px] h-[42px]"/>
        </div>
        <p class="text-center text-[18px] xl:text-[21px]">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
  },
  class: {
    type: String
  }
})
</script>