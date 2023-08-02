<template>
  <div id="product-3">
    <div class="container flex flex-col lg:flex-row">
      <div class="image">
        <nuxt-img
            src="/images/product-3-image.png"
            format="webp"
            alt=""/>
      </div>
      <div class="text">
        <h2 class="title">
          <span class="font-light">Программное обеспечение</span>
          <span>eSlide</span>
          <span class="text-custom-red">Manager</span>
        </h2>
        <ul class="list">
          <li class="list-item" v-for="item in data" :key="item.id">{{ item.text}}</li>
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