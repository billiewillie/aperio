<template>
  <footer class="footer py-[30px]">
    <div class="container flex flex-col min-[1280px]:flex-row justify-between gap-[30px]">
      <p class="contacts">197022, Санкт-Петербург,<br>ул. Профессора Попова, д. 23, лит. Е<br>тел.: + 7 (812) 320 49 49</p>
      <TheLogo />
      <p class="about text-right">Авторизированный представитель <br> Leica Biosystems – компания «БиоЛайн»<br>© ООО «БиоЛайн», 2016 - 2023</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TheLogo from '@@/components/TheLogo.vue';
</script>