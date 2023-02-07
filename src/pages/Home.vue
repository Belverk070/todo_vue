<template>
  <TaskList></TaskList>
</template>

<script>
  import TaskList from "../components/TaskList.vue";
  import Button from "../components/Button.vue";

  export default {
    name: 'Home',
    components: {
      TaskList,
      Button,
    },
  };
</script>

<style>
  html {
    background: lightslategray;
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
