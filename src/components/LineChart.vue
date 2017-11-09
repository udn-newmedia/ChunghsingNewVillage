<template>
    <div class="lineChart"></div>
</template>

<script>
import * as d3 from "d3"
import data from "../../static/data.csv"

export default {
    name: 'linechart',
    data: function() {
        return {
            svg_width: 0,
            svg_height: 0,
            margin: null,
            svg: null,
            data: data
        }
    },
    computed: {
        chart_w: function(){
            return this.svg_width - this.margin.left - this.margin.right;
        },
        chart_h: function(){
            return this.svg_height - this.margin.top - this.margin.bottom;
        }
    },
    mounted: function() {
        this.createChart();
    },
    methods: {
        type: function(d){
            d.year = +d.year;
            d.hk = +d.hk;
            d.tw = +d.tw;
            d.salary = +d.salary;
            d.rent = +d.rent;
            d.buy = +d.buy;
            d.cn = +d.cn;
            return d;
        },
        getSVGSize: function(){
            if (window.innerWidth <= 768) {

                this.margin = { top: 50, right: 10, bottom: 30, left: 50 };

                if (window.innerWidth == 768) {
                    this.svg_width = window.innerWidth - 200;
                    this.svg_height = window.innerHeight - 200;
                } else {
                    this.svg_width = window.innerWidth - 40;
                    this.svg_height = window.innerHeight - 40;
                }

            } else {

                this.margin = {top : 50, right : 20, bottom : 30, left : 50};

                this.svg_width = 880
                this.svg_height = 346
            }
        },
        createChart: function(){

            this.getSVGSize();

            let x = d3.scaleLinear()
                .range([0, this.chart_w]);

            let y = d3.scaleLinear()
                .range([this.chart_h, 0]);

            let xAxis = d3.axisBottom(x)
                .ticks(4)
                .tickFormat(d3.format(".0f"));

            let yAxis = d3.axisLeft(y)
                .ticks(6)
                .tickFormat(d3.format(".0f"));

            this.svg = d3.select('.lineChart').append('svg')
                .attr('width', this.svg_width)
                .attr('height', this.svg_height)
                .attr('id', 'svg-1')
                .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            d3.csv(this.data, function(error, data){
                // // format the data
                data.forEach(this.type(d));
            });


            x.domain([2002.5, 2017.5]);
            y.domain([0, 5000]);
            // x.domain(d3.extent(data, function(d) { return d.date; }));
            // y.domain([0, d3.max(data, function(d) { return d.close; })]);

              // Add the x Axis
            this.svg.append("g")
                .attr('class', 'x axis')
                .attr("transform", "translate(0," + this.chart_h + ")")
                .call(xAxis);

            this.svg.append("g")
                .attr('class', 'y axis')
                .call(yAxis);

        }
    },
}
</script>

<style scoped>

</style>