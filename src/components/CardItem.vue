<template>
    <div>
        <b-card
                :title="item.i + ' '"
                img-alt="Image"
                tag="article"
                class="m-2 square centerd"
        >
            <b-card-text :class="{hidden:item.hidden}">{{item.value}}</b-card-text>

            <b-button @click="flipCard" variant="primary">Flip Card</b-button>
        </b-card>
    </div>
</template>

<script>
    import {bus} from '../main'

    export default {
        name: "CardItem",
        props: ["item"],
        methods: {
            flipCard() {
                this.item.hidden = false;
                bus.$emit('flip', this.item);
            }
        }
    };
</script>

<style>
    .hidden {
        display: none;
    }

    .hidediv {
        display: none;
    }
</style>
