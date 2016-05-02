var SpaceShooter = SpaceShooter || {};

SpaceShooter.Enemy = function(game, x, y, key, health, enemyBullets) {
    Phaser.Sprite.call(this, game, x, y, key);

    //game.physics.arcade.enable(this);


    this.animations.add('getHit', [0, 1, 2, 1, 0], 25, false);
    this.anchor.setTo(0.5);
    this.health = health;

    this.enemyBullets = enemyBullets;
};

SpaceShooter.Enemy.prototype = Object.create(Phaser.Sprite.prototype);´ˆ
SpaceShooter.Enemy.prototype.constructor = SpaceShooter.Enemy;

SpaceShooter.Enemy.prototype.update = function() {
    if(this.x < 0.05 * this.game.world.width) {
        this.x = 0.05 * this.game.world.width + 2;
        this.body.velocity.x *= -1;
    } else if(this.x > 0.95 * this.game.world.width) {
        this.x = 0.95 * this.game.world.width - 2;
        this.body.velocity.x *= -1;
    }

    // kill enemy if off world at bottom
    if(this.position.y > this.game.world.height) {
        this,kill();
    }
};

SpaceShooter.Enemy.prototype.damage = function(amount) {
    Phaser.Sprite.prototype.damage.call(this, amount);

    this.play('getHit');
}


