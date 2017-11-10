<template>
    <div class="photocomparison">
        <div class="canvas-bg" :style="{opacity: opacity}">
            <canvas />
        </div>
        <div class="back-contain" :style="{opacity: opacity}">
            <canvas />
        </div>
        <div class="fix-text" :style="{opacity: opacity}">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'photocomparison',
    props: ['text', 'src-old', 'src-new', 'src-web_New', 'src-web_Old'],
    data: function(){
        return{
            w: window.innerWidth,
            ctx: null,
            image: new Image(),
            image2: new Image(),
            opacity: 0
        }
    },
    computed: {
        canvas_width: function(){
            if(this.w < 1024){
                return 375
            }
            else{
                return 1280
            }
        },
        canvas_height: function(){
            if(this.w < 1024){
                return 667
            }
            else{
                return 720
            }
        }
    },
    methods: {
        drawCanvas: function() {
            this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.canvas_width, this.canvas_height)
        },
        handleScroll: function(e) {
            let currentH = window.pageYOffset;
            if (currentH > (this.$el.offsetTop - window.innerHeight - 200) && currentH < (this.$el.offsetTop + window.innerHeight)) {
                this.opacity = 1;
                this.doCompare(currentH);
            }
            else {
                this.opacity = 0;
            }
        },
        doCompare: function(scroll_now) {
            
            var ratio = (this.$el.offsetTop + window.innerHeight - scroll_now) / window.innerHeight.toFixed(2);

            console.log(ratio)

            if(this.w < 1024){
                this.ctx.drawImage(this.image, 0, 0, 450, 800, 0, 0, 375, 667);                
                this.ctx.drawImage(this.image2, 0, 800*ratio, 450, 800, 0, 667*ratio, 375, 667);
            }else{

            }
        }
    },
    mounted: function() {
        this.ctx = this.$el.children[0].children[0].getContext('2d')
        if (this.w < 1024) {
            this.image.src = this.srcNew
            this.image2.src = this.srcOld
            
            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height
        }
        else {
            this.image.src = this.srcWeb_New
            this.image2.src = this.srcWeb_Old

            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height
        }
        this.image.addEventListener('load', this.drawCanvas)
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
    .photocomparison{
        height: 200vh;
        position: relative;
    }

    .fix-text{
        color: #FFFFFF;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 17px;
        padding: 5px 20px;
        background-color: rgba(0, 0, 0, .7);
    }

    .canvas-bg{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    canvas{
        width: 100%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px){
        .fix-text{
            font-size: 40px;
        }
        .canvas-bg{
            height: 100%;
            left: -12.5%;
        }
        canvas{
            width: auto;
            height: 100%;
        }
    }
    @media screen and (min-width:1281px){
        .fix-text{
            font-size: 40px;
        }
    }

</style>
