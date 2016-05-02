var SpaceShooter = SpaceShooter || {};

//initiate the Phaser framework
SpaceShooter.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

SpaceShooter.game.state.add('GameState', SpaceShooter.GameState);
SpaceShooter.game.state.start('GameState');
