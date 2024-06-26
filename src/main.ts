import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import { createAuth0 } from "@auth0/auth0-vue";
import "@/scss/main.scss";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    }),
  )
  .mount("#app");
