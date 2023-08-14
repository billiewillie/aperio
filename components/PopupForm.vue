<template>
  <div
      class="w-full justify-center items-center h-full t-0 l-0 fixed z-20"
      :class="[isFormOpen ? 'flex' : 'hidden']">
    <div
        class="w-full h-full absolute left-0 top-0 bg-black xl:opacity-80"
        @click="$emit('toggleFormPopup')"></div>
    <div class="bg-black z-10 p-[10px] flex flex-col gap-y-[20px] max-w-[580px] max-h-[85%] overflow-y-scroll">
      <p class="text-[18px] xl:text-[22px]">Заполните форму с контактными данными, и наш специалист свяжется с Вами:</p>
      <TheForm/>
    </div>
    <div
        class="absolute right-[10px] top-[10px] cursor-pointer w-[30px] h-[30px] z-50"
        @click="$emit('toggleFormPopup')">
      <span
          class="bg-white w-[30px] h-[2px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span>
      <span
          class="bg-white w-[30px] h-[2px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isFormOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggleFormPopup'])
</script>
