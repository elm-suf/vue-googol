<template>
    <div id="temp_container">
        <svg :width="width" :height="height">
            <rect v-for="(item, index) in dataset" :key="index"
                  :x="xScale(index)" :y="item.y"
                  :width="bandWidth" :height="item.height"
                  :class="{hidden:item.hidden}"
            ></rect>
        </svg>

        <!--        <b-btn @click="startSimulation">START SIMULATION</b-btn>-->
    </div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "ChartComponent",

        props: ["dataset"],

        beforeMount() {
            console.log("created data", this.dataset);

            const xMax = this.dataset.length;
            const yMax = Number.MAX_SAFE_INTEGER;//d3.max(this.dataset, d => d.value);
            // this.dataset.length;
            this.bandWidth = this.width / this.dataset.length;
            this.xScale = d3.scaleLinear().domain([0, xMax]).range([0, this.width]);
            const yScale = d3.scaleLinear().domain([0, yMax]).range([this.height, 0]);

            this.dataset.forEach(item => {
                item.height = yScale(item.value)
                item.y = this.height - yScale(item.value)
            })
        },
        data() {
            return {
                height: 480,
                width: 1080,
            }
        },
        methods: {
            getScales() {
                const x = d3.scaleLinear().range([0, this.width]);
                const y = d3.scaleLinear().range([this.height, 0]);
                d3.axisLeft().scale(x);
                d3.axisBottom().scale(y);
                x.domain(d3.extent(this.dataset, (d, i) => i));
                y.domain([0, d3.max(this.dataset, d => d.value)]);
                return {x, y};
            },
        }

    };

</script>

<style>
    #temp_container {
        height: 100%;
    }

    svg {
        stroke: crimson;
        background: aliceblue;
    }

    .hidden {
        visibility: hidden;
        display: none;
    }

    rect {
        transition: all 5000ms ease;
    }

</style>
