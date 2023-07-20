import { createRouter, createWebHistory } from "vue-router";
import show_calendar from "../views/show_calendar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: show_calendar,
    },
  ],
});

export default router;
