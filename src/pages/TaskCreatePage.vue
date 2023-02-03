<template>
  <div class="container">
    <router-link to="/"
      ><Button class="button-yellow">Назад</Button></router-link
    >

    <form class="task-create">
      <h3 class="task__title">Название заметки</h3>
      <input
        class="task__input input"
        v-model="taskTitle"
        placeholder="Введите название заметки"
        type="text"
      />

      <h3 class="todo__title">Список задач</h3>

      <input
        class="todo__input input"
        v-model="todoTitle"
        placeholder="Введите задачу"
        type="text"
        @keydown.enter="handleTodoEnter"
      />

      <div
        class="todo__list"
        v-for="todo in todoList"
        :key="todo"
      >
        <input
          v-model="todo.isCompleted"
          type="checkbox"
          id="todo"
          name="todo"
        />
        <label>{{ todo.todoTitle }}</label>
      </div>
    </form>
    <Button
      type="submit"
      @click="addNewTask"
      >Добавить заметку</Button
    >
  </div>
</template>

<script>
  import Button from "@/components/Button.vue";

  export default {
    data() {
      return {
        todoList: [],
        taskTitle: "",
        todoTitle: "",
      };
    },
    components: {
      Button,
    },
    methods: {
      addNewTask() {
        const task = {
          id: Date.now(),
          taskTitle: this.taskTitle,
          todo: this.todoList,
        };
        if (this.taskTitle != "") {
          this.$store.commit("addNewTask", task);
          localStorage.setItem(
            "tasks",
            JSON.stringify(this.$store.state.tasks)
          );
        }
        this.taskTitle = "";
        this.todoList = [];
      },
      handleTodoEnter() {
        const todo = {
          id: Date.now(),
          isCompleted: false,
          todoTitle: this.todoTitle,
        };
        this.todoList.push(todo);
        this.todoTitle = "";
        this.todoTitle = "";
      },
    },
  };
</script>

<style>
  .task-create {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .input {
    font-size: 24px;
    margin-right: 50px;
    width: 500px;
    height: 40px;
    border: 1px solid lightgray;
  }

  .input:last-of-type {
    margin-bottom: 50px;
  }

  .todo__list {
    font-size: 24px;
    margin-bottom: 5px;
  }
</style>
