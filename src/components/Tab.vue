<script setup lang="ts">
// import { ref, onMounted } from 'vue';

// const props = defineProps({
//     name: {
//         type: String,
//         required: true
//     },
//     selected: { type: Boolean, default: false }
// })
// const isActive = ref(false);

// onMounted(()=>{
    // isActive.value = props.selected;
// })
</script>
<template>
    <div v-show="true">
        <slot></slot>
    </div>
</template>