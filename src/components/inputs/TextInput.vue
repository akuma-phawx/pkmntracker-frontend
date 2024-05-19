<script setup lang="ts">
import { VTextField } from 'vuetify/components'

withDefaults(
    defineProps<{
        label?: VTextField['label']
        color?: VTextField['color']
        density?: VTextField['density']
        variant?: VTextField['variant']
        errorMessages?: VTextField['errorMessages']
        hint?: VTextField['hint']
        persistentHint?: VTextField['persistentHint']
        prependInnerIcon?: VTextField['prependInnerIcon']
        clearable?: VTextField['clearable']
        disabled?: VTextField['disabled']
        placeholder?: VTextField['placeholder']
        name?: VTextField['name']
        required?: boolean
    }>(),
    {
        color: 'primary',
        density: 'compact',
        variant: 'outlined',
        errorMessages: null,
        required: false,
        hint: undefined,
        prependInnerIcon: undefined,
        placeholder: undefined,
        persistentHint: false,
        disabled: false,
        clearable: false,
    },
)

const model = defineModel()
</script>

<template>
    <VTextField v-model="model" v-bind="$props">
        <template #label>
            <span>{{ label }} <strong v-if="required" class="text-danger">*</strong></span>
        </template>
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </VTextField>
</template>
