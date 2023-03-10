import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    addNewTask: (state, task) => {
      state.tasks.push(task);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((item) => item.id === id);
      state.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    confirmTaskEdit(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  getters: {
    getTaskByID: (state) => (id) => {
      return state.tasks.find((item) => Number(item.id) === Number(id));
    },
  },
});

export default store;
