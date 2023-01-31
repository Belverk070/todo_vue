import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import TaskCreatePage from "../views/TaskCreatePage.vue";

const routes = [
  {
    path: "/main",
    name: "Main Page",
    component: HomePage,
  },
  {
    path: "/task",
    name: "NewTask",
    component: TaskCreatePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
