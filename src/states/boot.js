import preloader from '@/assets/preloader.gif'

export default {

    init: function(){

        this.game.stage.backgroundColor = '#000';

        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

    },

    preload: function(){

        this.game.load.image('loader', preloader);

    },

    create: function(){
        // console.log('create');

        this.game.state.start('Load');

    }
}
