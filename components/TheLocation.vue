<template>
  <div class="location flex relative justify-center xl:justify-start xl:w-[45px] cursor-pointer">
    <div
        class="hidden xl:flex w-full xl:justify-between xl:items-center"
        v-click-outside="setMenuClosed"
        @click="toggleMenu">
      <span>{{ value }}</span>
      <IconTriangle
          :class="[isOpen ? 'rotate-[60deg]' : 'rotate-0']"
          class="w-[9px] h-[9px] origin-center transition-all"
      />
    </div>
    <ul
        class="locations-dropdown absolute top-full left-0 w-full flex-col"
        :class="isOpen ? 'flex' : 'hidden'">
      <li
          class="option"
          v-for="option in options"
          :key="option"
          @click="setLocation">
        <div
            v-if="option !== value">
          {{ option }}
        </div>
      </li>
    </ul>
    <ul class="flex xl:hidden justify-center items-center gap-x-[15px]">
      <li
          class="text-[20px]"
          :class="[option === value ? 'underline decoration-custom-red decoration-solid underline-offset-4' : '']"
          :key="option"
          v-for="option in options"
          @click="setLocation">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import IconTriangle from "~/components/icons/IconTriangle.vue";

const options = ref(["RUS", "KAZ", "UZB"]);
const value = ref(options.value[0]);
const isOpen = ref(false);

const setLocation = (e) => {
  value.value = e.target.innerText;
  toggleMenu();
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}

const setMenuClosed = () => {
  isOpen.value = false;
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
