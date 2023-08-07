<template>
  <header class="header py-[15px] xl:py-[34px] relative z-10">
    <div class="container flex items-center justify-between">
      <div class="w-[156px] xl:w-[196px]">
        <TheLogo/>
      </div>
      <div
          @click="clickBurger"
          class="relative flex flex-col gap-y-[3px] justify-center items-center w-[40px] h-[40px] xl:hidden bg-custom-red"
      >
        <span
            :class="[isOpen ? 'rotate-[-45deg] top-[19px]' : 'rotate-0 top-[14px]']"
            class="flex bg-white w-[16px] h-[2px] rounded-[20px] absolute right-0 left-0 m-auto transition-all origin-center"
        ></span>
        <span
            :class="[isOpen ? 'right-[5px] opacity-0' : 'right-[10px] opacity-100']"
            class="flex bg-white w-[12px] h-[2px] rounded-[20px] absolute top-0 bottom-0 m-auto transition-all"
        ></span>
        <span
            :class="[isOpen ? 'rotate-[45deg] bottom-[19px]' : 'rotate-0 bottom-[14px]']"
            class="flex bg-white w-[16px] h-[2px] rounded-[20px] absolute right-0 left-0 m-auto transition-all origin-center"
        ></span>
      </div>
      <div
          :class="[isOpen ? 'flex top-[80px]' : 'hidden top-[100px] xl:top-0 xl:flex xl:relative']"
          class="absolute left-0 py-[35px] xl:py-0 px-[10px] flex-col xl:flex-row gap-y-[30px] 2xl:gap-x-[60px] bg-black w-full xl:w-auto xl:items-center">
        <div class="flex items-center justify-center">
          <TheMenu/>
        </div>
        <div class="flex gap-x-[10px] justify-center">
          <div class="icon">
            <IconPhone/>
          </div>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <TheLocation/>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconPhone from "@@/components/icons/IconPhone.vue";

const isOpen = ref(false);
const clickBurger = () => {
  isOpen.value = !isOpen.value;
}
</script>