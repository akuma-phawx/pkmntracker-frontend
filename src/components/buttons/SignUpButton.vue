/** * Component for rendering a Sign Up button. * * @component SignUpButton *
@example *
<SignUpButton />
*/
<template>
  <NormalButton @click="handleSignUp">Sign Up</NormalButton>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import NormalButton from "@/components/buttons/NormalButton.vue";

const { loginWithRedirect } = useAuth0();

/**
 * Handles the sign up process when the button is clicked.
 *
 * @method handleSignUp
 */
const handleSignUp = () => {
  loginWithRedirect({
    appState: {
      target: "/app",
    },
    authorizationParams: {
      screen_hint: "signup",
    },
  });
};
</script>
