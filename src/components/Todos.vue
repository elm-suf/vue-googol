<template>
  <b-row>
    <b-col v-for="(item, index) in todos" :key="index">
      <todo-item :item="item"/>
    </b-col>
  </b-row>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
