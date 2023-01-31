import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
});

export default store;
