import { describe,test, expect ,beforeEach, it, fn ,vi } from 'jest'
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import Vuei18n from 'vue-i18n'
import AnswerForm from '../AnswerForm.vue'

const messages = {
  en: {
    Hello: 'Hello',
  },
  da: {
    Hello: '',
  },
}

test('renders translations', async () => {
  const {queryByText, getByText} = render(AnswerForm, {}, vue => {
    // Let's register and configure Vuei18n normally
    vue.use(Vuei18n)

    const i18n = new Vuei18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages,
    })

    // Notice how we return an object from the callback function. It will be
    // merged as an additional option on the created Vue instance.
    return {
      i18n,
    }
  })

  expect(getByText('Hello')).toBeInTheDocument()

  await fireEvent.click(getByText('Japanese'))

  expect(getByText('こんにちは')).toBeInTheDocument()

  expect(queryByText('Hello')).not.toBeInTheDocument()
})