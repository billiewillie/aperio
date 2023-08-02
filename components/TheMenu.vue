<template>
  <ul class="nav flex flex-col lg:justify-between lg:flex-row gap-x-[30px]">
    <li class="nav-item" v-for="item in data" :key="item.id">
      <a
          :href="item.link"
          class="text-custom-gray cursor-pointer">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script setup>
const data = ref([
  {
    id: 1,
    link: "#product-1",
    text: "Сканер Aperio GT450 DX",
  },
  {
    id: 2,
    link: "#product-2",
    text: "Сканер Aperio CS 2",
  },
  {
    id: 3,
    link: "#product-3",
    text: "Программное обеспечение  eSlide Manager",
  },
  {
    id: 4,
    link: "#contacts",
    text: "Контакты",
  },
]);
</script>