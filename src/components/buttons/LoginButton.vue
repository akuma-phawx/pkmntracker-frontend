<template>
  <NormalButton @click="handleLogin">Login</NormalButton>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import NormalButton from "@/components/buttons/NormalButton.vue";
const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/app",
    },
  });
};
</script>
