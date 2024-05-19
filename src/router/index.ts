import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const SetsOverview = () => import("../pages/sets/SetsOverview.vue");
const NotFound = () => import("../pages/errors/NotFound.vue");
const routes = [
  { path: "/", component: Home },
  { path: "/sets", component: SetsOverview },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  routes, // short for `routes: routes`
  history: createWebHistory(),
});

export default router;
