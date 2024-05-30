<template>
  <NormalButton @click="handleLogout">Log Out</NormalButton>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import NormalButton from "@/components/buttons/NormalButton.vue";

const { logout } = useAuth0();

const handleLogout = () =>
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
</script>
