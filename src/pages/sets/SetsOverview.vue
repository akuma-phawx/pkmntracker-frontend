<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Set } from "@/types/Set";

const sets = ref<Set[]>();

onMounted(async () => {
  const response = await fetch("http://localhost:8080/api/sets");
});
</script>
<template>
  <h3>Sets Page</h3>
  {{ sets }}
</template>
