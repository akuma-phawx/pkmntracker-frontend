<script setup lang="ts">
import { VBtn } from "vuetify/components";

export interface Props {
  text?: VBtn["text"];
  variant?: VBtn["variant"];
  color?: VBtn["color"];
  size?: VBtn["size"];
  elevation?: VBtn["elevation"];
  appendIcon?: VBtn["appendIcon"];
  icon?: VBtn["icon"];
  rounded?: VBtn["rounded"];
}

withDefaults(defineProps<Props>(), {
  variant: "elevated",
  color: "primary",
  size: "default",
  elevation: "4",
});
</script>

<template>
  <VBtn v-bind="$props">
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </VBtn>
</template>
