<template>
  <router-link to="/main"
    ><Button class="button-yellow">Назад</Button></router-link
  >

  <div class="container-column">
    <h3>Название заметки</h3>
    <input
      class="input"
      v-model="taskTitle"
      placeholder="Введите название заметки"
      type="text"
    />

    <h3>Список задач</h3>

    <input
      class="input"
      v-model="todoTitle"
      placeholder="Введите задачу"
      type="text"
    />

    <Button @click="addNewTask">Добавить задачу</Button>
  </div>
</template>

<script>
  import Button from "@/components/Button.vue";

  export default {
    data() {
      return {
        tasks: [],
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
          todo: [
            {
              id: Date.now(),
              isCompleted: false,
              todoTitle: this.todoTitle,
            },
          ],
        };
        if (this.taskName != "" && this.todoTitle != "") {
          this.$store.state.tasks.push(task);
          localStorage.setItem(
            "tasks",
            JSON.stringify(this.$store.state.tasks)
          );
        }
        this.taskTitle = "";
        this.todoTitle = "";
      },
    },
  };
</script>

<style>
  .container-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .input {
    background: #84ceeb;
    font-size: 24px;
    margin-right: 50px;
    width: 500px;
    height: 40px;
    border: 1px solid lightgray;
  }

  .input:last-of-type {
    margin-bottom: 50px;
  }
</style>
