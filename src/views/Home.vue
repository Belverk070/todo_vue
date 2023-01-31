<template>
  <TaskList></TaskList>
</template>

<script>
  import TaskList from "../components/TaskList.vue";
  import Button from "../components/Button.vue";

  export default {
    components: {
      TaskList,
      Button,
    },
  };
</script>

<style>
  html {
    background: rgb(86, 128, 233);
    background: linear-gradient(
      270deg,
      rgba(86, 128, 233, 1) 0%,
      rgba(90, 185, 234, 1) 35%,
      rgba(136, 96, 208, 1) 100%
    );
  }
  .app {
    max-width: 1240px;
    margin: 0 auto;
  }
  .app__title {
    text-align: center;
    color: black;
    font-size: 36px;
  }
</style>
