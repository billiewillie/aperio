<template>
  <div>
    <div class="container">
      <div class="feature" v-for="item in data" :key="item.id">
        <div class="icon">icon</div>
        <p class="text">{{ item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
  }
})
</script>