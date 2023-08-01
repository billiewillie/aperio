<template>
	<header class="header py-[15px] min-[1280px]:py-[34px]">
    <div class="container min-[1280px]:justify-between">
      <TheLogo />
      <TheMenu />
      <div class="phone">
        <div class="icon">icon</div>
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

<script setup lang="ts">
import TheLogo from '@@/components/TheLogo.vue'
</script>