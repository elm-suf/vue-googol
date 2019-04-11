<template>
  <b-card
    class="mb-2"
    style="max-width: 20rem;"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    :title="item.title"
    :class="{'is-complete':item.completed }"
  >
    <b-card-text>Completed: {{item.completed}}</b-card-text>

    <button @click="markComplete">COMPLETE</button>
  </b-card>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  methods: {
    markComplete() {
      this.item.completed = !this.item.completed;
    }
  }
};
</script>

<style>
.is-complete {
  text-decoration: green wavy underline;
}
</style>
