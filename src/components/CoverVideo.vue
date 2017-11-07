<template>

    <div class="video-contain" id="cover-video">
        <video preload="metadata" :src="source" :poster="videoPoster" playsinline muted autoplay loop></video>
        <div style="margin-top: -8px;" class="video-control">
            <i class="fa fa-spinner fa-pulse video-wait"></i>
        </div>
    </div>

</template>

<script>
import Utils from 'udn-newmedia-utils'

let title = document.title;
let isMob = Utils.detectMob(10);
let platform = (isMob == true) ? 'Mob' : 'PC'

export default {
  name: 'covervideo',
  props: ['src', 'srcWeb', 'poster', 'posterWeb','dataTarget'],
  data: function() {
      return {
          progress: 0,
          getProgressTimer: null
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

    video.onplay = this.getPlayingProgress()

    video.onpause = function(){
        // console.log('pause');
        if(this.getProgressTimer) {
            clearInterval(this.getProgressTimer);
            this.getProgressTimer = null;
        }
    }
  },
  methods: {
    onScroll: function() {
        let scroll_now = window.pageYOffset;
        let covervideo = document.querySelector('VIDEO');

        if(scroll_now > (this.$el.offsetTop + window.innerHeight - 200)){
            if(!covervideo.paused){
                covervideo.pause();
            }
        } else if(scroll_now > 0 && scroll_now < (this.$el.offsetTop + window.innerHeight - 200)){
            if (covervideo.paused) {
                covervideo.play();
            }
        }
    },
    getPlayingProgress: function(){
      
        let video = document.querySelector('VIDEO');
        let self = this;

        if (this.getProgressTimer == null) {
            this.getProgressTimer = setInterval(function() {
                let curTime = video.currentTime;
                let percent = curTime / video.duration * 100;
                // let temp = currentTime / video.duration * 100;

                // Hiding playing button
                // if (temp > 0.6) {
                //     $('.video-play[data-target="' + id + '"]').css("opacity", 0);
                // }

                //Send GA every 5 seconds
                if (Math.floor(curTime / 5) > self.progress) {
                    self.progress = Math.floor(curTime / 5)

                    console.log(self.$options.name +' : '+ self.progress*5);

                    // ga("send", {
                    //     "hitType": "event",
                    //     "eventCategory": "movie play",
                    //     "eventAction": "play",
                    //     "eventLabel": "[" + platform + "] [" + title + "] [movie " + self.dataTarget + " play " + (self.progress * 5) + "seconds]"
                    // });
                }
            }, 600);
        }
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
