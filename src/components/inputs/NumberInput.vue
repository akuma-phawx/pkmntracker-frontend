<script setup lang="ts">
import { VNumberInput } from 'vuetify/labs/VNumberInput'

withDefaults(
    defineProps<{
        label?: VNumberInput['label']
        color?: VNumberInput['color']
        density?: VNumberInput['density']
        variant?: VNumberInput['variant']
        hint?: VNumberInput['hint']
        persistentHint?: VNumberInput['persistentHint']
        reverse?: VNumberInput['reverse']
        controlVariant?: VNumberInput['controlVariant']
        hideInput?: VNumberInput['hideInput']
        inset?: VNumberInput['inset']
        min?: VNumberInput['min']
        max?: VNumberInput['max']
    }>(),
    {
        color: 'primary',
        density: 'compact',
        variant: 'outlined',
        inset: false,
        reverse: false,
        controlVariant: 'default',
        min: 1,
        max: 99,
        persistentHint: false,
    },
)

const model = defineModel()
</script>

<template>
    <VNumberInput v-model="model" v-bind="$props" />
</template>
