<template>
  <div :class="{ faded: todo.isComplete }" class="todo-wrapper">
    <HorizontalFlexWrapper>
      <button
        @click.prevent="toggleIsComplete(todo)"
        class="complete-btn"
        :disabled="isEditing"
      >
        <CheckMark v-if="todo.isComplete" />
      </button>

      <EditField v-if="isEditing" :todo="todo" :updateTodo="updateTodo" />
      <li
        v-else
        :class="{ complete: todo.isComplete }"
        class="todo-description"
        v-text="todo.description"
      ></li>
    </HorizontalFlexWrapper>

    <EditActions
      :isEditing="isEditing"
      :todo="todo"
      :setToEdit="setToEdit"
      :removeTodo="removeTodo"
    />
  </div>
</template>

<script>
import { HorizontalFlexWrapper } from "../../styledComponents/todoStyles";
import CheckMark from "../svg/CheckMark.vue";
import EditActions from "./EditActions.vue";
import EditField from "./EditField.vue";

export default {
  components: {
    CheckMark,
    HorizontalFlexWrapper,
    EditActions,
    EditField
  },
  props: [
    "isEditing",
    "removeTodo",
    "setToEdit",
    "todo",
    "todoBeingEdited",
    "toggleIsComplete",
    "updateTodo"
  ],
  computed: {
    isCompleteText() {
      return this.todo.isComplete ? "UNDO" : "DONE";
    }
  }
};
</script>

<style>
.complete-btn {
  align-items: center;
  border: 1px solid var(--text-dark);
  border-radius: 25px;
  color: var(--text-dark);
  display: flex;
  justify-content: center;
  margin-right: 10px;
  background: var(--white);
  width: 25px;
  height: 25px;
}
.complete-btn:hover,
.edit-btn:hover,
.remove-btn:hover {
  cursor: pointer;
}
.complete-btn:disabled,
.edit-btn:disabled,
.remove-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.complete {
  opacity: 0.25;
  text-decoration: line-through;
  transition: var(--default-transition);
}
.complete-btn {
  padding: 0;
}

.todo-description {
  list-style: none;
  padding: 3px 0;
}

.todo-wrapper {
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  margin-top: 5px;
  transition: var(--default-transition);
}
.faded {
  background: var(--white-50);
  transition: var(--default-transition);
}
</style>
