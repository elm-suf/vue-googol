<template>
    <b-row class="row justify-content-around">
        <b-col cols="7" id="googol">
            <b-jumbotron cols="7" header="Googol-Game" lead="Optimal quitting strategy">
                <b-row>
                    <b-col
                            class="d-flex align-items-stretch"
                            cols="2"
                            v-for="(item, index) in numbers"
                            :key="index"
                    >
                        <card-item :item="item"></card-item>
                    </b-col>
                </b-row>
            </b-jumbotron>
        </b-col>
        <b-col cols="5" id="googol">
            <b-jumbotron cols="7" header="Chart Component" lead="Make the right choice">
                <chart-component :data="numbers"></chart-component>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>
    import CardItem from "./CardItem.vue";
    import ChartComponent from "./ChartComponent.vue";

    export default {
        name: "Googol",
        props: ["numbers"],
        components: {
            CardItem,
            ChartComponent
        }
    };
</script>

<style>
    #googol {
        height: 100%;
    }
</style>
