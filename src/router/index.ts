import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";

/**
 * Lazy-loaded app components.
 * @returns A Promise that resolves to a Vue component component.
 */
const Home = () => import("../pages/Home.vue");
const NotFound = () => import("../pages/errors/NotFound.vue");
const App = () => import("../pages/auth/App.vue");
const UserProfile = () => import("@/pages/auth/user/UserProfile.vue");

/**
 * Array of route objects.
 * Each route object contains the path and component for the route.
 * The "beforeEnter" property can be used to specify a guard function that runs before entering the route.
 * The "name" property is used to specify the name of the route.
 */
const routes = [
  { path: "/", component: Home },
  { path: "/app", component: App, beforeEnter: authGuard },
  { path: "/app/profile", component: UserProfile, beforeEnter: authGuard },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

/**
 * The router instance for the application.
 */
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
