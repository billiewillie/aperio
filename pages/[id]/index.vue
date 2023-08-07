<template>
  <NuxtLayout name="default" :location="locationValue">
    <template #address>
      <span>{{ locationValue?.address }}</span>
    </template>
    <template #street>
      <span>{{ locationValue?.street }}</span>
    </template>
    <template #phone>
      <span>тел:</span> <a :href="`tel:${locationValue?.phone}`">{{ locationValue?.phoneFull }}</a>
    </template>
  </NuxtLayout>
</template>

<script setup>
const {id} = useRoute().params;

if (id !== 'uz' && id !== 'kz') {
  clearError({
    redirect: '/404'
  })
}

definePageMeta({
  layout: false
})

const locations = ref({
  kz: {
    country: "KAZ",
    link: '/kz',
    address: '010000, Республика Казахстан, г. Астана',
    street: 'пр-т Кабанбай Батыра, д. 11/5, каб. 1206, (12 этаж), БЦ "Нурлы Орда"',
    phone: "+77172579933",
    phoneFull: "+7 (7172) 57 99 33"
  },
  uz: {
    country: "UZB",
    link: '/uz',
    address: '100015, Республика Узбекистан, г. Ташкент',
    street: 'Мирабадский р-н, ул. Нукус, д. 71, 73-75',
    phone: "+998940510036",
    phoneFull: "+9 (989) 405 100 36"
  }
});

const locationValue = ref(locations.value[id]);
</script>