<template>
    <div id="root"></div>
</template>

<script>
// import 'pixi'
// import 'p2'
// import Phaser from 'phaser'

import BootState from '@/states/boot';
import LoadState from '@/states/load';
import PlayState from '@/states/Play';

let bg_width = 1920,
    bg_height = 667;

export default {
    name: 'illustration',
    mounted: function() {
        this.createGame();
    },
    methods: {
        createGame: function(){

            // Changing height for keeping ratio
            if(window.innerWidth !== 1920){
                let h = window.innerWidth*(bg_height/bg_width) + "px";
                document.getElementById("root").style.height = h;
            }

            let NoProvince = NoProvince || {};

            NoProvince.game = new Phaser.Game(bg_width, bg_height, Phaser.CANVAS, 'root');

            NoProvince.BootState = BootState;
            NoProvince.LoadState = LoadState;
            NoProvince.PlayState = PlayState;

            NoProvince.game.state.add('Boot', NoProvince.BootState);
            NoProvince.game.state.add('Load', NoProvince.LoadState);
            NoProvince.game.state.add('Play', NoProvince.PlayState);

            NoProvince.game.state.start('Boot');
        }
    }
}
</script>

<style scoped>

    #root {
        width: 100%;
        height: 667px;
    }

</style>
