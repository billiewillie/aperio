// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    devtools: {enabled: true},
    modules: [
        '@nuxt/image',
        '@formkit/nuxt'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'Leica Aperio – сканирующие микроскопы для гистологии и цитологии',
            meta: [
                {
                    name: 'description',
                    content: 'Сканирующие микроскопы Leica Aperio - высокопроизводительные системы для цифровой патологии: получение второго мнения в сложных случаях, телемедицина, интеграция в ЛИС, создание электронного архива препаратов.'
                },
                {
                    name: 'keywords',
                    content: 'Aperio, GT 450 DX, Aperio CS2, ScanScope, Aperio AT2, гистосканер, гистоскан, KFBIO, Pannoramic, 3DHistech, Hamamatsu, Nanozoomer, сканер Leica, сканер Лейка, цифровая патология, сканер стекол, сканирование препаратов, цифровая патология, Digital pathology, аперио, патоморфология, второе мнение'
                },
                {
                    name: 'robots',
                    content: 'noindex'
                }
            ],

        }
    }
})
