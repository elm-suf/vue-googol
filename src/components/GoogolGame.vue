<template>
    <b-row class="row justify-content-around">
        <b-jumbotron cols="12" id="googol">

            <b-col cols="12">
                <chart-component :dataset="numbers"></chart-component>
            </b-col>


            <b-col cols="12" id="googol">
                <b-row>
                    <b-col :class="{hidediv:!item.hidden}"
                           class=" align-items-stretch"
                           cols="2"
                           v-for="(item, index) in numbers"
                           :key="index">
                        <card-item :item="item"></card-item>
                    </b-col>
                </b-row>
            </b-col>
        </b-jumbotron>

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
