<template>
  <div>
    <h1 v-for="(item, index) in todos" :key="index" >{{item}}</h1>
    
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"]
};
</script>

<style>
</style>
