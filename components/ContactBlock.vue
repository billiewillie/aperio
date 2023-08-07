<template>
  <div class="contact-block relative overflow-hidden bg-[#0C0C0C] py-[35px]" id="contacts">
    <div class="container">
      <div class="form-wrapper xl:w-1/2 flex justify-center">
        <div class="form-inner justify-center flex flex-col max-w-[520px] gap-y-[20px]">
          <h2 class="text-[37px] xl:text-[34px] leading-[1.2]">Оцените возможности <span class="text-[#E4001D]">сканера Aperio!</span>
          </h2>
          <p class="text-[18px] xl:text-[22px]">Заполните форму с контактными данными, и наш специалист свяжется с
            Вами:</p>
          <FormKit
              type="form"
              submit-label="Связаться с нами"
              class="max-w-[520px] flex flex-col gap-[10px]"
              incomplete-message="Пожалуйста, заполните все поля">
            <FormKit
                type="text"
                placeholder="ФИО"
                validation="required:trim"
                :validation-messages="{
                  required: 'Укажите как вас зовут?'
                }"/>
            <FormKit
                type="text"
                placeholder="Телефон"
                validation="required|min:10"
                :validation-messages="{
                  required: 'Укажите ваш номер телефона?'
                }"/>
            <FormKit
                type="email"
                placeholder="E-mail"
                validation="required"
                :validation-messages="{
                  required: 'Укажите ваш e-mail',
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
                  accepted: 'Потвердите, что вы согласны на обработку персональных данных'
                }"/>
          </FormKit>
        </div>
      </div>
    </div>
    <div class="hidden xl:block absolute top-0 right-0 w-1/2 h-full">
      <nuxt-img
          format="webp"
          class="object-cover w-full h-full object-top"
          loading="lazy"
          src="/images/form-bg.jpg" alt="form"/>
    </div>
  </div>
</template>

<style>
.contact-block input, textarea {
  width: 100%;
}

.contact-block .formkit-outer[data-type="checkbox"] .formkit-wrapper {
  display: flex;
  align-items: flex-start;
  column-gap: 15px;
}

.contact-block .formkit-outer {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.contact-block .formkit-outer[data-type="checkbox"] {
  display: flex;
  flex-direction: column;
}

.contact-block .formkit-outer[data-type="checkbox"] .formkit-inner {
  width: 19px;
  height: 19px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #868786;
}

.contact-block .formkit-outer[data-type="checkbox"] input[type="checkbox"] {
  min-height: auto;
  opacity: 0;
  width: 17px;
  height: 17px;
  padding: 0;
  accent-color: black;
  cursor: pointer;
}

.contact-block .formkit-outer[data-type="checkbox"] input[type="checkbox"]:checked {
  opacity: 1;
}


.contact-block .formkit-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.contact-block input,
.contact-block textarea {
  background-color: #000;
  border: 1px solid #868786;
}

.contact-block input {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  min-height: 38px;
  padding: 0 12px;
}

.contact-block textarea {
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  min-height: 120px;
  padding: 12px;
}

.contact-block button[type="submit"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 2px solid #E4001D;
  width: 100%;
  height: 44px;
  font-size: 20px;
  text-transform: uppercase;
}

.contact-block input::placeholder,
.contact-block textarea::placeholder {
  font-size: 18px;
}

.contact-block .formkit-label {
  color: #868786;
}

.contact-block .formkit-message {
  color: #E4001D;
}
</style>