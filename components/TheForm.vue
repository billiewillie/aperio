<template>
  <FormKit
      type="form"
      @submit="submitHandler"
      id="myForm"
      submit-label="Связаться с нами"
      class="max-w-[520px] flex flex-col gap-[10px]"
      incomplete-message="Пожалуйста, заполните все поля">
    <FormKit
        type="text"
        placeholder="ФИО"
        validation="required:trim|length:2"
        name="name"
        :validation-messages="{
                  required: 'Укажите ваше имя',
                  length: 'Короткое имя'
                }"/>
    <FormKit
        type="text"
        placeholder="Телефон"
        validation="required|length:7"
        name="phone"
        :validation-messages="{
                  required: 'Укажите ваш номер телефона',
                  length: 'Мало символов'
                }"/>
    <FormKit
        type="email"
        name="email"
        placeholder="E-mail"
        validation="required|email"
        :validation-messages="{
                  required: 'Укажите ваш e-mail',
                  email: 'Укажите ваш e-mail'
                }"/>
    <FormKit
        type="text"
        placeholder="Город"
        name="city"
        validation="required"
        :validation-messages="{
                  required: 'Укажите ваш город',
                }"/>
    <FormKit
        type="text"
        name="job"
        placeholder="Место работы"
        validation="required"
        :validation-messages="{
            required: 'Укажите ваше место работы'
          }"/>
    <FormKit
        type="text"
        placeholder="Лаборатория"
        name="laboratory"
        validation="required"
        :validation-messages="{
            required: 'Укажите вашу лабораторию'
          }"/>
    <FormKit
        type="textarea"
        name="commentary"
        placeholder="Комментарий"/>
    <FormKit
        type="checkbox"
        :value="true"
        validation="accepted"
        name="data_checking"
        outer-class="order-1"
        inner-class="mt-[2px]"
        label="Я согласен(на) на обработку персональных данных. ООО 'БиоЛайн' гарантирует конфиденциальность получаемой информации."
        :validation-messages="{
          accepted: 'Потвердите, что вы согласны на обработку персональных данных'
        }">
      <template #label="context">
          <span class="text-[16px] text-custom-gray w-[calc(100%_-_23px)]">Я согласен(на) на обработку персональных данных. ООО "БиоЛайн" гарантирует <a
              href="/pdf/policy.pdf" target="_blank" class="underline underline-offset-4">конфиденциальность</a> получаемой информации.</span>
      </template>
    </FormKit>
  </FormKit>
</template>

<script setup>
import axios from "axios";

const {$toast} = useNuxtApp();
import {reset} from '@formkit/core';

async function submitHandler(credentials) {
  try {
    const url = "https://aperio.biolinegroup.ru/api/v1/send";
    const res = await axios.post(url, credentials);
    if (res.status === 200) {
      $toast.success("Успешно отправлено!", {
        timeout: 3000,
        position: 'top-center'
      });
      reset('myForm');
    }
  } catch (e) {
    $toast.error("Не отправлено!", {
      timeout: 3000,
      position: 'top-center'
    });
  }
}
</script>

<style>
.formkit-form#myForm {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 10;
}

#myForm input, textarea {
  width: 100%;
}

#myForm .formkit-outer[data-type="checkbox"] .formkit-wrapper {
  display: flex;
  align-items: flex-start;
  column-gap: 15px;
}

#myForm button[type="submit"] {
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}

#myForm button[type="submit"]:hover {
  background-color: #E4001D;
}

#myForm .formkit-outer {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

#myForm .formkit-outer[data-type="checkbox"] {
  display: flex;
  flex-direction: column;
}

#myForm .formkit-outer[data-type="checkbox"] .formkit-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #868786;
}

#myForm .formkit-outer[data-type="checkbox"] input[type="checkbox"] {
  min-height: auto;
  opacity: 0;
  width: 17px;
  height: 17px;
  padding: 0;
  accent-color: black;
  cursor: pointer;
}

#myForm .formkit-outer[data-type="checkbox"] input[type="checkbox"]:checked {
  opacity: 1;
}


#myForm .formkit-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

#myForm input,
#myForm textarea {
  background-color: #000;
  border: 1px solid #868786;
}

#myForm input {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  min-height: 38px;
  padding: 0 12px;
}

#myForm textarea {
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  min-height: 80px;
  padding: 12px;
}

#myForm button[type="submit"] {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 2px solid #E4001D;
  width: 100%;
  height: 44px;
  font-size: 20px;
  text-transform: uppercase;
}

#myForm input::placeholder,
#myForm textarea::placeholder {
  font-size: 18px;
}

#myForm .formkit-label {
  color: #868786;
}

#myForm .formkit-message {
  color: #E4001D;
}
</style>