<template>
  <div class="bg-[#0C0C0C] py-[40px] xl:py-[90px] rounded-[3px] shadow-[0_0_12px_0_rgba(0,0,0,0.18]">
    <div class="container grid grid-cols-1 xl:grid-cols-3 gap-[30px]">
      <div class="bg-black rounded-[3px] overflow-hidden" v-for="item in data" :key="item.id">
        <nuxt-img
            :src="item.cover"
            format="webp"
            class="object-cover aspect-[3/2] w-full"
        />
        <div class="flex flex-col p-[20px] xl:p-[30px] gap-y-[15px]">
          <h2 class="font-bold border-b border-custom-red pb-[15px] text-[20px] xl:text-[24px]">{{ item.title }}</h2>
          <p class="text-white text-[18px] xl:text-[21px] leading-[1.3]">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
  }
})
</script>