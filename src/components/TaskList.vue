<template>
  <div
    v-if="tasks.length != 0"
    class="container"
  >
    <router-link to="/task">
      <Button>Добавить задачу</Button>
    </router-link>
    <div
      v-for="(task, index) in tasks"
      :key="index"
    >
      <div class="task-wrapper">
        <h4 class="title task__title-lg">
          {{ index + 1 }}. {{ task.taskTitle }}
        </h4>
        <div class="todo-wrapper">
          <ul v-if="task.todo.length > 1">
            <li class="todo__item">
              {{ task.todo[0].todoTitle }}
            </li>
            <li
              li
              class="todo__item"
            >
              {{ task.todo[1].todoTitle }}
            </li>
          </ul>
          <p class="todo__counter">Всего задач: {{ task.todo.length }}</p>
        </div>
      </div>

      <div class="task-actions">
        <Button
          color="yellow"
          @click="openEditPage(task.id)"
          >Редактировать</Button
        >
        <Button
          color="red"
          @click="openModalHandler(task.id)"
          >Удалить</Button
        >
      </div>
      <Modal
        v-show="showModal"
        modalTitle="Удалить?"
        @onSuccess="handleSuccess"
        @closeModal="closeModal"
      />
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <router-link to="/task">
      <Button>Добавить задачу</Button>
    </router-link>
    <h4 class="empty__list">Задач нет, добавить?</h4>
  </div>
</template>

<script>
  import Modal from "./Modal.vue";
  import Button from "./Button.vue";

  export default {
    components: {
      Modal,
      Button,
    },

    data() {
      return {
        showModal: false,
        currentTaskID: null,
      };
    },

    computed: {
      tasks() {
        return this.$store.state?.tasks || [];
      },
    },

    methods: {
      handleSuccess() {
        this.$store.commit("deleteTask", this.currentTaskID);
        this.closeModal();
      },
      openModalHandler(id) {
        this.showModal = true;
        this.currentTaskID = id;
      },
      closeModal() {
        this.showModal = false;
        this.currentTaskID = null;
      },
      openEditPage(taskID) {
        this.$router.push({ name: "TaskEditPage", params: { id: taskID } });
      },
    },

    mounted() {
      const data = localStorage.getItem("tasks");
      if (data) {
        this.$store.state.tasks = JSON.parse(data);
      }
    },
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
  }
  .task-wrapper {
    text-align: center;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0;
  }
  .task__title-lg {
    text-transform: uppercase;
  }
  .task-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  .todo__item {
    text-align-last: left;
    font-size: 24px;
  }
  .todo__counter {
    font-size: 24px;
  }
  .empty__list {
    font-size: 25px;
  }
</style>
