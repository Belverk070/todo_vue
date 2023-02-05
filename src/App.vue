<template>
  <div class="app">
    <h1 class="app__title">{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Vue3 ToDo App",
      };
    },
  };
</script>

<style>
  /* .app {
    max-width: 1240px;
    margin: 0 auto;
  }
  .app__title {
    text-align: center;
    color: black;
    font-size: 36px;
  } */
</style>
