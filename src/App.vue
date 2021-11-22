<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "app",
  components: { Todo }
};
</script>

<style>
body {
  /* fonts */
  --default-fonts: "Avenir Next", Helvetica, sans-serif;

  /* colours */
  --madder-lake-red: #c3423f;
  --misty-rose: #f5e0e0;
  --text-dark: #211a1e;
  --text-dark-50: rgba(33, 26, 30, 0.5);
  --text-dark-25: rgba(33, 26, 30, 0.25);
  --text-dark-10: rgba(33, 26, 30, 0.1);
  --white: #fff;
  --white-50: rgba(255, 255, 255, 0.5);

  /* transitions */
  --default-transition: 0.5s cubic-bezier(0.59, 0.12, 0.34, 0.95) all;

  margin: 0;
}
#app {
  font-family: var(--default-fonts);
}
</style>
