<template>
  <div id="app">
    <googol :numbers="numbers"/>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Googol from "./components/GoogolGame.vue";

export default {
  name: "app",
  components: {
    Todos,
    //  <todos :todos="todos"/>
    Googol
  },
  data() {
    return {
      numbers: Array(40)
        .fill()
        .map((num, index) => {
          return {
            i: index,
            hidden: true,
            value: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
          };
        }),
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
