<template>
  <div>
    <div class="container">
      <div class="card" v-for="item in data" :key="item.id">
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