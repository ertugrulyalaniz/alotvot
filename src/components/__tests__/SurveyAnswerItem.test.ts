import { mount } from '@vue/test-utils'
import SurveyAnswerItem from '../SurveyAnswerItem.vue';

describe('SurveyAnswerItem.vue', () => {
    it('If selected prop true expect to be true', () => {
        const wrapper = mount(SurveyAnswerItem,{props:{
            selected: true,
            item:{id:'_idtest1',name:'test1',votes:0},
        }})
        expect(wrapper.find('input').element.checked).toBeTruthy()
    })
})