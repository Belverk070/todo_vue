<template>
  <div
    class="modal-overlay"
    @click="$emit('closeModal')"
  >
    <div
      class="modal"
      @click.stop
    >
      <h6 class="modal__title">{{ modalTitle }}</h6>
      <div class="modal-buttons">
        <Button
          label="Подтвердить"
          @click="$emit(`onSuccess`)"
          class="modal-buttons__confirm"
          color="red"
          >Да</Button
        >
        <Button
          label="Отменить"
          class="modal-buttons__cancel"
          @click="$emit('closeModal')"
          color="yellow"
          >Нет</Button
        >
      </div>
    </div>
    <div
      class="close"
      @click="$emit('closeModal')"
    >
      <img
        class="close-img"
        src="../assets/close-icon.svg"
        alt="Close modal window icon"
      />
    </div>
  </div>
</template>

<script>
  import Button from "./Button.vue";
  export default {
    props: {
      modalTitle: String,
    },
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

  .modal-buttons {
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
