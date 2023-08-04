<template>
  <header class="header py-[15px] xl:py-[34px] relative z-10">
    <div class="container flex items-center justify-between">
      <TheLogo/>
      <div class="flex flex-col justify-center items-center w-[40px] h-[40px] xl:hidden bg-custom-red">
        <span class="flex bg-white w-[16px] h-[2px] rounded-[20px]"></span>
        <span class="flex bg-white w-[12px] h-[2px] rounded-[20px]"></span>
        <span class="flex bg-white w-[16px] h-[2px] rounded-[20px]"></span>
      </div>
      <div class="hidden absolute xl:relative xl:flex">
        <div class="hidden xl:flex">
          <TheMenu/>
        </div>
        <div class="hidden xl:flex gap-x-[10px]">
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
import TheLocation from "~/components/TheLocation.vue";
</script>