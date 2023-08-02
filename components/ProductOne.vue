<template>
  <div id="product-1" class="py-[20px]">
    <div class="container flex flex-col xl:flex-row items-center">
      <div class="image ">
        <nuxt-img
            src="/images/product-1-image.png"
            class="scale-150 lg:scale-1"
            format="webp"
            quality="100"
            alt="product-1"/>
      </div>
      <div class="flex flex-col gap-y-[50px] lg:items-end">
        <h1 class="title flex flex-col">
          <span class="text-[10.3vw] font-light leading-[1] text-justify lg:text-[53px] whitespace-nowrap">Сканирующий микроскоп</span>
          <span class="font-bold text-[13.8vw] leading-[1] mb-[15px] lg:text-[70px] whitespace-nowrap">
          <span>Aperio</span>&nbsp;<span class="text-custom-red">GT&nbsp;450&nbsp;DX</span>
        </span>
          <span class="flex justify-between leading-[1]">
          <span class="text-[13vw] font-light lg:text-[70px]">На</span>&nbsp;
          <span class="font-bold text-[30vw] leading-[0.9] lg:text-[175px]">30</span>&nbsp;
          <span class="flex flex-col font-light">
            <span class="text-[13vw] lg:text-[70px]">патентов</span>
            <span class="text-custom-red text-[15vw] lg:text-[83px]">УМНЕЕ</span>
          </span>
        </span>
        </h1>
        <AppButton/>
      </div>
    </div>
  </div>
</template>