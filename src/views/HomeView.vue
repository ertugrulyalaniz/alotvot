<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useListPoolStore } from '../stores/poolStore';
const { locale } = useI18n()

const listPool = useListPoolStore();
const list = ref(listPool.pool);

const tab = ref(0);
const changeLocale = () => {
  locale.value = locale.value === 'en' ? 'da' : 'en'
  localStorage.setItem('locale', locale.value)
}
const activateTab = (i:number) => {
  tab.value = i
}
watchEffect(() => {
  document.documentElement.lang = locale.value
})
</script>

<template>
  <main class="vot-a-lot">
    <div class="header-wrapper">
      <h2 class="text-2xl font-bold text-white">Sir Vot-a-lot</h2>
      <button class="button" @click="changeLocale">{{ $t('change_locale') }}</button>
    </div>
    <div class="tab-wrapper">
      <div v-for="(t,i) in ['Answer Pool','Survey','Graph']" :class="{ 'active': tab === i }" @click="activateTab(i)">{{t}}</div>
    </div>
    <div class="col-wrapper flex grow bg-slate-500 h-full">
      <div v-show="tab == 0" class="view-column bg-slate-200">
        <PoolForm :list="list" />
      </div>
      <div v-show="tab == 1" class="view-column bg-slate-100">
        <Survey :list="list" />
      </div>
      <div v-show="tab == 2" class="view-column bg-slate-200">
        <Charts :list="list" />
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.vot-a-lot {
  @apply flex flex-col h-screen;
  .header-wrapper {
    @apply flex bg-slate-700 p-5 justify-between;
  }
}
@media only screen and (min-width: 601px) {
  .vot-a-lot {
    .tab-wrapper {
      display: none;
      & > div {
        @apply w-1/3 bg-slate-200;
      }
    }
    .col-wrapper {
      .view-column {
        @apply w-1/3;
      }
      & > div {
        display: flex !important;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .vot-a-lot {
    .tab-wrapper {
      @apply border-b-2 border-slate-500 flex text-center;

      & > .active {
        @apply bg-slate-800 text-white  transition-all ease-in;
      }
      & > div {
        @apply w-1/3 bg-slate-200 p-2 border-l-2 border-slate-500 cursor-pointer;
        &:first-child {
          @apply border-l-0;
        }
      }
    }
    .col-wrapper {
      flex-direction: column;
      & > .view-column {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
