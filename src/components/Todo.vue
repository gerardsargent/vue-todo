<template>
  <AppWrapper>
    <div class="todos-wrapper">
      <h1 class="todos-title">Todos</h1>

      <div class="input-wrapper">
        <TodoInput
          placeholder="Add Todo..."
          v-model="newTodoDescription"
          v-on:keyup.enter="addTodo"
        />
        <AddTodoBtn @click.prevent="addTodo" v-if="newTodoDescription.length">
          Add
        </AddTodoBtn>
      </div>

      <ErrorWrapper v-if="errorMessage.length && !newTodoDescription.length">
        <div class="error" v-text="errorMessage"></div>
      </ErrorWrapper>

      <transition-group
        v-if="todos.length"
        class="list-wrapper"
        name="fade-x"
        tag="ul"
      >
        <ListItem
          v-for="(todo, index) in todos"
          :isEditing="todo === todoBeingEdited"
          :key="`${todo.id}_${todo.description}`"
          :removeTodo="removeTodo"
          :setToEdit="setToEdit"
          :todo="todo"
          :todoBeingEdited="todoBeingEdited"
          :toggleIsComplete="toggleIsComplete"
          :updateTodo="updateTodo"
        />
      </transition-group>
      <div v-else class="fallback-wrapper">
        <div class="fallback">
          Enter your first Todo above
        </div>
      </div>
    </div>
  </AppWrapper>
</template>

<script>
import {
  AddTodoBtn,
  AppWrapper,
  Divider,
  TodoInput
} from "../styledComponents/todoStyles";
import ListItem from "./ListItem";

export default {
  components: { AddTodoBtn, AppWrapper, Divider, ListItem, TodoInput },

  data() {
    return {
      errorMessage: "",
      id: 0,
      newTodoDescription: "",
      todoBeingEdited: null,
      todos: []
    };
  },

  methods: {
    addTodo() {
      if (!this.newTodoDescription.length) {
        this.errorMessage = "Todo needs a description";
        return;
      }

      this.errorMessage = "";

      this.todos.unshift({
        id: this.id,
        description: this.newTodoDescription,
        isComplete: false
      });

      this.newTodoDescription = "";
      this.id += 1;
    },
    updateTodo(todoForUpdate, editedDescription) {
      const todosCopy = [...this.todos];
      const todoIndex = todosCopy.findIndex(todo => todoForUpdate === todo);
      const todoToUpdate = todosCopy.find(todo => todoForUpdate === todo);
      const updatedTodo = {
        ...todoToUpdate,
        description: editedDescription
      };
      todosCopy[todoIndex] = updatedTodo;

      this.todos = todosCopy;
      this.todoBeingEdited = null;
    },
    removeTodo(incomingTodo) {
      this.todos = this.todos.filter(todo => todo !== incomingTodo);
    },
    setToEdit(todo) {
      this.descriptionBeingEdited = todo.description;
      this.todoBeingEdited = this.todoBeingEdited === todo ? null : todo;
    },
    toggleIsComplete(incomingTodo) {
      const todosCopy = [...this.todos];
      const todoIndex = todosCopy.findIndex(todo => incomingTodo === todo);
      const todoToUpdate = todosCopy.find(todo => incomingTodo === todo);
      const updatedTodo = {
        ...todoToUpdate,
        isComplete: !todoToUpdate.isComplete
      };
      todosCopy[todoIndex] = updatedTodo;

      this.todos = todosCopy;
    }
  }
};
</script>

<style>
.error {
  background: var(--misty-rose);
  color: var(--madder-lake-red);
  margin-top: 10px;
  padding: 10px;
}
.fallback {
  background: #fff;
  border-radius: 5px;
  display: flex;
  color: var(--text-dark-50);
  justify-content: center;
  padding: 16px 10px;
  text-align: center;
  transition: var(--default-transition);
}
.fallback-wrapper {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid var(--text-dark-25);
}
.input-wrapper {
  position: relative;
}
.list-wrapper {
  position: relative;
  padding-top: 10px;
  padding-inline-start: 0px;
  border-top: 1px solid var(--text-dark-25);
}

.fade-x-enter-active {
  transition: var(--default-transition);
  transition-property: opacity, transform;
}
.fade-x-enter {
  opacity: 0;
  transform: rotateX(90deg);
}
.fade-x-enter-to {
  opacity: 1;
}
.fade-x-leave-active {
  position: absolute;
  width: -webkit-fill-available;
}
.fade-x-leave-to {
  opacity: 0;
  transition: var(--default-transition);
}

.todos-title {
  text-align: center;
  color: var(--madder-lake-red);
}
.todos-wrapper {
  max-width: 375px;
  padding: 0 15px;
  width: 100%;
}
</style>
