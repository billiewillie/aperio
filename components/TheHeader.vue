<script setup>
import IconPhone from "@@/components/icons/IconPhone.vue";

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

<template>
  <header class="header py-[15px] xl:py-[34px] relative z-10">
    <div class="container flex items-center justify-between">
      <TheLogo/>
      <div class="hidden xl:flex">
        <TheMenu/>
      </div>
      <div class="hidden xl:flex gap-x-[10px]">
        <div class="icon">
          <IconPhone/>
        </div>
        <a href="tel:+74951234567">+7 (495) 123-45-67</a>
      </div>
      <div class="location hidden xl:flex relative">
        <span v-click-outside="setMenuClosed" @click="toggleMenu">{{ value }}</span>
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
      </div>
    </div>
  </header>
</template>

