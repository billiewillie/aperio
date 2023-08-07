<template>
  <div id="product-2" class="py-[20px] flex flex-col xl:flex-row xl:py-[90px] relative">
    <div class="xl:absolute xl:order-2 xl:right-0 xl:top-0 xl:bottom-0 xl:margin-auto xl:w-1/2">
      <nuxt-img
          src="/images/product-2-image.png"
          class="object-left object-contain h-full w-full"
          loading="lazy"
          format="webp"
          alt="product-2"/>
    </div>
    <div class="container xl:order-1 flex flex-col xl:flex-row items-center">
      <div class="flex justify-center xl:w-1/2">
        <div class="flex flex-col gap-y-[50px] xl:w-[480px] xl:items-start">
          <h2 class="title flex flex-col">
            <span class="text-[10.3vw] font-light leading-[1] text-justify xl:text-[52px] whitespace-nowrap">Сканирующий микроскоп</span>
            <span class="font-bold text-[22vw] leading-[1] xl:text-[112px] whitespace-nowrap">
            <span>Aperio</span>&nbsp;<span class="text-custom-red">CS2</span>
          </span>
            <span class="text-[12vw] font-light xl:text-[60px]">для второго мнения и</span>
            <span class="text-[16vw] font-bold leading-[1] xl:text-[78px] text-custom-red">телемедицины</span>
          </h2>
          <AppButton/>
        </div>
      </div>
    </div>
  </div>
</template>