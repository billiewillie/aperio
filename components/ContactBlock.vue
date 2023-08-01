<template>
  <div class="contact-block relative overflow-hidden bg-[#0C0C0C] py-[35px]" id="contacts">
    <div class="container">
      <div class="form-wrapper min-[1280px]:w-1/2 justify-center flex flex-col">
        <h2 class="title">Оцените возможности сканера Aperio!</h2>
        <p>Заполните форму с контактными данными, и наш специалист свяжется с Вами:</p>
        <form class="max-w-[520px] flex flex-col gap-[10px]">
          <div class="form-row">
            <input type="text">
          </div>
          <div class="form-row">
            <input type="text">
          </div>
        </form>
      </div>
    </div>
    <div class="hidden min-[1280px]:block absolute top-0 right-0 w-1/2 h-full">
      <nuxt-img
          format="webp"
          fit="contain"
          loading="lazy"
          src="/images/form-bg.jpg" alt="form"/>
    </div>
  </div>
</template>