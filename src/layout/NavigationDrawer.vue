<script setup lang="ts">
const items = [
  {
    title: "Home",
    icon: "mdi-home",
    value: "/",
  },
  {
    title: "Sets",
    icon: "mdi-rhombus-split",
    value: "/sets",
  },
];

const model = defineModel();
</script>
<template>
  <v-navigation-drawer v-model="model">
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in items"
        color="info"
        :prepend-icon="item.icon"
        :key="item.value"
        :title="item.title"
        :to="item.value"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
