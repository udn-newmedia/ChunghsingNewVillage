<template>
    <div class="quote-contain" v-bind:style="{ 'border-top-color': borderColor, 'border-bottom-color': borderColor}">
        <div class="quote-text" v-html="text" v-bind:style="{color: color}"></div>
        <div class="quote-ref">{{refer}}</div>
    </div>
</template>

<script>
export default {
    name: 'quote',
    props: ['text', 'refer', 'color', 'borderColor']
}
</script>

<style scoped> 
    .quote-contain {
        position: relative;
        font-family: "PMingLiU";
        padding: 10px 20px;
        margin: 0 0 20px;
        font-size: 26px;
        font-weight: bolder;
        border-left: 5px solid #eee;
        letter-spacing: -1px;
    }

    .quote-contain::before {
        height: 3px;
        background: #FFB93E;
        width: 90px;
        margin: 0 auto 50px auto;
        content: ' ';
        display: block;
    }

    .quote-contain::after {
        height: 3px;
        background: #FFB93E;
        width: 90px;
        margin: 60px auto 0 auto;
        content: ' ';
        display: block;
    }

    .quote-ref {
        position: absolute;
        font-size: 17px;
        color: gray;
        bottom: 30px;
        right: 0;
    }
</style>
