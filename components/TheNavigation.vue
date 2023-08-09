<template>
  <div class="fixed h-[240px] top-0 bottom-0 m-auto right-[30px] none xl:flex flex-col justify-between items-center">
    <a
        class="rounded-full w-[10px] h-[10px] transition-colors hover:bg-custom-red"
        :class="currentSection === link ? 'bg-custom-red' : 'bg-custom-gray'"
        :href="`#${link}`"
        v-for="link in links"
        :key="link"></a>
  </div>
</template>

<script setup>
const props = defineProps({
  currentSection: {
    type: String,
  }
})
const links = ref([
  'product-1', "product-2", "product-3", "contacts"
])

</script>