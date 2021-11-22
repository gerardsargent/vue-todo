<template>
  <HorizontalFlexWrapper>
    <button
      @click.prevent="removeTodo(todo)"
      class="remove-btn"
      :disabled="isEditing"
    >
      <CrossIcon />
    </button>
    <button
      @click.prevent="setToEdit(todo)"
      class="edit-btn"
      :disabled="isEditing"
    >
      <EditIcon />
    </button>
  </HorizontalFlexWrapper>
</template>

<script>
import { HorizontalFlexWrapper } from "../../styledComponents/todoStyles";
import CrossIcon from "../svg/CrossIcon.vue";
import EditIcon from "../svg/EditIcon.vue";

export default {
  components: {
    HorizontalFlexWrapper,
    CrossIcon,
    EditIcon
  },
  props: ["isEditing", "removeTodo", "setToEdit", "todo"]
};
</script>

<style>
.edit-btn {
  align-items: center;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
}
.remove-btn {
  border: none;
  color: #616161;
  font-weight: 600;
  margin-left: 10px;
  background: transparent;
}
</style>
