<template>
  <div class="wrapper bg-black min-h-screen flex flex-col overflow-hidden justify-between">
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
            :class="[isMenuOpen ? 'flex top-[80px] xl:top-0' : 'hidden top-[100px] xl:top-0 xl:flex xl:relative']"
            class="absolute xl:relative left-0 py-[35px] xl:py-0 px-[10px] xl:px-0 flex-col xl:flex-row gap-y-[30px] xl:gap-x-[30px] 2xl:gap-x-[60px] bg-black w-full xl:w-auto items-center">
          <div class="flex items-center justify-center">
            <TheMenu @clickBurger="clickBurger"/>
          </div>
          <div class="flex items-center justify-between w-[205px] xl:w-auto xl:gap-x-[10px]">
            <div class="w-[25px] h-[25px]">
              <IconPhone/>
            </div>
            <slot name="phone"/>
          </div>
          <div class="flex xl:hidden items-center justify-between w-[205px]">
            <div class="w-[25px] h-[25px]">
              <IconEmail/>
            </div>
            <slot name="email"/>
          </div>
          <div class="location flex relative justify-center xl:justify-start xl:w-[45px] cursor-pointer">
            <div
                class="hidden xl:flex w-full xl:justify-between xl:items-center"
                v-click-outside="setMenuClosed"
                @click="toggleMenu">
              <span>{{ location.country }}</span>
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
                <div v-if="option.country !== location.country">
                  {{ option.country }}
                </div>
              </li>
            </ul>
            <ul class="flex xl:hidden justify-center items-center gap-x-[15px]">
              <li
                  class="text-[20px]"
                  :class="[option.country === location.country ? 'underline decoration-custom-red decoration-solid underline-offset-4' : '']"
                  :key="option"
                  v-for="option in locations"
                  @click="setLocation">
                {{ option.country }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div id="product-1" class="section py-[40px] md:py-[70px] lg:py-[90px]">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
          <nuxt-img
              src="/images/product-1-image.png"
              class="scale-150 md:scale-1"
              format="webp"
              quality="100"
              alt="product-1"/>
        </div>
        <div class="flex justify-center md:w-1/2">
          <div class="flex flex-col gap-y-[50px] md:gap-y-[20px] lg:gap-y-[50px] md:items-end md:max-w-[500px]">
            <h1 class="title flex flex-col">
              <span class="text-[10.3vw] font-light leading-[1] text-justify md:text-[35px] lg:text-[53px] whitespace-nowrap">Сканирующий микроскоп</span>
              <span class="font-bold text-[13.8vw] leading-[1] mb-[15px] md:text-[47px] lg:text-[70px] whitespace-nowrap">
              <span>Aperio</span>&nbsp;<span class="text-custom-red">GT&nbsp;450&nbsp;DX</span>
            </span>
              <span class="flex justify-between leading-[1]">
              <span class="text-[13vw] font-light md:text-[50px] lg:text-[70px]">На</span>&nbsp;
              <span class="font-bold text-[30vw] leading-[0.9] md:text-[125px] lg:text-[175px]">30</span>&nbsp;
              <span class="flex flex-col font-light">
                <span class="text-[13vw] md:text-[47px] lg:text-[70px]">патентов</span>
                <span class="text-custom-red text-[15vw] md:text-[55px] lg:text-[83px]">УМНЕЕ</span>
              </span>
            </span>
            </h1>
            <AppButton @toggleFormPopup="toggleFormPopup"/>
          </div>
        </div>
      </div>
    </div>
    <AppFeatures :data="product1Features" class="lg:grid-cols-4"/>
    <CardFeatures :data="product1CardFeatures" @setVideoPlay="setVideoPlay"/>
    <div id="product-2" class="section py-[20px] flex flex-col xl:flex-row md:py-[70px] xl:py-[180px] relative">
      <div class="md:absolute md:order-2 md:left-[40%] md:top-0 md:bottom-0 md:margin-auto md:w-2/3">
        <nuxt-img
            src="/images/product-2-image.png"
            class="object-left object-contain h-full w-full"
            loading="lazy"
            format="webp"
            alt="product-2"/>
      </div>
      <div class="container md:order-1 flex flex-col md:flex-row items-center">
        <div class="flex justify-center md:w-1/2">
          <div class="flex flex-col gap-y-[50px] md:gap-y-[20px] lg:gap-y-[50px] md:max-w-[480px] md:items-start">
            <h2 class="title flex flex-col">
              <span class="text-[10.3vw] font-light leading-[1] text-justify md:text-[40px] xl:text-[52px] whitespace-nowrap">Сканирующий микроскоп</span>
              <span class="font-bold text-[22vw] leading-[1] md:text-[87px] xl:text-[112px] whitespace-nowrap">
                <span>Aperio</span>&nbsp;<span class="text-custom-red">CS2</span>
              </span>
              <span class="text-[12vw] font-light md:text-[46px] xl:text-[60px]">для второго мнения и</span>
              <span class="text-[16vw] font-bold leading-[1] md:text-[61px] xl:text-[78px] text-custom-red">телемедицины</span>
            </h2>
            <AppButton @toggleFormPopup="toggleFormPopup"/>
          </div>
        </div>
      </div>
    </div>
    <AppFeatures :data="product2Features" class="lg:grid-cols-3"/>
    <CardFeatures :data="product2CardFeatures"/>
    <ProductThree/>
    <AppFeatures :data="product3Features" class="lg:grid-cols-3"/>
    <Product3Image/>
    <ProductList/>
    <ContactBlock :location="locationValue"/>
    <footer id="footer" class="footer py-[30px]">
      <div class="container flex flex-col md:flex-row justify-between gap-[30px]">
        <p class="md:w-1/3 text-[#868786] md:text-[14px] lg:text-[18px]">
          <slot name="address"/>
          <br>
          <slot name="street"/>
          <br>
          <slot name="phone"/>
          <br>
          <slot name="email"/>
        </p>
        <div class="flex md:w-1/3 w-[202px] self-center md:self-start justify-center">
          <TheLogo/>
        </div>
        <p class="md:w-1/3 text-[#868786] text-right md:text-[14px] lg:text-[18px]">Авторизированный представитель
          <br> Leica Biosystems – компания «БиоЛайн»
          <br>© ООО «БиоЛайн», 2016 - 2023
        </p>
      </div>
    </footer>
    <ThePopup :isVideoPlay="isVideoPlay" @setVideoPlay="setVideoPlay"/>
    <TheNavigation :currentSection="currentSection"/>
    <PopupForm :isFormOpen="isFormOpen" @toggleFormPopup="toggleFormPopup"/>
    <ButtonUp/>
  </div>
</template>

<script setup>
import IconFeature1 from "@@/components/icons/IconFeature1.vue";
import IconFeature2 from "@@/components/icons/IconFeature2.vue";
import IconFeature3 from "@@/components/icons/IconFeature3.vue";
import IconFeature4 from "@@/components/icons/IconFeature4.vue";
import IconFeature5 from "@@/components/icons/IconFeature5.vue";
import IconFeature6 from "@@/components/icons/IconFeature6.vue";
import IconFeature7 from "@@/components/icons/IconFeature7.vue";
import IconFeature8 from "@@/components/icons/IconFeature8.vue";
import IconFeature9 from "@@/components/icons/IconFeature9.vue";
import IconFeature10 from "@@/components/icons/IconFeature10.vue";
import IconFeature11 from "@@/components/icons/IconFeature11.vue";
import IconFeature12 from "@@/components/icons/IconFeature12.vue";
import IconFeature13 from "@@/components/icons/IconFeature13.vue";
import IconFeature14 from "@@/components/icons/IconFeature14.vue";
import IconPhone from "@@/components/icons/IconPhone.vue";
import IconTriangle from "@@/components/icons/IconTriangle.vue";
import ThePopup from "@@/components/ThePopup.vue";
import PopupForm from "@@/components/PopupForm.vue";
import IconEmail from "@@/components/icons/IconEmail.vue";

const locations = ref({
  RUS: {
    country: "RUS",
    link: '/',
    address: '197022, Россия, Санкт-Петербург',
    street: 'ул. Профессора Попова, д. 23, лит. Е',
    phone: "+78123204949",
    phoneFull: "+7 (812) 320 49 49",
    email: "main@bioline.ru"
  },
  KAZ: {
    country: "KAZ",
    link: '/kz',
    address: '010000, Республика Казахстан, г. Астана',
    street: 'пр-т Кабанбай Батыра, д. 11/5, каб. 1206, (12 этаж), БЦ "Нурлы Орда"',
    phone: "+77172579933",
    phoneFull: "+7 (7172) 57 99 33",
    email: "main@bioline.ru"
  },
  UZB: {
    country: "UZB",
    link: '/uz',
    address: '100015, Республика Узбекистан, г. Ташкент',
    street: 'Мирабадский р-н, ул. Нукус, д. 71, 73-75',
    phone: "+998555080241",
    phoneFull: "+9 (985) 550 802 41",
    email: "main@bioline.ru"
  }
});

const locationValue = ref(locations.value["RUS"]);

const isMenuOpen = ref(false);
const isLocationOpen = ref(false);
const isFormOpen = ref(false);

const toggleFormPopup = () => {
  isFormOpen.value = !isFormOpen.value;
};

const props = defineProps({
  location: {
    type: Object,
  }
});

const setLocation = (e) => {
  toggleMenu();
  return navigateTo(locations.value[e.target.innerText].link);
};

const icons = {
  IconFeature1,
  IconFeature2,
  IconFeature3,
  IconFeature4,
  IconFeature5,
  IconFeature6,
  IconFeature7,
  IconFeature8,
  IconFeature9,
  IconFeature10,
  IconFeature11,
  IconFeature12,
  IconFeature13,
  IconFeature14
};

const product1Features = [
  {
    id: 1,
    icon: icons.IconFeature1,
    text: 'Автоматическое сканирование в режиме «поставил корзину и ушел»',
  },
  {
    id: 2,
    icon: icons.IconFeature2,
    text: 'Безостановочная загрузка корзин',
  },
  {
    id: 3,
    icon: icons.IconFeature3,
    text: 'Приоритизация случаев для сканирования'
  },
  {
    id: 4,
    icon: icons.IconFeature4,
    text: 'Вместимость до 450 стекол',
  },
  {
    id: 5,
    icon: icons.IconFeature5,
    text: 'Специальный объектив 40х от Leica',
  },
  {
    id: 6,
    icon: icons.IconFeature6,
    text: 'Время сканирования: 32 сек на 40х'
  },
  {
    id: 7,
    icon: icons.IconFeature7,
    text: 'Нечувствителен к пузырям и надписям на стекле',
  },
  {
    id: 8,
    icon: icons.IconFeature8,
    text: 'ICC профиль со 100% натуральными цветами',
  },
];

const product2Features = [
  {
    id: 1,
    icon: icons.IconFeature9,
    text: 'Компактный',
  },
  {
    id: 2,
    icon: icons.IconFeature10,
    text: 'Позволяет работать с толстыми и двойными стёклами',
  },
  {
    id: 3,
    icon: icons.IconFeature11,
    text: 'Сканирует на 20х и 40х',
  },
];

const product3Features = [
  {
    id: 1,
    icon: icons.IconFeature12,
    text: 'Получение второго мнения в сложных для интерпретации случаях',
  },
  {
    id: 2,
    icon: icons.IconFeature13,
    text: 'Доступ ко всему препарату, а не к ограниченному полю зрения',
  },
  {
    id: 3,
    icon: icons.IconFeature14,
    text: 'Отсутствует риск потерять или разбить стекло при транспортировке',
  },
];

const product1CardFeatures = [
  {
    id: 1,
    type: 'image',
    video: '',
    cover: '/images/card-1-image.jpg',
    title: 'открытый дизайн',
    text: 'Открытый дизайн Aperio GT450 DX для безостановочной загрузки кассет со стёклами. Работа без управляющей рабочей станции. Максимальная продуктивность.'
  },
  {
    id: 1,
    type: 'video',
    video: '/video.webm',
    cover: '/images/card-2-image.jpg',
    title: 'специальный объектив 40x',
    text: 'Специально разработанный Leica Microsystems апохроматический объектив, оптимизированный для высокоскоростного сканирования, с увеличенным до 1 мм полем зрения.'
  },
  {
    id: 1,
    type: 'image',
    video: '',
    cover: '/images/card-3-image.jpg',
    title: 'идеальная цветопередача',
    text: 'Динамическая фокусировка по всему препарату и калибровка сканера на каждом стекле. Автоматический контроль качества произведёт проверку по результатам сканирования. Патоморфолог точно получит качественные изображения.'
  },
];

const product2CardFeatures = [
  {
    id: 1,
    type: 'image',
    video: '',
    cover: '/images/card-4-image.jpg',
    title: 'легкость в управлении',
    text: 'Современный интерфейс управления сканером, не требующий специального обучения оператора.'
  },
  {
    id: 1,
    type: 'image',
    video: '',
    cover: '/images/card-5-image.jpg',
    title: 'универсальность',
    text: 'Апохроматический объектив, функция Z - стэк и линейный принцип сканирования дают безупречное изображение препарата без следов сшивки и позволяют работать с толстыми стёклами.'
  },
  {
    id: 1,
    type: 'image',
    video: '',
    cover: '/images/card-6-image.jpg',
    title: 'быстрая загрузка',
    text: 'Лёгкая загрузка от 1 до 5 стекол.'
  },
];

const clickBurger = () => {
  isMenuOpen.value = !isMenuOpen.value;
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

const isVideoPlay = ref(false);

const setVideoPlay = (bool) => {
  isVideoPlay.value = bool;
}

const currentSection = ref('product-1');

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id');
        isMenuOpen.value = false;
      }
    })
  });

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  })
})
</script>