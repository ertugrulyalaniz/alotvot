<script setup lang="ts">
defineProps({
    item: {
        type: Object,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['selectItem']);
</script>

<template>
    <label class="inline-flex items-center mb-4">
        <input
            :checked="selected"
            type="radio"
            class="radio-input"
            name="radio-sizes"
            :value="item.id"
            @input="emit('selectItem', item.id)"
        />
        <span class="ml-4 text-xl overflow-hidden text-ellipsis" :title="item.name">{{ item.name }}</span>
    </label>
</template>
<style scoped lang="scss">
.radio-input {
  @apply flex items-center cursor-pointer h-8 w-8 ;
  min-height: 2rem;
  min-width: 2rem;
}
</style>