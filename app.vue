<template>
  <div class="wrapper bg-black min-h-screen flex flex-col">
    <TheHeader/>
    <ProductOne/>
    <AppFeatures :data="product1Features"/>
    <CardFeatures :data="product1CardFeatures"/>
    <ProductTwo/>
    <AppFeatures :data="product2Features"/>
    <CardFeatures :data="product2CardFeatures"/>
    <ProductThree/>
    <AppFeatures :data="product3Features"/>
    <Product3Image/>
    <ProductList/>
    <ContactBlock/>
    <TheFooter/>
  </div>
</template>

<script setup>
const product1Features = [
  {
    id: 1,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 2,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 3,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 4,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 5,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 6,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 7,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 8,
    text: 'Сканер Aperio GT450 DX',
  },
];

const product2Features = [
  {
    id: 1,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 2,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 3,
    text: 'Сканер Aperio GT450 DX',
  },
];

const product3Features = [
  {
    id: 1,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 2,
    text: 'Сканер Aperio GT450 DX',
  },
  {
    id: 3,
    text: 'Сканер Aperio GT450 DX',
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