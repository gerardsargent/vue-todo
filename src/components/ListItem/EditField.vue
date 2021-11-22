<template>
  <input
    class="edit-input-field"
    v-model="descriptionBeingEdited"
    v-on:keyup.enter="updateTodo(todo, descriptionBeingEdited)"
  />
</template>

<script>
export default {
  props: ["todo", "updateTodo"],

  data() {
    return {
      descriptionBeingEdited: ""
    };
  },

  mounted() {
    this.descriptionBeingEdited = this.todo.description;
  }
};
</script>

<style>
.edit-input-field {
  background-color: var(--text-dark-10);
  border: none;
  font-family: var(--default-fonts);
  color: var(--text-dark);
  padding: 5px;
  width: 100%;
}
</style>
