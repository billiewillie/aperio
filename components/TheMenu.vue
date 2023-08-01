<template>
  <ul class="nav flex flex-col min-[1280px]:justify-between min-[1280px]:flex-row">
    <li class="nav-item" v-for="item in data" :key="item.id">
      <a :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script setup>
const data = ref([
  {
    id: 1,
    link: "#",
    text: "Сканер Aperio GT450 DX",
  },
  {
    id: 2,
    link: "#",
    text: "Сканер Aperio CS 2",
  },
  {
    id: 3,
    link: "#",
    text: "Программное обеспечение  eSlide Manager",
  },
  {
    id: 4,
    link: "#contacts",
    text: "Контакты",
  },
]);
</script>