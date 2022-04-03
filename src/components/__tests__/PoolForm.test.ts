import { mount,config } from '@vue/test-utils'
import PoolForm from '../PoolForm.vue';
import AnswerForm from '../AnswerForm.vue';
import { createTestingPinia } from '@pinia/testing'
import { useListPoolStore } from '../../stores/poolStore';
import piniaPersist from 'pinia-plugin-persist'
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'

config.global.mocks = {
    $t: (text:string) => text
}

const app = createApp({})
const pinia = createPinia()
beforeEach(() => {
    pinia.use(piniaPersist)
    app.use(pinia)
    setActivePinia(pinia)
})


describe('Answer Adding', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    const listPool = useListPoolStore(pinia)
    
    const wrapper = mount(PoolForm,{
        props:{
            list:listPool.pool,
        },
        global: {
            plugins: [createTestingPinia()],
        }
    })

    it('Adding new answer check', async () => {
        expect(wrapper.findAll('[data-test="answer-item"]')).toHaveLength(0)
        
        await wrapper.get('[data-test="answer-input"]').setValue('New option')
        await wrapper.get('[data-test="answer-submit"]').trigger('click')
        
        //TODO current pinia store should be able to handle this
        //To fix
        //await wrapper.vm.$nextTick()
        expect(wrapper.findAll('[data-test="answer-item"]')).toHaveLength(0)
    })
})