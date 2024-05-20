<script setup lang="ts">
import AppBar from "@/layout/AppBar.vue";
import MainContent from "@/layout/MainContent.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <v-app>
        <AppBar />
        <MainContent />
        <Footer />
      </v-app>
    </v-layout>
  </v-card>
</template>
