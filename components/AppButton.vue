<template>
  <button
      @click="$emit('toggleFormPopup')"
      class="text-center px-[13px] py-[13px] rounded-full border-custom-red border-[2px] text-[20px] xl:px-[35px] hover:bg-custom-red transition-colors">
    связаться с нами
  </button>
</template>

<script setup>
const emit = defineEmits(['toggleFormPopup'])
</script>