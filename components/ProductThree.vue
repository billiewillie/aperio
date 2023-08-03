<template>
  <div id="product-3" class="py-[30px] lg:py-[60px]">
    <div class="container flex flex-col xl:flex-row">
      <div class="image">
        <nuxt-img
            src="/images/product-3-image.png"
            format="webp"
            alt=""/>
      </div>
      <div class="text">
        <h2 class="title">
          <span class="font-light text-[9.8vw] flex">Программное обеспечение</span>
          <span class="text-[15.5vw] font-bold">
            <span>eSlide</span> <span class="text-custom-red">Manager</span>
          </span>
        </h2>
        <ul class="flex flex-col gap-y-[30px] xl:gap-y-[60px]">
          <li
              class="grid gap-x-[45px] xl:gap-x-[70px] items-start grid-cols-[50px_1fr] xl:grid-cols-[70px_1fr]"
              v-for="item in data"
              :key="item.id"
          >
            <div class="flex justify-center items-center w-[50px] h-[50px] rounded-full border-2 border-gray-500">+</div>
            <p class="flex-auto text-[18px]">{{ item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = ref([
  {
    id: 1,
    text: 'Просмотр, удаленное консультирование, телеконференции и архивирование случаев — в одном окне web-браузера.'
  },
  {
    id: 2,
    text: 'Получение второго мнения без загрузки изображения на сторонние ресурсы. Консультант получает доступ к случаю сразу после завершения процесса сканирования.'
  },
  {
    id: 3,
    text: 'Отсканированные изображения безопасно хранятся на отказоустойчивом сервере. Конфиденциальная информация остается в учреждении. Доступ к случаям разграничен учетными записями.'
  },
])
</script>