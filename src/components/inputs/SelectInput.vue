<script setup lang="ts">
import { VSelect } from 'vuetify/components'

withDefaults(
    defineProps<{
        label?: VSelect['label']
        items: VSelect['items']
        color?: VSelect['color']
        density?: VSelect['density']
        variant?: VSelect['variant']
        itemTitle?: VSelect['itemTitle']
        itemValue?: VSelect['itemValue']
        errorMessages?: VSelect['errorMessages']
        loading?: VSelect['loading']
        disabled?: VSelect['disabled']
        clearable?: VSelect['clearable']
        hideDetails?: VSelect['hide-details']
        itemProps?: VSelect['itemProps']
        required?: boolean
    }>(),
    {
        color: 'primary',
        density: 'compact',
        variant: 'outlined',
        itemTitle: 'title',
        itemValue: 'value',
        errorMessages: null,
        required: false,
        loading: false,
        disabled: false,
        clearable: false,
    },
)

const model = defineModel()
</script>

<template>
    <VSelect v-model="model" v-bind="$props">
        <template v-if="label" #label>
            <span>{{ label }} <strong v-if="required" class="text-danger">*</strong></span>
        </template>
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </VSelect>
</template>
