<template>
  <div class="bg-[#0C0C0C] py-[30px] lg:py-[90px]">
    <div class="container">
      <ul class="list flex flex-col xl:flex-row flex-wrap">
        <li
            class="list-item xl:w-1/3"
            v-for="item in data"
            :key="item.id">
          <div class="number">
            <span>{{ item.id}}</span>
          </div>
          <h2 class="title">{{ item.name}}</h2>
          <p class="description">{{ item.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const data = ref([
  {
    id: 1,
    name: "ЗАЩИЩЕННЫЙ ДОСТУП",
    description: "из любой точки мира через web-браузер. Учетную запись специалиста можно создать самостоятельно",
  },
  {
    id: 2,
    name: "ПОДРОБНАЯ ИНФОРМАЦИЯ О СЛУЧАЕ",
    description: "Доступ к описанию и фотографиям образца для полной картины случая",
  },
  {
    id: 3,
    name: "ВСЕ СТЕКЛА СЛУЧАЯ",
    description: "на привычном планшете"
  },
  {
    id: 4,
    name: "ТЕЛЕПАТОЛОГИЯ",
    description: "Оперативное получение второго мнения по сложному случаю",
  },
  {
    id: 5,
    name: "КОНФЕРЕНЦИИ ОНЛАЙН",
    description: "Все участники видят, о какой конкретно области препарата идет речь"
  },
  {
    id: 6,
    name: "ОКНО ПРОСМОТРА ПРЕПАРАТА",
    description: "Отображение маркировки стекла и карты препарата облегчают процесс навигации"
  },
  {
    id: 7,
    name: "АННОТАЦИИ",
    description: "Добавление и редактирование комментариев в один клик"
  },
  {
    id: 8,
    name: "НЕПРЕРЫВНОЕ УВЕЛИЧЕНИЕ",
    description: "и возможность вращения"
  },
  {
    id: 9,
    name: "ИНТЕРГАЦИЯ С ЛИС",
    description: "Доступ к изображению из карточки пациента",
  },
]);
</script>