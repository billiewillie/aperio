<template>
  <NuxtLayout name="default" :location="locationValue">
    <template #address>
      <span>197022, Россия, Санкт-Петербург</span>
    </template>
    <template #street>
      <span>ул. Профессора Попова, д. 23, лит. Е</span>
    </template>
    <template #phone>
      <span>тел:</span> <a href="tel:+78123204949">+7 (812) 320 49 49</a>
    </template>
    <template #email>
      <span>email:</span> <a :href="`mailto:${locationValue?.email}`">{{ locationValue?.email }}</a>
    </template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

const locations = ref({
  ru: {
    country: "RUS",
    link: '/',
    address: '197022, Россия, Санкт-Петербург',
    street: 'ул. Профессора Попова, д. 23, лит. Е',
    phone: "+78123204949",
    phoneFull: "+7 (812) 320 49 49",
    email: "main@bioline.ru"
  },
});

const locationValue = ref(locations.value["ru"]);

</script>