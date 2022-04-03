<script setup lang="ts">
import { ref } from 'vue';
import { useListPoolStore } from '../stores/poolStore';
import Answer from './../models/models';

const listPool = useListPoolStore();
const props = defineProps({
  list: {
    type: Array as () => Array<Answer>,
    default: () => []
  }
})
const selected = ref('none');

const setVote = () => {
  listPool.addVote(selected.value);
  selected.value = 'none';
};

</script>

<template>
  <div class="flex flex-col p-4 justify-between min-h-full w-full">
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold mb-4">
        {{ listPool.question }}
        <span v-if="!listPool.question" class="text-slate-400">{{ $t('question_placeholder') }}</span>
      </h2>

      <transition-group name="list" tag="div">
        <div v-for="(item, i) in list" :key="i" class>
          <label class="inline-flex items-center mb-4">
            <input
              v-model="selected"
              type="radio"
              class="radio-input"
              name="radio-sizes"
              :value="item.id"
            />
            <span class="ml-4 text-xl overflow-hidden text-ellipsis" :title="item.name">{{ item.name }}</span>
          </label>
        </div>
      </transition-group>
    </div>
    <div class="flex place-content-end">
      <button
        class="button w-1/2"
        :disabled="props.list.length == 0 || selected == 'none'"
        @click="setVote"
      >{{ $t('buttons.vote') }}!</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.radio-input {
  @apply flex items-center cursor-pointer h-8 w-8 ;
  min-height: 2rem;
  min-width: 2rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
