<template>
  <transition name="fade">
    <button
        @click="setTop"
        :class="[scY > 300 ? 'opacity-100 bottom-[50px]' : 'opacity-0 -bottom-[50px]']"
        class="fixed justify-center items-center flex xl:hidden right-[10px] w-[40px] h-[40px] bg-custom-red z-10 transition-all">
      <IconTriangle color="white" :style="style"/>
    </button>
  </transition>
</template>

<script setup>
import IconTriangle from "@@/components/icons/IconTriangle.vue";

const scTimer = ref(0);
const scY = ref(0);
const style = ref('rotate-[60deg] origin-center w-[25px] h-[25px] absolute left-[5px] top-[12px]');

const setTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})
</script>