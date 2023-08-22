<template>
  <div class="section contact-block relative overflow-hidden bg-black py-[35px] md:py-[70px]" id="contacts">
    <div class="container">
      <div class="form-wrapper xl:w-1/2 flex justify-center">
        <div class="form-inner justify-center flex flex-col max-w-[520px] gap-y-[20px]">
          <h2 class="text-[37px] xl:text-[34px] leading-[1.2]">Оцените возможности <span class="text-[#E4001D]">сканера Aperio!</span>
          </h2>
          <p class="text-[18px] xl:text-[22px]">Заполните форму с контактными данными, и наш специалист свяжется с Вами:</p>
          <TheForm />
        </div>
      </div>
    </div>
    <div class="hidden xl:block absolute top-0 right-0 w-1/2 h-full">
      <nuxt-img
          format="webp"
          class="object-cover w-full h-full object-top"
          loading="lazy"
          src="/images/form-bg.jpg"
          alt="form"/>
    </div>
  </div>
</template>