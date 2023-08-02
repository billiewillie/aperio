<template>
	<header class="header py-[15px] xl:py-[34px] relative z-10">
    <div class="container flex items-center justify-between">
      <TheLogo />
      <TheMenu />
      <div class="flex gap-x-[10px]">
        <div class="icon">
          <IconPhone />
        </div>
        <a href="tel:+74951234567">+7 (495) 123-45-67</a>
      </div>
      <div class="location">
        <select>
          <option>RUS</option>
          <option>KAZ</option>
          <option>UZB</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconPhone from "@@/components/icons/IconPhone.vue";
</script>