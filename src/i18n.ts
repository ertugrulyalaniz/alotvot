import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import en from './locales/en.json'
import da from './locales/da.json'
const currentLocale = localStorage.getItem('locale') || 'en'
const i18n = createI18n({
    locale: currentLocale,
    globalInjection: true,
    fallbackLocale: 'en',
    messages: {
        en: en,
        da: da,
    },
})

export default i18n
