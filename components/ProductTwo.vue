<template>
  <div id="product-2" class="py-[20px] flex flex-col lg:flex-row lg:py-[270px] relative">
    <div class="container flex flex-col xl:flex-row items-center">
      <div class="flex flex-col gap-y-[50px] lg:w-[480px] lg:items-start">
        <h2 class="title flex flex-col">
          <span class="text-[10.3vw] font-light leading-[1] text-justify lg:text-[52px] whitespace-nowrap">Сканирующий микроскоп</span>
          <span class="font-bold text-[22vw] leading-[1] lg:text-[112px] whitespace-nowrap">
            <span>Aperio</span>&nbsp;<span class="text-custom-red">CS2</span>
          </span>
          <span class="text-[12vw] font-light lg:text-[60px]">для второго мнения и</span>
          <span class="text-[16vw] font-bold leading-[1] lg:text-[78px] text-custom-red">телемедицины</span>
        </h2>
        <AppButton/>
      </div>
    </div>
    <div class="image lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:margin-auto lg:w-2/3">
      <nuxt-img
          src="/images/product-2-image.png"
          class="object-right object-contain h-full w-full"
          loading="lazy"
          format="webp"
          alt="product-2"/>
    </div>
  </div>
</template>