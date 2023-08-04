<template>
  <div class="location hidden xl:flex relative">
    <span v-click-outside="setMenuClosed" @click="toggleMenu">{{ value }}</span>
    <ul
        class="locations-dropdown absolute top-full left-0 w-full xl:flex-col"
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
</template>

<script setup>
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
