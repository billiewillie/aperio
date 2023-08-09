<template>
  <header class="header py-[15px] xl:py-[34px] relative z-10">
    <div class="container flex items-center justify-between">
      <div class="w-[156px] xl:w-[196px]">
        <TheLogo/>
      </div>
      <div
          @click="clickBurger"
          class="relative flex flex-col gap-y-[3px] justify-center items-center w-[40px] h-[40px] xl:hidden bg-custom-red">
        <span
            :class="[isMenuOpen ? 'rotate-[-45deg] top-[19px]' : 'rotate-0 top-[14px]']"
            class="flex bg-white w-[16px] h-[2px] rounded-[20px] absolute right-0 left-0 m-auto transition-all origin-center"></span>
        <span
            :class="[isMenuOpen ? 'right-[5px] opacity-0' : 'right-[10px] opacity-100']"
            class="flex bg-white w-[12px] h-[2px] rounded-[20px] absolute top-0 bottom-0 m-auto transition-all"></span>
        <span
            :class="[isMenuOpen ? 'rotate-[45deg] bottom-[19px]' : 'rotate-0 bottom-[14px]']"
            class="flex bg-white w-[16px] h-[2px] rounded-[20px] absolute right-0 left-0 m-auto transition-all origin-center"></span>
      </div>
      <div
          :class="[isMenuOpen ? 'flex top-[80px]' : 'hidden top-[100px] xl:top-0 xl:flex xl:relative']"
          class="absolute left-0 py-[35px] xl:py-0 px-[10px] xl:px-0 flex-col xl:flex-row gap-y-[30px] xl:gap-x-[30px] 2xl:gap-x-[60px] bg-black w-full xl:w-auto xl:items-center">
        <div class="flex items-center justify-center">
          <TheMenu/>
        </div>
        <div class="flex gap-x-[10px] justify-center items-center">
          <div class="icon">
            <IconPhone/>
          </div>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <div class="location flex relative justify-center xl:justify-start xl:w-[45px] cursor-pointer">
          <div
              class="hidden xl:flex w-full xl:justify-between xl:items-center"
              v-click-outside="setMenuClosed"
              @click="toggleMenu">
            <span>{{ locationValue }}</span>
            <IconTriangle
                :class="[isLocationOpen ? 'rotate-[60deg]' : 'rotate-0']"
                class="w-[9px] h-[9px] origin-center transition-all"/>
          </div>
          <ul
              class="locations-dropdown absolute top-full left-0 w-full flex-col"
              :class="isLocationOpen ? 'flex' : 'hidden'">
            <li
                class="hover:underline decoration-custom-red decoration-solid underline-offset-4"
                v-for="option in locations"
                :key="option"
                @click="setLocation">
              <div
                  v-if="option !== locationValue">
                {{ option }}
              </div>
            </li>
          </ul>
          <ul class="flex xl:hidden justify-center items-center gap-x-[15px]">
            <li
                class="text-[20px]"
                :class="[option === locationValue ? 'underline decoration-custom-red decoration-solid underline-offset-4' : '']"
                :key="option"
                v-for="option in locations"
                @click="setLocation">
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import IconPhone from "@@/components/icons/IconPhone.vue";
import IconTriangle from "@@/components/icons/IconTriangle.vue";

const props = defineProps({
  locations: {
    type: Array,
  },
  locationValue: {
    type: String,
  }
});

const emit = defineEmits(['setLocation']);

const isMenuOpen = ref(false);
const isLocationOpen = ref(false);

const clickBurger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const setLocation = (e) => {
  emit('setLocation', e.target.innerText);
  toggleMenu();
  clickBurger();
}

const toggleMenu = () => {
  isLocationOpen.value = !isLocationOpen.value;
}

const setMenuClosed = () => {
  isLocationOpen.value = false;
}

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler = (event) => {
      if (!(el.contains(event.target) || el === event.target)) {
        binding.value(event);
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler);
  }
}
</script>