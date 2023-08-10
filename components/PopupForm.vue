<template>
  <div
      class="w-full justify-center items-center h-full t-0 l-0 fixed z-10"
      :class="[isFormOpen ? 'flex' : 'hidden']">
    <div
        class="w-full h-full absolute left-0 top-0 bg-black opacity-80"
        @click="$emit('toggleFormPopup')"></div>
    <TheForm />
    <div
        class="absolute right-[40px] top-[40px] cursor-pointer w-[20px] h-[20px]"
        @click="$emit('toggleFormPopup')">
      <span class="bg-white w-[20px] h-[1px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span>
      <span class="bg-white w-[20px] h-[1px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isFormOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggleFormPopup'])

</script>
