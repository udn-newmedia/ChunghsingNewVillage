<template>
    <div class="lineChart"></div>
</template>

<script>
import * as d3 from "d3"

export default {
    name: 'linechart',
    props:['csvinput'],
    data: function() {
        return {
            svg_width: 0,
            svg_height: 0,
            margin: null,
            svg: null,
            mob: null
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
        format: function(d){
            d.year = +d.year;
            d.people = +d.people;
            return d;
        },
        getSVGSize: function(){
            if (window.innerWidth <= 768) {
                this.mob = true;
                this.margin = { top: 50, right: 10, bottom: 30, left: 50 };

                if (window.innerWidth == 768) {
                    this.svg_width = window.innerWidth - 200;
                    this.svg_height = window.innerHeight - 200;
                } else {
                    this.svg_width = window.innerWidth - 40;
                    this.svg_height = window.innerHeight - 40;
                }
            } else {
                this.mob = false;
                this.margin = {top : 50, right : 20, bottom : 30, left : 50};
                this.svg_width = 880;
                this.svg_height = 346;
            }
        },
        createMobChart: function(){

            let x = d3.scaleLinear()
                .range([0, this.chart_w]);

            let y = d3.scaleLinear()
                .range([this.chart_h, 0]);

            let fakeY = d3.scaleLinear()
                .range([this.chart_h, this.chart_h]);

            let xAxis = d3.axisBottom(x)
                .tickSize(-10)
                .tickValues([1998, 2010, 2017])
                .tickFormat(d3.format(".0f"));

            let yAxis = d3.axisLeft(y)
                .tickSize(-this.chart_w)
                .ticks(6)
                .tickFormat(d3.format(".0f"));

            let fakexAxis = d3.axisLeft(fakeY)
                .tickSize(-this.chart_w)
                .ticks(6)
                .tickFormat("");

            this.svg = d3.select('.lineChart').append('svg')
                .attr('width', this.svg_width)
                .attr('height', this.svg_height)
                .attr('id', 'svg-1')
                .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            let line = d3.line()
                .x(function(d) { return x(d.year); })
                .y(function(d) { return y(d.people); });

            d3.csv(this.csvinput, this.format, (error, data)=>{
                if (error) throw error;

                x.domain([d3.min(data, function(d) { return d.year; })-0.5, d3.max(data, function(d) { return d.year; })+0.5]);
                y.domain([d3.min(data, function(d) { return d.people;})-170, d3.max(data, function(d) {return d.people;})+1000]);
                fakeY.domain([d3.min(data, function(d) { return d.people; })-170, d3.max(data, function(d) { return d.people; })+1000]);

                // Add the x Axis
                this.svg.append("g")
                    .attr('class', 'x axis')
                    .attr("transform", "translate(0," + this.chart_h + ")")
                    .call(xAxis);

                this.svg.append('g')
                    .attr('class', 'y axis')
                    .call(yAxis)
                    .append('text')
                    .attr('x', -5)
                    .attr('y', 20)
                    .text('人數')

                this.svg.append('g')
                    .attr('class', 'fakeaxis')
                    .call(fakexAxis)

                this.svg.append('g')
                    .attr('class', 'x axis')
                    .append('text')
                    .attr('x', -30)
                    .attr('y', this.chart_h + 15)
                    .text('年')

                // draw line
                this.svg.append("path")
                    .datum(data)
                    .attr("class", "animate-path-1")
                    .attr('id', 'line-1')
                    .attr("d", line);
            });
        },
        createPCChart: function(){

            let x = d3.scaleLinear()
                .range([0, this.chart_w]);

            let y = d3.scaleLinear()
                .range([this.chart_h, 0]);

            let fakeY = d3.scaleLinear()
                .range([this.chart_h, this.chart_h]);

            let xAxis = d3.axisBottom(x)
                .tickSize(-6)
                .tickValues([1998, 2002, 2006, 2010, 2015, 2017])
                .tickFormat(d3.format(".0f"));

            let yAxis = d3.axisLeft(y)
                .tickSize(-this.chart_w)
                .ticks(6)
                .tickFormat(d3.format(".0f"));

            let fakexAxis = d3.axisLeft(fakeY)
                .tickSize(-this.chart_w)
                .ticks(6)
                .tickFormat("");

            this.svg = d3.select('.lineChart').append('svg')
                .attr('width', this.svg_width)
                .attr('height', this.svg_height)
                .attr('id', 'svg-1')
                .append('g')
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            let line = d3.line()
                .x(function(d) { return x(d.year); })
                .y(function(d) { return y(d.people); });

            d3.csv(this.csvinput, this.format, (error, data)=>{
                if (error) throw error;

                x.domain([d3.min(data, function(d) { return d.year; })-0.5, d3.max(data, function(d) { return d.year; })+0.5]);
                y.domain([d3.min(data, function(d) { return d.people;})-170, d3.max(data, function(d) {return d.people;})+1000]);
                fakeY.domain([d3.min(data, function(d) { return d.people; })-170, d3.max(data, function(d) { return d.people; })+1000]);

                // Add the x Axis
                this.svg.append("g")
                    .attr('class', 'x axis')
                    .attr("transform", "translate(0," + this.chart_h + ")")
                    .call(xAxis);

                this.svg.append('g')
                    .attr('class', 'y axis')
                    .call(yAxis)
                    .append('text')
                    .attr('x', -5)
                    .attr('y', 0)
                    .text('人數')

                this.svg.append('g')
                    .attr('class', 'fakeaxis')
                    .call(fakexAxis)

                this.svg.append('g')
                    .attr('class', 'x axis')
                    .append('text')
                    .attr('x', -30)
                    .attr('y', this.chart_h + 15)
                    .text('年')

                // draw line
                this.svg.append("path")
                    .datum(data)
                    .attr("class", "animate-path-1")
                    .attr('id', 'line-1')
                    .attr("d", line);
            });
        },
        createChart: function(){

            this.getSVGSize();

            if(this.mob){
                this.createMobChart();
            }else {
                this.createPCChart();
            }
        }
    },
}
</script>

<style>

.axis path, .axis line {
    fill: none;
    stroke: #9E9E9F;
    shape-rendering: crispEdges;
    stroke-width: 5px;
}

.fakeaxis path {
    fill: none;
    stroke: #9E9E9F;
    shape-rendering: crispEdges;
    stroke-width: 5px;
}

.fakeaxis line {
    display: none;
}

.x.axis path {
    display: none;
}

.y.axis path {
    stroke: none;
}

.y.axis line {
    stroke-dasharray: 4,10;
    stroke-width: 2px;
}

.x.axis text,.y.axis text, .fakeaxis text{
    font-size: 16px;
    fill: #000;
}

.x.axis text{
    transform: translate(0px, 5px);
    font-weight: bold;
}

.y.axis text{
    transform: translate(-5px, -5px);
}

#line-1 {
    fill: none;
    stroke: green;
    stroke-width: 4px;
}
</style>