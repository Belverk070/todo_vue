<template>
  <button
    class="button"
    :class="`button_${color}`"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      color: String,
    },
  };
</script>

<style>
  .button {
    font-size: 16px;
    background-repeat: 30px;
    font-weight: 600;
    width: 200px;
    height: 50px;
    color: black;
    background-color: #c1c8e4;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid lightgray;
    transition: all 0.1s ease-in;
    cursor: pointer;
  }
  .button:hover {
    opacity: 0.9;
    border: 1px solid black;
  }

  .button_yellow {
    background-color: lightgoldenrodyellow;
  }

  .button_red {
    background-color: lightcoral;
  }
</style>
