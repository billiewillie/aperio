<template>
  <div id="product-3" class="section py-[60px] relative">
    <div class="container flex flex-col md:flex-row items-center justify-end">
      <div class="image md:w-[50%] xl:w-[52%] md:absolute md:left-0 md:flex justify-end">
        <nuxt-img
            src="/images/product-3-image.png"
            fit="contain"
            format="webp"
            alt=""/>
      </div>
      <div class="flex md:w-1/2 justify-center">
        <div class="flex md:max-w-[520px] flex-col gap-y-[45px] md:gap-y-[30px] lg:gap-y-[50px]">
          <h2>
            <span class="font-light text-[9.8vw] flex md:text-[39px] lg:text-[55px]">Программное обеспечение</span>
            <span class="text-[15.5vw] md:text-[61px] flex mt-[-20px] md:mt-[-30px] lg:text-[86px] font-bold">
              <span>eSlide</span> <span class="text-custom-red">Manager</span>
            </span>
          </h2>
          <ul class="flex flex-col gap-y-[20px] md:gap-y-[40px]">
            <li
                class="grid gap-x-[20px] md:gap-x-[10px] lg:gap-x-[30px] items-start grid-cols-[50px_1fr] md:grid-cols-[70px_1fr]"
                v-for="item in data"
                :key="item.id">
              <div class="flex justify-center items-center w-[50px] h-[50px] rounded-full border-2 border-[#868786]">
                <IconCheck class="w-[25px] h-[25px]"/>
              </div>
              <p class="flex-auto text-[18px]">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCheck from "~/components/icons/IconCheck.vue";

const data = ref([
  {
    id: 1,
    text: 'Просмотр, удаленное консультирование, телеконференции и архивирование случаев — в одном окне web-браузера.'
  },
  {
    id: 2,
    text: 'Получение второго мнения без загрузки изображения на сторонние ресурсы. Консультант получает доступ к случаю сразу после завершения процесса сканирования.'
  },
  {
    id: 3,
    text: 'Отсканированные изображения безопасно хранятся на отказоустойчивом сервере. Конфиденциальная информация остается в учреждении. Доступ к случаям разграничен учетными записями.'
  },
])
</script>