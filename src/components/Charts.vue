<script setup lang="ts">
import { computed } from 'vue';
import { useListPoolStore } from '../stores/poolStore';
import { configs } from '../configs';
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import Answer from './../models/models';

const listPool = useListPoolStore();

const props = defineProps({
  list: {
    type: Array as () => Array<Answer>,
    default: () => []
  }
})

Chart.register(...registerables);

const totalVotes = computed(() => props.list.length > 0 ? props.list.map(a => a.votes).reduce((a, b) => a + b) : 0);
const testData = computed(() => ({
  labels: props.list.map(item => item.name),
  datasets: [
    {
      data: props.list.map(item => item.votes),
      backgroundColor: configs.backgroundColors
    },
  ],
}));

const options = computed(() => ({
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        min: 0,
        stepSize: 1
      }
    }
  },
  plugins: {
    title: {
      display: false,
      text: listPool.question,
    },
    legend: false
  },
}));
const { barChartProps } = useBarChart({
  chartData: testData,
  options,
});

</script>
<template>
  <div class="chart-wrapper">
    <div class="flex flex-col">
      <h2 class="title">
        {{ listPool.question }}
        <span
          v-if="!listPool.question"
          class="text-slate-400"
        >{{ $t('question_placeholder') }}</span>
      </h2>
      <div class="flex flex-col">
        <BarChart v-bind="barChartProps" />
      </div>
    </div>
    <div class="information">
      <span>{{ $t('total_votes', {count:totalVotes}) }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.chart-wrapper {
  @apply flex flex-col justify-between p-4 min-h-full w-full;

  .title {
    @apply text-2xl text-center font-bold;
  }
  .information {
    @apply flex justify-between place-content-end;
    & > span {
      @apply font-bold leading-10;
    }
  }
}
@media only screen and (max-width: 600px) {
  .information {
    @apply my-5;
  }
}
</style>