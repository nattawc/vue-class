import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutViewVue from "@/views/AboutView.vue";
import Register from "@/views/Register.vue";
import TestVue from "@/views/Test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/home",
      component: HomeView,
    },

    {
      path: "/about",
      component: AboutViewVue,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/abc",
      component: TestVue,
    },
  ],
});

export default router;
