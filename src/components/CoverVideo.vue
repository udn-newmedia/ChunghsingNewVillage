<template>

    <div class="video-contain" id="cover-video">
        <video preload="metadata" :src="source" :poster="videoPoster" playsinline data-target="1" muted autoplay loop></video>
        <div style="margin-top: -8px;" class="video-control">
            <i class="fa fa-spinner fa-pulse video-wait" data-target="1"></i>
        </div>
    </div>

</template>

<script>
export default {
  name: 'covervideo',
  props: ['src', 'srcWeb', 'poster', 'posterWeb'],
  data: function() {
      return {
          progress: 0,
          currentTime: 0
      }
  },
  computed: {
    source: function() {
        if (window.innerWidth < 1024) {
            return this.src
        }
        else {
            return this.srcWeb
        }
    },
    videoPoster: function() {
        if (window.innerWidth < 1024) {
            return this.poster
        }
        else {
            return this.posterWeb
        }
    }
  },
  created: function() {
      window.addEventListener('scroll', this.onScroll);
  },
  destroyed: function() {
      window.removeEventListener('scroll', this.onScroll);
  },  
  mounted: function(){

    let video = document.querySelector('VIDEO');
    let spinner = document.querySelector('.video-wait');

    video.onwaiting = function(){
        // console.log('wait');
        spinner.style.opacity = "1";
    };

    video.oncanplay = function(){
        // console.log('canPlay');
        spinner.style.opacity = "0";
    };

    video.onplay = function(){
        console.log('play');
    };

    video.onpause = function(){
        console.log('pause');
    }
  },
  methods: {
    onScroll: function() {
        console.log('abc')
    },
    gaSender: function() {
    }
  }
}
</script>

<style scoped>

    .video-contain{
        background: rgb(236, 234, 234);
    }

    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    
    .video-wait {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 60px;
        color: #FFB93E;
        margin-left: -23.5px;
        margin-top: -30px;
        transition: opacity 0.2s ease;
        opacity: 1;
        pointer-events: none;
    }

</style>
