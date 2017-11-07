<template>

    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="dataSrc" frameborder="0" allowfullscreen></iframe>
    </div>

</template>

<script>
import Utils from 'udn-newmedia-utils'


export default {
    name: 'youtubevideo',
    props: ['dataSrc', 'dataTarget'],
    data: function() {
        return {
            progress: 0,
            getProgressTimer: null
        }
    },
    mounted: function() {

    },
    methods: {
        getPlayingProgress: function() {

            let video = document.querySelector('VIDEO');
            let self = this;

            if (this.getProgressTimer == null) {
                this.getProgressTimer = setInterval(function() {
                    let curTime = video.currentTime;
                    let percent = curTime / video.duration * 100;
                    // let temp = currentTime / video.duration * 100;

                    //Send GA every 5 seconds
                    if (Math.floor(curTime / 5) > self.progress) {
                        self.progress = Math.floor(curTime / 5)

                        console.log(self.$options.name + ' : ' + self.progress * 5);

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

</style>
