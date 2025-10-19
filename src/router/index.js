import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/index.vue";
import Tasks from "../views/tasks.vue";
const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks,
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router