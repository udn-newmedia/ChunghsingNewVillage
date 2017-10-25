import bg from "@/assets/BG_Bar_test.jpg";
import dude from "@/assets/dude.png";

export default {

    init: function(){
        this.game.stage.backgroundColor = '#000';
    },

    preload: function(){
        //loading bar
        var preloadSprite = this.game.add.sprite(this.game.width / 2 - 220 / 2, this.game.height / 2, "loader");
        this.game.load.setPreloadSprite(preloadSprite);

        //loading assets
        this.game.load.image('bg', bg);   

        this.game.load.spritesheet("player", dude, 32, 48);  

        // this.game.load.onFileComplete.add(function(progress) {
        //   console.log(progress);
        // });

        this.game.load.onLoadComplete.add(function() {
            // console.log("loading completed");
            this.game.state.start('Play');
        },this);

    },

    create: function(){
        console.log('load');
    }
}
