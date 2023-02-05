import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home.vue";
import TaskCreatePage from "./pages/TaskCreatePage.vue";
import TaskEditPage from "./pages/TaskEditPage.vue";

const routes = [
  {
    path: "/",
    name: "Main Page",
    component: HomePage,
  },
  {
    path: "/task",
    name: "NewTask",
    component: TaskCreatePage,
  },
  {
    path: "/task/:id",
    name: "TaskEditPage",
    component: TaskEditPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
