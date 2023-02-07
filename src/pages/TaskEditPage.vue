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
        <input
          v-model="todo.isCompleted"
          type="checkbox"
          class="todo__checkbox"
          id="todo"
          name="todo"
        />

        <label :class="{ done: todo.isCompleted }">{{ todo.todoTitle }}</label>

        <span
          class="delete-btn"
          title="delete todo"
        >
          <img
            @click="deleteTodo(todo.id)"
            class="close-img"
            src="../assets/close-icon.svg"
            alt="Close modal window icon"
          />
        </span>
      </div>
    </form>

    <Button
      type="submit"
      @click="openModalHandler"
      >Сохранить изменения</Button
    >
    <Modal
      v-show="showModal"
      modalTitle="Сохранить изменения?"
      @onSuccess="handleSuccess"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Button from "@/components/Button.vue";
  import Modal from "@/components/Modal.vue";

  export default {
    name: "TaskEditPage",
    data() {
      return {
        currentTask: null,
        todoList: [],
        taskTitle: "",
        todoTitle: "",
        showModal: false,
      };
    },
    components: {
      Button,
      Modal,
    },
    computed: {
      ...mapGetters(["getTaskByID"]),
      task() {
        return this.getTaskByID(this.$route.params.id);
      },
    },
    methods: {
      handleTodoEnter() {
        const todo = {
          id: Date.now(),
          isCompleted: false,
          todoTitle: this.todoTitle,
        };
        this.todoList.push(todo);
        this.todoTitle = "";
      },
      openModalHandler() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      handleSuccess() {
        this.task.taskTitle = this.taskTitle;
        this.$store.commit("confirmTaskEdit");
        this.closeModal();
        this.$router.push({ name: "Main Page" });
      },
      deleteTodo(id) {
        const index = this.todoList.findIndex((item) => item.id === id);
        this.todoList.splice(index, 1);
      },
    },
    mounted() {
      this.currentTask = this.getTaskByID(this.$route.params.id);
      if (this.currentTask) {
        this.taskTitle = this.currentTask?.taskTitle || this.taskTitle;
        this.todoList = this.currentTask?.todo || this.todoList;
      }
    },
  };
</script>
