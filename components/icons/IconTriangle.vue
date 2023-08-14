<template>
  <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 46 46"
      style="enable-background:new 0 0 46 46;"
      :class="style"
      xml:space="preserve">
    <g>
      <polygon
          :style="`fill: ${color};`"
          points="46,3.004 0,3 23.002,43"/>
    </g>
  </svg>
</template>

<script setup>
  defineProps({
    color: {
      type: String,
      default: '#E4001D'
    },
    style: {
      type: String,
      default: ''
    }
  })
</script>