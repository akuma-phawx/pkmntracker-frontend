<script setup lang="ts">
import NavigationDrawer from "@/layout/NavigationDrawer.vue";
import { useDisplay } from "vuetify";
import { ref } from "vue";

const { mobile } = useDisplay();
const drawer = ref(!mobile.value);
</script>

<template>
  <v-app-bar app elevation="1">
    <v-app-bar-nav-icon
      v-if="$vuetify.display.mobile"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <v-icon>mdi-pokeball</v-icon>
      Pkmntracker</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>
    </template>
  </v-app-bar>
  <NavigationDrawer v-model="drawer" />
</template>
