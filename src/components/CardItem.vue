<template>
  <div>
    <b-card
      :title="item.i + ' '"
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text :class="{hidden:item.hidden}">{{item.value}}</b-card-text>

      <b-button @click="filpCard" variant="primary">Flip Card</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["item"],
  methods: {
    filpCard() {
      console.log(this.item.i);
      this.item.hidden = false;
    }
  }
};
</script>

<style>
.hidden {
  display: none;
}
</style>
