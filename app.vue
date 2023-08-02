<template>
  <div class="wrapper bg-black min-h-screen flex flex-col overflow-hidden">
    <ProductList/>
    <TheHeader/>
    <ProductOne/>
    <AppFeatures :data="product1Features" class="lg:grid-cols-4"/>
    <CardFeatures :data="product1CardFeatures"/>
    <ProductTwo/>
    <AppFeatures :data="product2Features" class="lg:grid-cols-3"/>
    <CardFeatures :data="product2CardFeatures"/>
    <ProductThree/>
    <AppFeatures :data="product3Features" class="lg:grid-cols-3"/>
    <Product3Image/>
    <ContactBlock/>
    <TheFooter/>
  </div>
</template>

<script setup>
import IconFeature1 from "@@/components/icons/IconFeature1.vue";
import IconFeature2 from "@@/components/icons/IconFeature2.vue";
import IconFeature3 from "@@/components/icons/IconFeature3.vue";
import IconFeature4 from "@@/components/icons/IconFeature4.vue";
import IconFeature5 from "@@/components/icons/IconFeature5.vue";
import IconFeature6 from "@@/components/icons/IconFeature6.vue";
import IconFeature7 from "@@/components/icons/IconFeature7.vue";
import IconFeature8 from "@@/components/icons/IconFeature8.vue";
import IconFeature9 from "@@/components/icons/IconFeature9.vue";
import IconFeature10 from "@@/components/icons/IconFeature10.vue";
import IconFeature11 from "@@/components/icons/IconFeature11.vue";
import IconFeature12 from "@@/components/icons/IconFeature12.vue";
import IconFeature13 from "@@/components/icons/IconFeature13.vue";
import IconFeature14 from "@@/components/icons/IconFeature14.vue";

const icons = {
  IconFeature1,
  IconFeature2,
  IconFeature3,
  IconFeature4,
  IconFeature5,
  IconFeature6,
  IconFeature7,
  IconFeature8,
  IconFeature9,
  IconFeature10,
  IconFeature11,
  IconFeature12,
  IconFeature13,
  IconFeature14
};

const product1Features = [
  {
    id: 1,
    icon: icons.IconFeature1,
    text: 'Автоматическое сканирование в режиме «поставил корзину и ушел»',
  },
  {
    id: 2,
    icon: icons.IconFeature2,
    text: 'Безостановочная загрузка корзин',
  },
  {
    id: 3,
    icon: icons.IconFeature3,
    text: 'Приоритизация случаев для сканирования'
  },
  {
    id: 4,
    icon: icons.IconFeature4,
    text: 'Вместимость до 450 стекол',
  },
  {
    id: 5,
    icon: icons.IconFeature5,
    text: 'Специальный объектив 40х от Leica',
  },
  {
    id: 6,
    icon: icons.IconFeature6,
    text: 'Время сканирования: 32 сек на 40х'
  },
  {
    id: 7,
    icon: icons.IconFeature7,
    text: 'Нечувствителен к пузырям и надписям на стекле',
  },
  {
    id: 8,
    icon: icons.IconFeature8,
    text: 'ICC профиль со 100% натуральными цветами',
  },
];

const product2Features = [
  {
    id: 1,
    icon: icons.IconFeature9,
    text: 'Компактный',
  },
  {
    id: 2,
    icon: icons.IconFeature10,
    text: 'Позволяет работать с толстыми и двойными стёклами',
  },
  {
    id: 3,
    icon: icons.IconFeature11,
    text: 'Сканирует на 20х и 40х',
  },
];

const product3Features = [
  {
    id: 1,
    icon: icons.IconFeature12,
    text: 'Получение второго мнения в сложных для интерпретации случаях',
  },
  {
    id: 2,
    icon: icons.IconFeature13,
    text: 'Доступ ко всему препарату, а не к ограниченному полю зрения',
  },
  {
    id: 3,
    icon: icons.IconFeature14,
    text: 'Отсутствует риск потерять или разбить стекло при транспортировке',
  },
];

const product1CardFeatures = [
  {
    id: 1,
    type: 'image',
    title: 'title 1',
    text: 'Современный интерфейс управления сканером, не требующий специального обучения оператора.'
  },
  {
    id: 1,
    type: 'video',
    title: 'title 1',
    text: 'Апохроматический объектив, функция Z-стэк и линейный принцип сканирования дают безупречное изображение препарата без следов сшивки и позволяют работать с толстыми стёклами.'
  },
  {
    id: 1,
    type: 'image',
    title: 'title 1',
    text: 'Легкая загрузка от 1 до 5 стекол.'
  },
];

const product2CardFeatures = [
  {
    id: 1,
    type: 'image',
    title: 'title 1',
    text: 'Современный интерфейс управления сканером, не требующий специального обучения оператора.'
  },
  {
    id: 1,
    type: 'image',
    title: 'title 1',
    text: 'Апохроматический объектив, функция Z-стэк и линейный принцип сканирования дают безупречное изображение препарата без следов сшивки и позволяют работать с толстыми стёклами.'
  },
  {
    id: 1,
    type: 'image',
    title: 'title 1',
    text: 'Легкая загрузка от 1 до 5 стекол.'
  },
];
</script>