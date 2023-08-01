<template>
  <div id="product-2">
    <div class="container">
      <h1 class="title">
        <span>Сканирующий микроскоп</span>
        <span>Aperio</span>
        <span class="text-red">GT 450 DX</span>
        <span>На</span>
        <span>30</span>
        <span>
        <span>патентов</span>
        <span>УМНЕЕ</span>
      </span>
      </h1>
      <AppButton/>
    </div>
    <div class="image">
      <nuxt-img
          src="/images/product-2-image.png"
          alt=""/>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@@/components/AppButton.vue";
</script>