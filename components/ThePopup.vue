<template>
  <div
      class="w-full justify-center items-center h-full t-0 l-0 fixed z-10"
      :class="[isVideoPlay ? 'flex' : 'hidden']">
    <div
        class="w-full h-full absolute left-0 top-0 bg-black opacity-80"
        @click="stopVideo"></div>
    <div class="video w-[90%] max-w-[900px] z-10">
<!--      <video muted playsinline loop autoplay="autoplay" ref="video">-->
<!--        <source src="@@/assets/video/video.mp4" type="video/mp4">-->
<!--        <source src="@@/assets/video/video.webm" type="video/webm">-->
<!--      </video>-->
    </div>
    <div
        class="absolute right-[40px] top-[40px] cursor-pointer w-[20px] h-[20px]"
        @click="stopVideo">
      <span class="bg-white w-[20px] h-[1px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto rotate-45"></span>
      <span class="bg-white w-[20px] h-[1px] absolute origin-center top-0 bottom-0 left-0 right-0 m-auto -rotate-45"></span>
    </div>
  </div>
</template>

<script setup>
const video = ref(null);

const props = defineProps({
  isVideoPlay: {
    type: Boolean
  }
});

const emit = defineEmits(['setVideoPlay']);

const stopVideo = () => {
  emit('setVideoPlay', false);
}

watch(() => props.isVideoPlay, () => {
  if (props.isVideoPlay) {
    video.value.play();
  } else {
    video.value.pause();
  }
})
</script>
