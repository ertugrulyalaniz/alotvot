<script setup lang="ts">
import { ref } from 'vue';
import { useListPoolStore } from '../stores/poolStore';
import { configs } from '../configs';
import Answer from './../models/models';

const listPool = useListPoolStore();

const props = defineProps({
  list: {
    type: Array as () => Array<Answer>,
    default: ()=>[]
  }
})
const { minFields, maxFields } = configs;
const questionText = ref(listPool.question);


const add = (name:string) => {
  listPool.addItem(new Answer(name));
};
const editQuestion = () => {
  listPool.editQuestion(questionText.value);
};
const editItem = (data:{value:string,id:string}) => {
  const {value, id} = data;
  listPool.editItem(value, id);
};
const removeItem = (i:{id:string}) => {
  const { id } = i
  
  if (props.list.length <= minFields) {
    return
  }
  listPool.removeItem(id)
};
const reset = () => {
  listPool.reset()
  questionText.value = listPool.question;
};
</script>

<template>
  <div class="flex flex-col p-4 min-h-full justify-between w-full">
    <div class="flex flex-col">
      <div class="mb-5">
        <input v-model="questionText" :placeholder="$t('question_placeholder')" class="inputs" type="text" @input="editQuestion" />
      </div>
      <div class="flex flex-col">
        <transition-group name="list" tag="div">
          <div v-for="(item) in list" :key="item.id" class="flex relative justify-between mb-3">
            <AnswerItem :item="item" :key="item.id" :is-disabled="list.length < 3" @editItem="editItem" @removeItem="removeItem"/>
          </div>
        </transition-group>
      </div>
      <div class="flex justify-between">
        <AnswerForm :is-disabled="props.list.length >= maxFields" @add="add"/>
      </div>
    </div>
    <div class="information">
      <span class="font-bold">{{ $t('possible_answers', {count:props.list.length}) }}</span>
      <button class="button" @click="reset">{{ $t('buttons.reset') }}</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.information{
  @apply flex justify-between items-center place-content-end;
}
@media only screen and (max-width: 600px) {
  .information {
    @apply my-5;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
