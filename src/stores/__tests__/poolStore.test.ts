import { mount, config } from '@vue/test-utils'
import PoolForm from '../PoolForm.vue';
import { createTestingPinia } from '@pinia/testing'
import { useListPoolStore } from '../../stores/poolStore';
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import Answer from '../../models/models'

config.global.mocks = {
    $t: (text: string) => text
}

describe('Answer List Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Add Item', () => {
        const listPool = useListPoolStore()
        expect(listPool.pool).toHaveLength(0)
        listPool.addItem(new Answer('test1'))
        expect(listPool.pool).toHaveLength(1)
    })

    it('Remove Item', () => {
        const listPool = useListPoolStore()
        
        listPool.addItem(new Answer('test1'))
        listPool.addItem(new Answer('test2'))
        listPool.addItem(new Answer('test3'))

        expect(listPool.pool).toHaveLength(3)
        listPool.removeItem(listPool.pool[0].id)
        expect(listPool.pool).toHaveLength(2)
    })
})