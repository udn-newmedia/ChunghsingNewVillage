let player,
    cursors;

export default {

    init: function(){
        this.game.stage.backgroundColor = '#000';
    },

    preload: function(){

    },

    create: function(){
        console.log('play');

        let bg = this.game.add.image(0,0,'bg');
        let bgSize = this.game.cache.getImage('bg');
            bg.width = bgSize.width;
            bg.height = bgSize.height;

        this.game.world.setBounds(0,0,bg.width,bg.height);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        player = this.game.add.sprite(100, 600, "player");  
        player.anchor.setTo(0.5,0.5);
        player.animations.add('walk');
        player.animations.play('walk',10,true);

        this.game.physics.p2.enable(player);
        player.body.fixedRotation = true;   
        cursors = this.game.input.keyboard.createCursorKeys();
        this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    },

    update: function(){
        player.body.setZeroVelocity();

        // if (cursors.up.isDown)
        // {
        //     player.body.moveUp(300)
        // }
        // else if (cursors.down.isDown)
        // {
        //     player.body.moveDown(300);
        // }

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -300;
        }
        else if (cursors.right.isDown)
        {
            player.body.moveRight(300);
        }
    },

    render: function(){
        // this.game.debug.spriteBounds(player);
    }
}
