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
</style>
