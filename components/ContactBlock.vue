<template>
  <div class="contact-block relative overflow-hidden bg-[#0C0C0C] py-[35px]" id="contacts">
    <div class="container">
      <div class="form-wrapper xl:w-1/2 justify-center flex flex-col">
        <h2 class="title">Оцените возможности</h2>
        <p>Заполните форму с контактными данными, и наш специалист свяжется с Вами:</p>
        <FormKit
            type="form"
            submit-label="Связаться с нами"
            class="max-w-[520px] flex flex-col gap-[10px]"
            incomplete-message="Пожалуйста, заполните все поля">
          <FormKit
              type="text"
              placeholder="ФИО"
              validation="required|min:5"
              :validation-messages="{
                required: 'Как вас зовут?',
                min: 'Минимум 5 символов'
              }"/>
          <FormKit
              type="text"
              placeholder="Телефон"
              validation="required|min:10"
              :validation-messages="{
                required: 'Укажите ваш номер телефона?',
                min: 'Минимум 10 символов'
              }"/>
          <FormKit
              type="email"
              placeholder="E-mail"
              validation="required|email"
              :validation-messages="{
                email: 'Укажите ваш e-mail'
              }"/>
          <FormKit
              type="text"
              placeholder="Город"
              validation="required"
              :validation-messages="{
                required: 'Укажите ваш город'
              }"/>
          <FormKit
              type="text"
              placeholder="Место работы"
              validation="required"
              :validation-messages="{
                required: 'Укажите ваше место работы'
              }"/>
          <FormKit
              type="text"
              placeholder="Лаборатория"
              validation="required"
              :validation-messages="{
                required: 'Укажите вашу лабораторию'
              }"/>
          <FormKit
              type="textarea"
              placeholder="Комментарий"/>
          <FormKit
              type="checkbox"
              validation="accepted"
              label="Я согласен(на) на обработку персональных данных. ООО 'БиоЛайн' гарантирует конфиденциальность получаемой информации."
              :validation-messages="{
                accepted: 'Потвердите, что вы согласны на обработку персональных данных?'
              }"/>
        </FormKit>
      </div>
    </div>
    <div class="hidden xl:block absolute top-0 right-0 w-1/2 h-full">
      <nuxt-img
          format="webp"
          fit="contain"
          loading="lazy"
          src="/images/form-bg.jpg" alt="form"/>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>