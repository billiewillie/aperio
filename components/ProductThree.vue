<template>
  <div id="product-3">
    <div class="image">
      <nuxt-img
          src="/images/product-3-image.png"
          alt=""/>
    </div>
    <div class="container">
      <h1 class="title">
        <span>Программное обеспечение</span>
        <span>eSlide</span>
        <span>Manager</span>
      </h1>
      <ul class="list">
        <li class="list-item" v-for="item in data" :key="item.id">{{ item.text}}</li>
      </ul>
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