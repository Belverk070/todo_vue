<template>
  <div class="container">
    <router-link to="/"
      ><Button class="button-yellow">Назад</Button></router-link
    >

    <form class="task-create">
      <h3 class="task__title title">Название заметки</h3>
      <input
        class="task__input input"
        v-model="taskTitle"
        placeholder="Введите название заметки"
        type="text"
      />

      <h3 class="todo__title title">Список задач</h3>

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
        <div class="todo__wrapper">
          <input
            v-model="todo.isCompleted"
            type="checkbox"
            id="todo"
            name="todo"
          />
          <label :class="{ done: todo.isCompleted }">{{
            todo.todoTitle
          }}</label>
        </div>

        <span
          class="todo__button-delete"
          title="delete todo"
          ><img
            @click="deleteTodo(todo.id)"
            class="todo__button-image"
            src="../assets/close-icon.svg"
            alt="Delete todo"
        /></span>
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
    name: 'TaskCreatePage',
    props: ["initialTask"],
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
        this.$router.push({ name: "Main Page" });
      },
      handleTodoEnter() {
        const todo = {
          id: Date.now(),
          isCompleted: false,
          todoTitle: this.todoTitle,
        };
        if (this.todoTitle != "") {
          this.todoList.push(todo);
          this.todoTitle = "";
        }
      },
      deleteTodo(id) {
        const index = this.todoList.findIndex((item) => item.id === id);
        this.todoList.splice(index, 1);
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
  .title {
    font-size: 24px;
  }
  .input {
    font-size: 24px;
    margin: 0 auto;
    width: 500px;
    height: 40px;
    border: 1px solid lightgray;
  }
  .input:last-of-type {
    margin-bottom: 50px;
  }
  .todo__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    font-size: 24px;
    margin-bottom: 5px;
  }
  .done {
    text-decoration: line-through;
    color: black;
  }
  .todo__button-image {
    cursor: pointer;
  }
  .todo__wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .todo__checkbox {
    margin-right: 15px;
    cursor: pointer;
  }
</style>
