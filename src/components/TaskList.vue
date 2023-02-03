<template>
  <div class="container">
    <router-link to="/task">
      <Button>Добавить задачу</Button>
    </router-link>
    <div
      v-for="(task, index) in tasks"
      :key="index"
    >
      <div class="taskItem__container">
        <div class="taskItem__wrapper">
          <h4 class="taskItem__title">{{ index + 1 }}. {{ task.taskTitle }}</h4>
          <div class="todo__wrapepr">
            <ul>
              <li
                class="todo__item"
                v-for="(todo, index) in task.todo"
                :key="index"
              >
                {{ todo.todoTitle }}
              </li>
            </ul>
          </div>
        </div>

        <div class="taskItem__control">
          <Button class="button-yellow">Редактировать</Button>
          <Button
            class="button-red"
            @click="removeTask(index)"
            >Удалить</Button
          >
        </div>
        <Modal
          v-show="showModal"
          @close-modal="showModal = false"
        />
      </div>
    </div>
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
        tasks: [],
        showModal: false,
      };
    },

    methods: {
      removeTask(index) {
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },

    mounted() {
      const data = localStorage.getItem("tasks");
      if (data) {
        this.tasks = JSON.parse(data);
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
  }

  .taskItem__wrapper {
    width: 300px;
  }

  .taskItem__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .taskItem__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 0.03em;
    text-decoration: none;
  }
  .taskItem__control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
</style>
