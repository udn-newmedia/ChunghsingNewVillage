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

    import config from '@/states/config';

    export default {
        name: 'illustration',
        mounted: function() {
            this.createGame();
        },
        methods: {
            createGame: function(){

                let rootComputedStyle = getComputedStyle(document.getElementById("root").parentElement);
                let gamewidth = document.getElementById("root").parentElement.clientWidth;

                gamewidth -= parseFloat(rootComputedStyle.paddingLeft) + parseFloat(rootComputedStyle.paddingRight);

                let gameheight = gamewidth * (config.getGameHeight()/config.getGameWidth()) + "px";
                
                document.getElementById("root").style.height = gameheight;

                let NoProvince = NoProvince || {};

                NoProvince.game = new Phaser.Game(config.getGameWidth(), config.getGameHeight(), Phaser.CANVAS, 'root');

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

        position: absolute;
        bottom: 0;
    }

</style>
