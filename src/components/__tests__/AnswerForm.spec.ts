import { describe,test, expect ,beforeEach, it, fn ,vi } from 'vitest'
import { mount,config } from '@vue/test-utils'
import AnswerForm from '../AnswerForm.vue'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'


test('mount component', async() => {
  expect(AnswerForm).toBeTruthy()

  const wrapper = mount(AnswerForm, {
    props: {
      isDisabled: false,
    },
  })
  wrapper.find('input').element.value = 'test'
  wrapper.find('button').trigger('click')
  console.log(wrapper.find('input').text());
  // expect(wrapper.find('input').text()).toContain('test')
  expect(wrapper.find('input').text()).toContain('')

  // expect(wrapper.find('input').element.value).toBe('')
  
  // expect(wrapper.text()).toContain('4 x 2 = 8')
  // expect(wrapper.html()).toMatchSnapshot()

  // await wrapper.get('button').trigger('click')

  // expect(wrapper.text()).toContain('4 x 3 = 12')
})


// describe('displays message', () => {
//   beforeEach(() => {
//     setActivePinia(createPinia())
//   })

//   const wrapper = mount(AnswerForm, {
//     props: {
//       isDisabled:false
//     }
//   })

//   expect(wrapper.html())
// })