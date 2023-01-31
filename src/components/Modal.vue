<template>
  <div
    class="modal-overlay"
    @click="$emit('close-modal')"
  >
    <div
      class="modal"
      @click.stop
    >
      <h6>Подтверждаем удаление?</h6>
      <div class="modal__actions">
        <Button
          @click="$emit('close-modal')"
          class="modal__button button-yellow"
        >
          Подтвердить
        </Button>
        <Button
          class="modal__button button-red"
          @click="$emit('close-modal')"
        >
          Отменить
        </Button>
      </div>
    </div>
    <div
      class="close"
      @click="$emit('close-modal')"
    >
      <img
        class="close-img"
        src="../assets/close-icon.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
  import Button from "./Button.vue";
  export default {
    props: {},
    data() {
      return {};
    },
    components: { Button },
  };
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }

  .modal {
    text-align: center;
    background-color: white;
    height: 150px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }

  .close-img {
    width: 25px;
  }

  .modal__actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
  }

  p {
    font-size: 16px;
    margin: 20px 0;
  }
</style>
