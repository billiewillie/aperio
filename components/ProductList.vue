<template>
  <div class="bg-[#0C0C0C] py-[30px] xl:py-[90px]">
    <div class="container">
      <ul class="grid grid-cols-1 xl:grid-cols-3 gap-[40px] xl:gap-[70px]">
        <li
            class="grid grid-cols-[50px_1fr] xl:grid-cols-[70px_1fr] grid-rows-[auto_1fr] gap-x-[40px] gap-y-[10px] xl:gap-y-[20px]"
            v-for="item in data"
            :key="item.id">
          <div class="number row-span-2">
            <span class="flex bg-black justify-center items-center border-2 border-custom-red rounded-full w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] text-[20px] xl:text-[26px]">
              {{ item.id}}
            </span>
          </div>
          <h2 class="font-bold text-[20px] xl:text-[24px]">{{ item.name}}</h2>
          <p class="text-[18px] xl:text-[21px]">{{ item.description}}</p>
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
    description: "из любой точки мира через web-браузер. Учетную запись специалиста можно создать самостоятельно",
  },
  {
    id: 2,
    name: "ПОДРОБНАЯ ИНФОРМАЦИЯ О СЛУЧАЕ",
    description: "Доступ к описанию и фотографиям образца для полной картины случая",
  },
  {
    id: 3,
    name: "ВСЕ СТЕКЛА СЛУЧАЯ",
    description: "на привычном планшете"
  },
  {
    id: 4,
    name: "ТЕЛЕПАТОЛОГИЯ",
    description: "Оперативное получение второго мнения по сложному случаю",
  },
  {
    id: 5,
    name: "КОНФЕРЕНЦИИ ОНЛАЙН",
    description: "Все участники видят, о какой конкретно области препарата идет речь"
  },
  {
    id: 6,
    name: "ОКНО ПРОСМОТРА ПРЕПАРАТА",
    description: "Отображение маркировки стекла и карты препарата облегчают процесс навигации"
  },
  {
    id: 7,
    name: "АННОТАЦИИ",
    description: "Добавление и редактирование комментариев в один клик"
  },
  {
    id: 8,
    name: "НЕПРЕРЫВНОЕ УВЕЛИЧЕНИЕ",
    description: "и возможность вращения изображения на 360°"
  },
  {
    id: 9,
    name: "ИНТЕРГАЦИЯ С ЛИС",
    description: "Доступ к изображению из карточки пациента",
  },
]);
</script>