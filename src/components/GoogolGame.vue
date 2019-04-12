<template>
    <b-row class="row justify-content-around">
        <b-jumbotron cols="12" id="googol">
            <h1 class="current" :style="{fontSize: current.fontSize + 'px'}">{{current.value}}</h1>
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
                        <card-item :item="item" :current="current"></card-item>
                    </b-col>
                </b-row>
            </b-col>
        </b-jumbotron>

    </b-row>
</template>

<script>
    import CardItem from "./CardItem.vue";
    import ChartComponent from "./ChartComponent.vue";
    import {bus} from '../main'

    export default {
        name: "Googol",
        props: ["numbers"],
        components: {
            CardItem,
            ChartComponent
        },
        created() {
            bus.$on("flip", (payload) => {
                console.log(payload.height)
                this.current = payload;
                this.current.fontSize = payload.height / 3;
            })
        },
        data() {
            return {
                current: {}
            }
        }
    };
</script>

<style>
    h1 {
        font-size: 320px;
    }

    .current {
        height: 160px;
    }

    #googol {
        height: 100%;
    }
</style>
