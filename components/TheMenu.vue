<template>
  <ul class="nav flex flex-col items-center xl:justify-between xl:flex-row gap-x-[20px] 2xl:gap-x-[30px] gap-y-[20px]">
    <li class="nav-item" v-for="item in data" :key="item.id">
      <a :href="item.link"
         @click="emit('clickBurger')"
         class="text-custom-gray cursor-pointer text-[18px] hover:text-white transition-colors"
         :class="{[`underline decoration-[#E4001D] underline-offset-4 text-white`]: item.id === 1}">
        {{ item.text }} <b v-if="item.product.length > 0">{{ item.product }}</b>
      </a>
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(['clickBurger'])
const data = ref([
  {
    id: 1,
    link: "#product-1",
    text: "",
    product: "Aperio GT 450 DX"
  },
  {
    id: 2,
    link: "#product-2",
    text: "",
    product: "Aperio CS2"

  },
  {
    id: 3,
    link: "#product-3",
    text: "Программное обеспечение",
    product: "eSlide Manager"

  },
  {
    id: 4,
    link: "#footer",
    text: "Контакты",
    product: ""
  },
]);
</script>